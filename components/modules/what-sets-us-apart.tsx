import Image from "next/image";
import { Button } from "../shared/button";
import { MoveRight } from "lucide-react";
import Link from "next/link";

const WhatSetsUsApart = () => {
  return (
    <div className="px-4 sm:px-8 lg:px-12 flex flex-col lg:flex-row items-center gap-12 py-16 bg-dark">
      <div className="relative overflow-hidden rounded-2xl w-full h-[300px] sm:h-[400px] lg:h-[493px] flex-shrink-0 lg:w-1/2">
        <Image
          src="/training.png"
          alt="training"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="space-y-6 text-white lg:w-1/2">
        <div className="flex items-center gap-2 text-xs font-medium">
          <span className="size-1.5 rounded-[2px] bg-white" />
          WHAT SETS US APART
        </div>

        <div className="flex flex-col gap-y-4">
          <h3 className="text-[28px] font-semibold font-dm-sans">
            From IT management to cloud, security, and training — we align
            technology with your business goals.
          </h3>
          <p className="text-base text-[#F7F9FC]">
            At CoreInnovate, we don’t just provide IT tools — we create
            technology strategies that move your business forward. Our approach
            combines proactive support, enterprise-grade security, and smart
            optimization to ensure your systems stay reliable, compliant, and
            cost-effective.
          </p>
          <p className="text-base text-[#F7F9FC]">
            Whether it’s managing Microsoft 365, securing sensitive healthcare
            data, migrating to the cloud, or training your workforce, we tailor
            every solution to your unique needs.
          </p>
        </div>

        <Link href="/services">
          <Button
            variant="white"
            className="text-primary flex items-center gap-2"
          >
            Learn More
            <MoveRight />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default WhatSetsUsApart;
