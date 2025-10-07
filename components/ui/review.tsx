import Image from "next/image";
import React from "react";

const ReviewComponent = () => {
  return (
    <div
      style={{
        boxShadow: "0px 5px 14px rgba(8, 15, 52, 0.04)",
      }}
      className="bg-white border space-y-6 border-[#F5F5F5] rounded-lg p-6"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-0.5">
          {Array.from({ length: 5 }).map((_,index) => (
            <Image key={index} src={"/star.svg"} alt="star" width={20} height={20} />
          ))}
        </div>

        <p className="font-light text-xs text-black">2 days ago</p>
      </div>

      <div>
        <p className="text-lg font-semibold text-black">
          Best security company
        </p>

        <p className="text-[#344054] text-base">
          I love this product because the support is great. The support from the
          training to web development was great Please give them a try ...
        </p>
      </div>

      <p className="text-base text-black font-medium">Mike Warren</p>
    </div>
  );
};

export default ReviewComponent;
