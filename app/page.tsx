import BookAssessment from "@/components/modules/book-assessment";
import Faqs from "@/components/modules/faqs";
import OurServices from "@/components/modules/our-services";
import OurValues from "@/components/modules/our-value";
import Reviews from "@/components/modules/reviews";
import SecureScalablePartner from "@/components/modules/secure-scalable-partner";
import WhatSetsUsApart from "@/components/modules/what-sets-us-apart";
import { Button } from "@/components/shared/button";
import { MoveUpRight } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="space-y-16">
      <div
        className="h-[685px] bg-no-repeat flex px-4 sm:px-8 lg:px-12 items-center bg-cover bg-center
        bg-[linear-gradient(104.5deg,#16365F_44.07%,rgba(25,80,130,0.841779)_57.49%,rgba(35,157,234,0.22)_73.41%,#239DEA_94.11%),url('/home.jpg')]"
      >
        <div className="flex flex-col gap-y-6">
          <span className="flex items-center gap-2 py-2.5 px-4 rounded-3xl bg-[#193D6B] text-white w-fit">
            <Image
              src={`/sparkle.svg`}
              alt="sparkle icon"
              width={16}
              height={16}
            />

            <p className="text-sm">Top IT security company</p>
          </span>

          <div className="max-w-2xl space-y-4">
            <h1 className="text-white font-dm-sans font-semibold text-4xl sm:text-5xl lg:text-6xl">
              Tech made strong, business made simple.
            </h1>
            <p className="text-[#F9FAFB] max-w-[550px] text-base">
              We deliver IT and cybersecurity solutions that protect your
              business and support growth.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-2 sm:items-center">
            <Button className="w-fit" size="lg">Contact Us</Button>
            <Button className="w-fit" size="lg" variant="white">
              Book a free consultation
              <span className="size-8 bg-primary flex items-center justify-center rounded-[72.73px]">
                <MoveUpRight className="size-4 text-white" />
              </span>
            </Button>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              <Image
                className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                src="https://i.pravatar.cc/100?img=1"
                alt=""
                width={24}
                height={24}
              />
              <Image
                className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                src="https://i.pravatar.cc/100?img=2"
                alt=""
                width={24}
                height={24}
              />
              <Image
                className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                src="https://i.pravatar.cc/100?img=3"
                alt=""
                width={24}
                height={24}
              />
            </div>

            <p className="text-white text-xs">
              <b className="text-xl">200+</b> Satisfied Customers
            </p>
          </div>
        </div>
      </div>

      <OurServices />
      <WhatSetsUsApart />
      <SecureScalablePartner />
      <Reviews />
      <OurValues />
      <Faqs />
      <BookAssessment />
    </div>
  );
}
