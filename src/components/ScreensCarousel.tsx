import React from "react";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

type ScreensCarouselProps = {
  images: string[];
  interval?: number; // ms
};

export default function ScreensCarousel({ images, interval = 4000 }: ScreensCarouselProps) {
  const [api, setApi] = React.useState<CarouselApi | null>(null);
  const [selected, setSelected] = React.useState(0);
  const timerRef = React.useRef<number | null>(null);
  const [orientations, setOrientations] = React.useState<Record<number, 'landscape' | 'portrait'>>({});

  // when api becomes available, wire select handler
  React.useEffect(() => {
    if (!api) return;

    const onSelect = () => setSelected(api.selectedScrollSnap());
    onSelect();
    api.on("select", onSelect);
    api.on("reInit", onSelect);

    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api]);

  // autoplay
  React.useEffect(() => {
    if (!api) return;

    const play = () => {
      if (!api) return;
      api.scrollNext();
    };

    timerRef.current = window.setInterval(play, interval);

    return () => {
      if (timerRef.current) {
        window.clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [api, interval]);

  const handleMouseEnter = () => {
    if (timerRef.current) {
      window.clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  const handleMouseLeave = () => {
    if (!api) return;
    timerRef.current = window.setInterval(() => api.scrollNext(), interval);
  };

  return (
    <div className="w-full">
      <Carousel setApi={(a) => setApi(a)} className="w-full" opts={{ loop: true }}>
        <CarouselContent className="w-full">
          {images.map((src, idx) => (
            <CarouselItem key={idx} className="w-full">
              {(() => {
                const orient = orientations[idx] ?? 'landscape';
                return (
                  <div
                    className={cn(
                      // compact consistent height (match cafe layout)
                      "w-full h-48 md:h-56 rounded-lg bg-muted flex items-center justify-center",
                      "transition-transform duration-700"
                    )}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <div className="relative w-full h-full flex items-center justify-center rounded-lg">
                      <div className="relative z-10 w-full h-full flex items-center justify-center px-6">
                        {/* Foreground image with max dimensions and allow full height/width within container */}
                        <img
                          src={src}
                          alt={`screenshot-${idx + 1}`}
                          className="object-contain object-center max-w-[90%] max-h-[90%] rounded-lg shadow-md"
                          loading="eager"
                          decoding="async"
                          onLoad={(e) => {
                            const img = e.currentTarget as HTMLImageElement;
                            const w = img.naturalWidth;
                            const h = img.naturalHeight;
                            setOrientations((s) => ({ ...s, [idx]: w >= h ? 'landscape' : 'portrait' }));
                          }}
                          style={{
                            transition: 'opacity 500ms ease, transform 700ms ease',
                            opacity: selected === idx ? 1 : 0.6,
                            transform:
                              selected === idx
                                ? 'translateY(0px) scale(1.02)'
                                : idx < selected
                                ? 'translateX(-6px) scale(1)'
                                : 'translateX(6px) scale(1)',
                            imageRendering: 'auto' as const,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                );
              })()}
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Bullets removed per request */}
    </div>
  );
}
