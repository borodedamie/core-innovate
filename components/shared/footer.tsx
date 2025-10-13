import Image from "next/image";
import React from "react";
import { Button } from "./button";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="px-4 sm:px-8 lg:px-12 space-y-16 pt-16">
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="col-span-1 flex flex-col gap-y-6">
          <Link href={`/`}>
            <Image
              src={`/logo-white.png`}
              width={107}
              height={68}
              alt="coreinnovate logo"
            />
          </Link>

          <div className="space-y-6">
            <p className="text-[#344054] text-base">
              Be the first to receive all the recent updates, articles, and
              valuable materials.
            </p>
            <div className="flex items-center gap-2">
              <input
                className="placeholder:text-[#98A2B3] text-sm py-3 px-4 border-[#D0D5DD] border rounded-[100px]"
                placeholder="Email address"
              />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 lg:grid-cols-3 col-span-2 justify-between">
          <div className="space-y-6">
            <p className="text-base text-[#98A2B3]">Company</p>

            <div className="space-y-4 text-base text-[#667185] font-medium">
              <Link href={`/about-us`}>
                <p className="hover:underline">About</p>
              </Link>
              <p className="hover:underline">Security</p>
              <p className="hover:underline">Partnerships</p>
              <p className="hover:underline">Community</p>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-base text-[#98A2B3]">Services</p>

            <Link href={`/services`}>
              <div className="space-y-4 text-base text-[#667185] font-medium">
                <p className="hover:underline">Managed IT & Security</p>
                <p className="hover:underline">Cloud Solutions</p>
                <p className="hover:underline">Development & Digital</p>
                <p className="hover:underline">Project Excellence</p>
                <p className="hover:underline">Training Services</p>
              </div>
            </Link>
          </div>

          <div className="space-y-6">
            <p className="text-base text-[#98A2B3]">Resources</p>

            <div className="space-y-4 text-base text-[#667185] font-medium">
              <Link href={`/resources`}>
                {" "}
                <p className="hover:underline">Blog / Insights / Guides</p>
              </Link>
              <p className="hover:underline">Case Studies</p>
              <p className="hover:underline">Certifications & Partnerships</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t flex flex-wrap gap-6 items-center justify-between border-[#E4E7EC] py-8">
        <div className="flex flex-wrap text-sm font-medium text-[#667185] items-center gap-8">
          <p className="hover:underline">Terms of Service</p>
          <p className="hover:underline">Privacy Policy</p>
          <p className="hover:underline">Security</p>
          <p className="hover:underline">Site Map</p>
        </div>

        <p className="text-sm text-[#98A2B3]">© 2025. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
