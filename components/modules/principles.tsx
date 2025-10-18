import React from "react";
import SectionBadge from "../shared/section-badge";
import { cn } from "@/lib/utils";
import Image from "next/image";

const Principle = () => {
  return (
    <div className="px-4 flex flex-col max-w-7xl mx-auto items-center space-y-6">
      <SectionBadge title="Our Core values" />

      <div className="text-center">
        <h3 className="title">The Principles That Guide Us</h3>
        <p className="text-base text-tertiary max-w-[444px] mx-auto">
          The principles that shape how we work, build trust, and deliver
          lasting impact for our clients
        </p>
      </div>

      <div className="grid mt-6 sm:grid-cols-2 lg:grid-cols-4 gap-9">
        {values.map((value) => (
          <div
            key={value.title}
            className={cn(
              "flex flex-col items-center gap-y-2 text-center"
            )}
          >
            <Image width={20} height={20} alt="icon" src={value.icon} />

            <p className="font-medium text-xl text-black">{value.title}</p>
            <p className="text-base max-w-[378px] mx-auto text-tertiary">
              {value.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Principle;

export const values = [
  {
    title: "Security First",
    description:
      "We prioritise protecting your business, data, and people in everything we do.",
    icon: "/security.svg",
  },
  {
    title: "Innovation",
    description:
      "We embrace modern technologies and creative solutions to keep you ahead in a digital world.",
    icon: "/innovation.svg",
  },
  {
    title: "Integrity",
    description:
      "We believe in transparency, honesty, and building trust through every partnership.",
    icon: "/integrity.svg",
  },
  {
    title: "Excellence",
    description:
      "We strive for high standards in service delivery, ensuring quality, reliability, and results.",
    icon: "/excellence.svg",
  },
];
