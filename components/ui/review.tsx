import Image from "next/image";
import React from "react";

export interface Testimonial {
  id: number;
  title: string;
  name: string;
  position: string;
  content: string;
  rating?: number;
}

const ReviewComponent: React.FC<Testimonial> = ({
  title,
  name,
  position,
  rating = 5,
  content,
}) => {
  return (
    <div
      style={{
        boxShadow: "0px 5px 14px rgba(8, 15, 52, 0.04)",
      }}
      className="bg-white border border-[#F5F5F5] rounded-lg p-6 flex flex-col h-full"
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-0.5">
          {Array.from({ length: rating }).map((_, index) => (
            <Image
              key={index}
              src={"/star.svg"}
              alt="star"
              width={20}
              height={20}
            />
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto mb-6">
        <p className="text-lg font-semibold text-black mb-2">{title}</p>

        <p className="text-[#344054] text-base">{content}</p>
      </div>

      <div>
        <p className="text-base text-black font-medium">{name}</p>
        <p className="text-sm text-secondary font-medium">{position}</p>
      </div>
    </div>
  );
};

export default ReviewComponent;
