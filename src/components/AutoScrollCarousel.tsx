// AutoScrollCarousel.tsx
import { useEffect, useRef, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselApi,
} from "@/components/ui/carousel";
import * as React from "react";

interface AutoScrollCarouselProps {
  children: React.ReactNode;
  className?: string;
  align?: "start" | "center" | "end";
  basis?: string;
  interval?: number;
}

export const AutoScrollCarousel = ({
  children,
  className = "",
  align = "start",
  basis = "md:basis-1/2 lg:basis-1/3",
  interval = 2000,
}: AutoScrollCarouselProps) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const autoScrollRef = useRef<NodeJS.Timeout | null>(null);
  const isInteractingRef = useRef(false);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });

    const startAutoScroll = () => {
      if (autoScrollRef.current) clearInterval(autoScrollRef.current);

      autoScrollRef.current = setInterval(() => {
        if (!isInteractingRef.current && api.canScrollNext()) {
          api.scrollNext();
        } else if (!isInteractingRef.current) {
          api.scrollTo(0);
        }
      }, interval);
    };

    const stopAutoScroll = () => {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current);
        autoScrollRef.current = null;
      }
    };

    const handlePointerDown = () => {
      isInteractingRef.current = true;
      stopAutoScroll();
    };

    const handlePointerUp = () => {
      isInteractingRef.current = false;
      setTimeout(() => {
        if (!isInteractingRef.current) startAutoScroll();
      }, 2000);
    };

    const handleMouseEnter = () => {
      isInteractingRef.current = true;
      stopAutoScroll();
    };

    const handleMouseLeave = () => {
      isInteractingRef.current = false;
      setTimeout(() => {
        if (!isInteractingRef.current) startAutoScroll();
      }, 1000);
    };

    const carouselContainer = api.rootNode();

    carouselContainer.addEventListener("pointerdown", handlePointerDown);
    carouselContainer.addEventListener("pointerup", handlePointerUp);
    carouselContainer.addEventListener("mouseenter", handleMouseEnter);
    carouselContainer.addEventListener("mouseleave", handleMouseLeave);

    startAutoScroll();

    return () => {
      stopAutoScroll();
      carouselContainer.removeEventListener("pointerdown", handlePointerDown);
      carouselContainer.removeEventListener("pointerup", handlePointerUp);
      carouselContainer.removeEventListener("mouseenter", handleMouseEnter);
      carouselContainer.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [api, interval]);

  return (
    <div className="w-full">
      <Carousel
        setApi={setApi}
        opts={{
          align,
          loop: true,
        }}
        className={className}
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {React.Children.map(children, (child, index) => (
            <CarouselItem key={index} className={`pl-2 md:pl-4 ${basis}`}>
              {child}
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>

      {/* Dot indicators */}
      <div className="flex justify-center mt-4 space-x-2">
        {Array.from({ length: count }).map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              current === index ? "bg-accent scale-110" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
