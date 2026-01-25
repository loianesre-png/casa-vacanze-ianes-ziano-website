import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

interface CarouselCasaNegranoProps {
  images: { src: string }[];
}

export default function CarouselCasaNegrano({ images }: CarouselCasaNegranoProps) {
  console.log(images);
  return (
    <Carousel className="w-full max-w-sm">
      <CarouselContent className="-ml-1">
        {images.map((image, index) => (
          <CarouselItem key={index} className="pl-1 ">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-[3/4] items-center justify-center p-6">
                  <img
                    loading="lazy"
                    src={image.src}
                      // srcSet={`${image} 1x, ${image.replace('.webp', '@2x.webp')} 2x`}
                    alt={`Carousel item ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-2 md:left-[-10%]" />
      <CarouselNext className="right-2 md:right-[-10%]" />
    </Carousel>
  );
}
