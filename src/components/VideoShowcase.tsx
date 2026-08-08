import { useState, useEffect } from 'react';
import { videos } from '@/data/videoData';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel';
import VideoCard from '@/components/VideoCard';
import CarouselControls from '@/components/CarouselControls';

export default function VideoShowcase() {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  useEffect(() => {
    if (!api) return;
    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());
    const onSelect = () => {
      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
    };
    api.on('select', onSelect);
    api.on('reInit', onSelect);
    return () => {
      api.off('select', onSelect);
      api.off('reInit', onSelect);
    };
  }, [api]);

  return (
    <section
      aria-label="Video showcase"
      id="video"
      className="bg-[#FAF8F5] py-20 md:py-28"
    >
      <div className="container mx-auto px-6 sm:px-10 lg:px-16">
        {/* Section header */}
        <div className="mb-12 flex flex-col gap-8 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div className="flex flex-col gap-3">
            <span className="text-[10px] font-medium uppercase tracking-[0.38em] text-[#8b8178]">
              Reel
            </span>
            <h2 className="max-w-[760px] text-[clamp(1.75rem,3.5vw,3.5rem)] font-semibold leading-[0.98] tracking-[-0.055em] text-[#171513]">
              Trải nghiệm của khách hàng
            </h2>
            <p className="max-w-[480px] pb-1 text-[15px] leading-[1.75] tracking-[-0.01em] text-[#6d655e]">
              Khám phá những kiểu tóc được yêu thích tại salon , từ cắt uốn nhuộm đến tạo kiểu với giá hợp lý cho khách hàng ở khu vực chợ Lái Thiêu.
            </p>
          </div>

          {/* Carousel controls — upper right, desktop only */}
          <div className="hidden md:block">
            {api && (
              <CarouselControls
                scrollPrev={() => api.scrollPrev()}
                scrollNext={() => api.scrollNext()}
                canScrollPrev={canScrollPrev}
                canScrollNext={canScrollNext}
              />
            )}
          </div>
        </div>

        {/* Carousel */}
        <Carousel
          opts={{
            align: 'start',
            loop: false,
            dragFree: false,
            containScroll: 'trimSnaps',
          }}
          setApi={setApi}
        >
          <CarouselContent className="-ml-3 md:-ml-4">
            {videos.map((video, index) => (
              <CarouselItem
                key={video.id}
                className="basis-full pl-3 md:basis-1/3 md:pl-4 lg:basis-1/5"
              >
                <div className="h-[70vh] max-h-[560px] min-h-[420px]">
                  <VideoCard video={video} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Mobile controls */}
        <div className="mt-8 flex md:hidden">
          {api && (
            <CarouselControls
              scrollPrev={() => api.scrollPrev()}
              scrollNext={() => api.scrollNext()}
              canScrollPrev={canScrollPrev}
              canScrollNext={canScrollNext}
            />
          )}
        </div>

        {/* CTA */}
        <div className="mt-20 flex justify-center">
          <a
            href="https://zalo.me/0942777009"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#2a221c] px-10 py-4 text-[12px] uppercase tracking-[0.15em] text-white transition-colors duration-300 hover:bg-[#3d2f24] active:scale-95"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            Đặt Lịch Hẹn
          </a>
        </div>
      </div>
    </section>
  );
}
