"use client";

import React from "react";
import SectionBadge from "../shared/section-badge";
import ReviewComponent from "../ui/review";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

const Reviews = () => {
  return (
    <div className="px-4 sm:px-8 lg:px-12 bg-[#F5F5F5] space-y-6 py-16">
      <SectionBadge title="reviews" />

      <div>
        <h3 className="text-secondary font-dm-sans font-semibold text-[28px]">
          What our clients say about us
        </h3>
        <p className="text-base text-tertiary font-medium">
          We do our best to provide the best experience ever
        </p>
      </div>

      <div className="pt-6">
        <Swiper
          modules={[Pagination]}
          slidesPerView={1}
          spaceBetween={24}
          className="pb-10"
          pagination={{
            clickable: true,
            el: ".custom-pagination",
          }}
        >
          {[1, 2, 3, 4, 5].map((_, index) => (
            <SwiperSlide className="!w-[360px]" key={index}>
              <ReviewComponent key={index} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="custom-pagination flex justify-center mt-4"></div>
      </div>
    </div>
  );
};

export default Reviews;
