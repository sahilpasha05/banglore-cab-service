import { useEffect, useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselApi,
} from "@/components/ui/carousel";

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
  interval = 3000,
}: AutoScrollCarouselProps) => {
  const [api, setApi] = React.useState<CarouselApi>();
  const autoScrollRef = useRef<NodeJS.Timeout | null>(null);
  const isInteractingRef = useRef(false);

  useEffect(() => {
    if (!api) return;

    const startAutoScroll = () => {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current);
      }

      autoScrollRef.current = setInterval(() => {
        if (!isInteractingRef.current && api.canScrollNext()) {
          api.scrollNext();
        } else if (!isInteractingRef.current && !api.canScrollNext()) {
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
        if (!isInteractingRef.current) {
          startAutoScroll();
        }
      }, 2000);
    };

    const handleMouseEnter = () => {
      isInteractingRef.current = true;
      stopAutoScroll();
    };

    const handleMouseLeave = () => {
      isInteractingRef.current = false;
      setTimeout(() => {
        if (!isInteractingRef.current) {
          startAutoScroll();
        }
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
  );
};

// Add missing React import
import * as React from "react";
