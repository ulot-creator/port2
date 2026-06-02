"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const Gallery4 = ({
  title = "Selected Work",
  description = "Discover how leading companies and developers are leveraging modern web technologies to build exceptional digital experiences.",
  items = [],
}) => {
  const [carouselApi, setCarouselApi] = useState(null);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!carouselApi) {
      return;
    }
    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
      setCurrentSlide(carouselApi.selectedScrollSnap());
    };
    updateSelection();
    carouselApi.on("select", updateSelection);
    return () => {
      carouselApi.off("select", updateSelection);
    };
  }, [carouselApi]);

  return (
    <section className="py-32 bg-background font-body">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="mb-8 flex items-end justify-between md:mb-14 lg:mb-16">
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold tracking-tight text-primary">
              {title}
            </h2>
            <p className="max-w-lg text-secondary text-lg">{description}</p>
          </div>
        </div>
      </div>
      <div className="w-full">
        <Carousel
          setApi={setCarouselApi}
          opts={{
            breakpoints: {
              "(max-width: 768px)": {
                dragFree: true,
              },
            },
          }}
        >
          {/* We adjust margins so it aligns with the container padded area (px-6 md:px-12 lg:px-24) */}
          <CarouselContent className="ml-0 pl-6 md:pl-12 lg:pl-24 pr-6 md:pr-12 lg:pr-24">
            {items.map((item) => (
              <CarouselItem
                key={item.id}
                className="max-w-[85vw] md:max-w-[400px] lg:max-w-[480px] pl-[20px]"
              >
                <div className="group rounded-xl cursor-pointer">
                  <div className="group relative h-full min-h-[30rem] max-w-full overflow-hidden rounded-xl aspect-[4/5]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="absolute h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 grayscale group-hover:grayscale-0"
                    />
                    {/* Gradient overlay adapting to monochrome scheme */}
                    <div className="absolute inset-0 h-full bg-gradient-to-t from-primary/90 via-primary/40 to-transparent mix-blend-multiply" />
                    
                    <div className="absolute inset-x-0 bottom-0 flex flex-col items-start p-6 text-background md:p-8">
                      <div className="text-xs font-medium uppercase tracking-widest text-background/80 mb-2">
                        {item.category}
                      </div>
                      <div className="mb-2 text-2xl font-heading font-bold md:mb-3">
                        {item.title}
                      </div>
                      <div className="mb-6 line-clamp-3 text-background/90 text-sm leading-relaxed">
                        {item.description}
                      </div>
                      <div className="flex items-center text-sm font-medium tracking-wide">
                        View Case Study{" "}
                        <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export { Gallery4 };
