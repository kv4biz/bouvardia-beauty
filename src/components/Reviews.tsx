import Image from "next/image";
import React from "react";
import { Marquee } from "@/components/magicui/marquee";
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
    <div className="flex container items-center justify-center mx-auto overflow-hidden">
      <div className="flex flex-col px-5 py-4 md:py-10 md:px-10 items-center gap-4">
        <div className="flex text-center gap-4 md:gap-6">
          <span className="text-xl md:text-3xl inter font-semibold">
            WHAT OUR CLIENTS SAYS
          </span>
        </div>
        {/* Marquee replaces the Carousel */}
        <Marquee
          className="relative w-full mt-4 md:max-w-5xl duration-1000"
          reverse
          pauseOnHover
        >
          {reviews.map((review, index) => (
            <div
              key={index}
              className="w-[300px] md:w-[320px] bg-[#FAFAFC] p-4 m-2 rounded-sm shadow inter"
            >
              {/* Stars on top */}
              <div className="flex gap-0 text-yellow-400 mb-2">
                {Array.from({ length: review.star }, (_, i) => (
                  <Star key={i} size={12} fill="currentColor" />
                ))}
              </div>
              {/* Review text */}
              <p className="text-sm text-gray-900 mb-4">{review.review}</p>
              {/* Bottom row with name and picture */}
              <div className="flex justify-between items-center">
                <span className="font-semibold text-sm">-{review.name}</span>
                <Image
                  src={review.img}
                  alt={`${review.name} review`}
                  width={400}
                  height={400}
                  className="w-12 h-12 object-cover rounded-full"
                />
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Reviews;
