import { useState, useMemo } from 'react';
import { Calendar, Info } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import { format, parseISO, addDays, differenceInDays } from 'date-fns';

const BookingWidget = ({ availability, minStayRules, maxGuests = 4 }) => {
  const [date, setDate] = useState({
    from: null,
    to: null,
  });
  const [guests, setGuests] = useState(1);
  const [error, setError] = useState('');

  const { unavailableDates, validDateRange, minStayMap } = useMemo(() => {
    const unavailableDates = new Set();
    const minStayMap = new Map();

    if (minStayRules?.calendar_items) {
      const defaultItem = minStayRules.calendar_items.find((item) => item.is_default);
      if (defaultItem?.prices?.[0]?.min_stay) {
        minStayMap.set('default', defaultItem.prices[0].min_stay);
      }

      minStayRules.calendar_items.forEach((item) => {
        if (item.date && !item.is_default && item.prices?.[0]?.min_stay) {
          minStayMap.set(item.date, item.prices[0].min_stay);
        }
      });
    }

    if (!availability?.[0]?.periods) {
      return {
        unavailableDates,
        validDateRange: { start: null, end: null },
        minStayMap,
      };
    }

    const periods = availability[0].periods;
    let startDate = null;
    let endDate = null;

    periods.forEach((period) => {
      const periodStart = parseISO(period.start);
      const periodEnd = parseISO(period.end);

      if (!startDate || periodStart < startDate) startDate = periodStart;
      if (!endDate || periodEnd > endDate) endDate = periodEnd;

      if (period.available === 0) {
        let currentDate = new Date(periodStart);
        while (currentDate <= periodEnd) {
          unavailableDates.add(format(currentDate, 'yyyy-MM-dd'));
          currentDate.setDate(currentDate.getDate() + 1);
        }
      }
    });

    return {
      unavailableDates,
      validDateRange: { start: startDate, end: endDate },
      minStayMap,
    };
  }, [availability, minStayRules]);

  const isDateUnavailable = (date) => {
    // Check if date is in the past (before today)
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Reset time to start of day
    if (date < today) return true;

    // Existing checks
    if (!validDateRange.start || !validDateRange.end) return true;
    if (date < validDateRange.start || date > validDateRange.end) return true;
    return unavailableDates.has(format(date, 'yyyy-MM-dd'));
  };

  const getMinStayForDate = (date) => {
    const dateStr = format(date, 'yyyy-MM-dd');
    return minStayMap.get(dateStr) || minStayMap.get('default') || 1;
  };

  const DayContent = (props) => {
    const date = props.date;
    const isUnavailable = isDateUnavailable(date);
    const dayNumber = date.getDate();
    const minStay = getMinStayForDate(date);

    return (
      <div className="relative w-8 h-8 flex items-center justify-center">
        <div className={cn('h-8 w-8 flex items-center justify-center', props.className)}>
          {dayNumber}
          {minStay > 1 && !isUnavailable && (
            <div className="absolute bottom-0 right-0 w-3 h-3 flex items-center justify-center bg-blue-500 rounded-full text-white text-[8px]">
              {minStay}
            </div>
          )}
        </div>
        {isUnavailable && (
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `linear-gradient(to right bottom, 
                transparent calc(50% - 0.5px), 
                #FF97A3 calc(50% - 0.5px), 
                #FF97A3 calc(50% + 0.5px), 
                transparent calc(50% + 0.5px)
              )`,
              zIndex: 1,
            }}
          />
        )}
      </div>
    );
  };

  const validateDateRange = (from, to) => {
    if (!from || !to) return true;

    const minStay = getMinStayForDate(from);
    const stayDuration = differenceInDays(to, from);

    if (stayDuration < minStay) {
      setError(`Il soggiorno minimo per questa data è di ${minStay} notti`);
      return false;
    }

    let currentDate = new Date(from);
    while (currentDate <= to) {
      if (isDateUnavailable(currentDate)) {
        setError("L'intervallo selezionato include date non disponibili");
        return false;
      }
      currentDate = addDays(currentDate, 1);
    }

    setError('');
    return true;
  };

  const handleDateSelect = (range) => {
    if (!range) {
      setDate(null);
      setError('');
      return;
    }

    if (range.from && !range.to) {
      if (isDateUnavailable(range.from)) {
        return;
      }
      setDate({ from: range.from, to: null });
      return;
    }

    if (range.from && range.to) {
      if (validateDateRange(range.from, range.to)) {
        setDate(range);
      } else {
        setDate({ from: range.from, to: null });
      }
    }
  };

  const handleCheckAvailability = () => {
    if (!date.from || !date.to) return;

    // Get property ID from availability data
    const propertyId = availability?.[0]?.property_id;
    if (!propertyId) {
      setError('Property ID not found');
      return;
    }

    // Format dates for URL
    const arrival = format(date.from, 'yyyy-MM-dd');
    const departure = format(date.to, 'yyyy-MM-dd');

    // Construct checkout URL
    const checkoutUrl = new URL('https://checkout.lodgify.com/it/casa-negrano/' + propertyId + '/contact');
    checkoutUrl.searchParams.append('currency', 'EUR');
    checkoutUrl.searchParams.append('ref', 'bnbox');
    checkoutUrl.searchParams.append('arrival', arrival);
    checkoutUrl.searchParams.append('departure', departure);
    checkoutUrl.searchParams.append('adults', guests.toString());

    // Open in new window
    window.open(checkoutUrl.toString(), '_blank');
  };

  const handleGuestsChange = (e) => {
    const value = parseInt(e.target.value) || 1;
    const newValue = Math.min(Math.max(1, value), maxGuests);
    setGuests(newValue);
  };

  return (
    <Card className="w-full">
      {/* <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calendar className="h-5 w-5" />
          Prenota il tuo soggiorno
        </CardTitle>
      </CardHeader> */}
      <CardContent className="!p-6">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleCheckAvailability();
          }}
          className="space-y-4 md:space-y-0 md:flex md:gap-6 items-end"
        >
          <div className="space-y-2">
            <Label>Seleziona le date</Label>
            {error && (
              <div className="text-sm text-red-500 flex items-center gap-1">
                <Info className="h-4 w-4" />
                {error}
              </div>
            )}
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn('w-full justify-start text-left font-normal', !date && 'text-muted-foreground')}
                >
                  <Calendar className="mr-2 h-4 w-4" />
                  {date?.from ? (
                    date.to ? (
                      <>
                        {format(date.from, 'LLL dd, y')} - {format(date.to, 'LLL dd, y')}
                      </>
                    ) : (
                      format(date.from, 'LLL dd, y')
                    )
                  ) : (
                    <span>Scegli una data</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <CalendarComponent
                  initialFocus
                  mode="range"
                  defaultMonth={date?.from}
                  selected={date}
                  onSelect={handleDateSelect}
                  numberOfMonths={2}
                  disabled={isDateUnavailable}
                  components={{
                    DayContent,
                  }}
                />
              </PopoverContent>
            </Popover>
          </div>

          <div className="space-y-2 min-w-fit">
            <Label>Numero di ospiti</Label>
            <Input type="number" value={guests} onChange={handleGuestsChange} min="1" max={maxGuests} />
          </div>

          <Button type="submit" className="w-full" disabled={!date?.from || !date?.to || error}>
            Prenota
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default BookingWidget;
