import { useState } from 'react';
import { Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';

const AvailabilityChecker = ({ baseUrl = 'https://casa-negrano.lodgify.com/it/tutte-le-proprieta' }) => {
  const [date, setDate] = useState({
    from: null,
    to: null,
  });
  const [guests, setGuests] = useState(1);

  const handleSearch = () => {
    if (!date.from || !date.to) return;

    const params = new URLSearchParams({
      adults: guests.toString(),
      children: '0',
      infants: '0',
      pets: '0',
      sort: 'price',
      arrival: format(date.from, 'yyyyMMdd'),
      departure: format(date.to, 'yyyyMMdd'),
    });

    const url = `${baseUrl}/?${params.toString()}`;
    window.open(url, '_blank');
  };

  return (
    <Card className="w-full max-w-[80%] md:max-w-[50%]">
      {/* <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calendar className="h-5 w-5" />
          Verifica disponibilità
        </CardTitle>
      </CardHeader> */}
      <CardContent className='!p-6'>
        <div className="space-y-4 md:space-y-0 md:grid md:grid-cols-7 md:gap-6 items-end">
          <div className="space-y-2 md:col-span-3">
            <Label>Seleziona le date</Label>
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
                        {format(date.from, 'dd/MM/yyyy')} - {format(date.to, 'dd/MM/yyyy')}
                      </>
                    ) : (
                      format(date.from, 'dd/MM/yyyy')
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
                  onSelect={setDate}
                  numberOfMonths={2}
                  disabled={(date) => {
                    const today = new Date();
                    today.setHours(0, 0, 0, 0);
                    return date < today;
                  }}
                />
              </PopoverContent>
            </Popover>
          </div>

          <div className="space-y-2 md:col-span-2">
            <Label>Numero di ospiti</Label>
            <Input
              type="number"
              value={guests}
              onChange={(e) => setGuests(Math.max(1, parseInt(e.target.value) || 1))}
              min="1"
            />
          </div>

          <Button className="w-full md:col-span-2" disabled={!date?.from || !date?.to} onClick={handleSearch}>
            Cerca disponibilità
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AvailabilityChecker;
