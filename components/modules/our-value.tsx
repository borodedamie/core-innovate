import Image from "next/image";
import React from "react";
import SectionBadge from "../shared/section-badge";

const OurValues = () => {
  return (
    <div className="px-4 sm:px-8 grid bg-[url('/vector.png')] bg-center bg-cover bg-no-repeat lg:grid-cols-3 gap-12 lg:px-12">
      <div className="bg-primary lg:col-span-2 flex items-center rounded-2xl px-5 py-10 sm:p-10">
        <div className="text-white space-y-7">
          <SectionBadge title="our core value" />

          <p className="text-2xl font-semibold">
            “At CoreInnovate, we bring together expertise, integrity, and a
            people-first mindset. Whether we are guiding a business through
            complex Information technology and security challenges or helping a
            student take their first steps into tech, our mission remains the
            same: to create impact, inspire confidence, and enable growth.”
          </p>

          <p className="text-lg font-semibold">Michael Folorunsho, CEO</p>
        </div>
      </div>

      <div className="relative w-full bg-center overflow-hidden rounded-2xl">
        <Image src="/founder.jpg" width={443} height={500} className="h-auto w-full" alt="values"/>
      </div>
    </div>
  );
};

export default OurValues;
