"use client"

import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import type { CarouselApi } from "@/components/ui/carousel"
import Image from "next/image"

export function CarouselWithDots() {
  const [api, setApi] = React.useState<CarouselApi | null>(null)
  const [count, setCount] = React.useState(0)
  const [current, setCurrent] = React.useState(0)

  React.useEffect(() => {
    if (!api) return

    // Initialize
    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap())

    // Update on change
    const onSelect = () => setCurrent(api.selectedScrollSnap())
    api.on("select", onSelect)
    api.on("reInit", () => {
      setCount(api.scrollSnapList().length)
      setCurrent(api.selectedScrollSnap())
    })

    return () => {
      api.off("select", onSelect)
    }
  }, [api])

  return (
    <div className="w-full flex flex-col justify-center items-center mx-auto">
      <Carousel className="w-full flex justify-center items-center mx-auto" setApi={setApi}>
        <CarouselContent className="w-full flex justify-center items-center mx-auto">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="w-full flex justify-center items-center mx-auto">
              <div className="p-1 w-full flex justify-center items-center mx-auto">
                <Image src={"/assets/images/carousel-image.png"} alt="carousel image" width={700} height={700} priority className="object-cover"/>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="hidden cursor-pointer sm:flex"/>
        <CarouselNext className="hidden cursor-pointer sm:flex"/>
      </Carousel>

      {/* Dots pagination */}
      <div className="mt-4 flex items-center justify-center gap-2">
        {Array.from({ length: count }).map((_, i) => {
          const active = i === current
          return (
            <button
              key={i}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => api?.scrollTo(i)}
              data-active={active}
              className={[
                "h-2 w-2 rounded-full transition cursor-pointer",
                "bg-muted-foreground/30",
                "data-[active=true]:w-5 data-[active=true]:rounded-full",
                "data-[active=true]:bg-foreground"
              ].join(" ")}
            />
          )
        })}
      </div>
    </div>
  )
}
