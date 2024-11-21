import Image from "next/image";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Jess B",
    img: "/review-img1.png",
    review:
      "My bag is so beautiful! It's exactly what I wanted and I had a flawless experience with Baghunter. Very happy customer! I love my bag!!! Thank you so much!",
    star: 5,
  },
  {
    name: "Chris",
    img: "/review-img2.png",
    review:
      "My bag is so beautiful! It's exactly what I wanted and I had a flawless experience with Baghunter. Very happy customer! I love my bag!!! Thank you so much!",
    star: 5,
  },
  {
    name: "Anna",
    img: "/review-img3.png",
    review:
      "My bag is so beautiful! It's exactly what I wanted and I had a flawless experience with Baghunter. Very happy customer! I love my bag!!! Thank you so much!",
    star: 5,
  },
  {
    name: "Dara",
    img: "/review-img4.png",
    review:
      "My bag is so beautiful! It's exactly what I wanted and I had a flawless experience with Baghunter. Very happy customer! I love my bag!!! Thank you so much!",
    star: 5,
  },
];

const Reviews = () => {
  return (
    <div className="flex flex-col px-5 md:px-10 items-center gap-4">
      {/* Flower Image positioned at the top right */}
      <Image
        src="/flower3.svg"
        alt="flower"
        width={360}
        height={360}
        loading="lazy"
        className="absolute z-10 -mt-10 md:-mt-32 w-full max-w-5xl opacity-30 object-contain"
      />
      <div className="flex flex-col mt-20 md:mt-32 items-center gap-4 md:gap-6">
        <span className="font-semibold text-xl">Our Customers Reviews</span>
        <span className="max-w-sm md:max-w-lg text-center">
          Phasellus penatibus et magnis dis parturient montes, nascetur
          ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu,
          pretium.
        </span>
      </div>
      {/* Carousel */}
      <Carousel
        className="relative w-full items-center justify-center overflow-hidden md:overflow-visible mt-5 max-w-5xl"
        opts={{ loop: true, align: "start" }}
      >
        <CarouselPrevious />
        <CarouselContent className="flex gap-4 ">
          {reviews.map((review, index) => (
            <CarouselItem
              key={index}
              className="basis-full md:basis-1/2 lg:basis-1/3"
            >
              <div className="">
                <div className="flex flex-col items-center gap-2">
                  <Image
                    src={review.img}
                    alt={`${review.name} review`}
                    width={400}
                    height={400}
                    className="w-full h-full object-contain rounded-md mb-4"
                  />
                  <span className="font-semibold text-sm">{review.name}</span>
                  <div className="flex gap-1 my-2 text-black">
                    {Array.from({ length: review.star }, (_, i) => (
                      <Star key={i} size={12} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-xs text-center text-gray-700 px-3 md:px-5">
                    {review.review}
                  </p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Reviews;
