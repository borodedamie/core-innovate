import Image from "next/image";
import { Button } from "../shared/button";
import { MoveRight } from "lucide-react";

const WhatSetsUsApart = () => {
  return (
    <div className="px-4 sm:px-8 lg:px-12 flex flex-col lg:flex-row items-center gap-12 py-16 bg-dark">
      <div className="relative overflow-hidden rounded-2xl w-full h-[493px] lg:h-auto">
        <Image src={"/training.png"} className="object-cover" alt="training" fill />
      </div>

      <div className="space-y-6">
        <div className="flex items-center gap-2 text-xs font-medium text-white">
          <span className="size-1.5 rounded-[2px] bg-white" />
          WHAT SETS US APART
        </div>

        <div className="text-white flex flex-col gap-y-4">
          <h3 className="text-[28px] font-semibold font-dm-sans">
            From IT management to cloud, security, and training we align
            technology with your business goals.
          </h3>
          <p className="text-base text-[#F7F9FC]">
            At CoreInnovate, we don’t just provide IT tools we create technology
            strategies that move your business forward. Our approach combines
            proactive support, enterprise-grade security, and smart optimization
            to ensure your systems stay reliable, compliant, and cost-effective.
          </p>
          <p className="text-base text-[#F7F9FC]">
            Whether it’s managing Microsoft 365, securing sensitive healthcare
            data, migrating to the cloud, or training your workforce, we tailor
            every solution to your unique needs.
          </p>
        </div>

        <Button variant="white" className="text-primary">
          Learn More
          <MoveRight />
        </Button>
      </div>
    </div>
  );
};

export default WhatSetsUsApart;
