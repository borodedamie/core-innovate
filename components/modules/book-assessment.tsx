import React from "react";
import { Button } from "../shared/button";
import { MoveUpRight } from "lucide-react";
import Link from "next/link";

const BookAssessment = () => {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="relative bg-dark rounded-3xl h-[397px] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-[url('/vector-2.png')] bg-center bg-cover bg-no-repeat" />

      <div className="relative text-white text-center w-full flex flex-col items-center gap-6">
        <p className="text-3xl sm:text-4xl max-w-[600px] font-semibold font-dm-sans">
          Ready to Secure and Scale Your Business with Confidence?
        </p>
        <p className="max-w-[502px] text-base font-medium text-[#E4E7EC]">
          Take the next step towards secure, productive, and cost-effective
          solutions that will help your business thrive.
        </p>
        <Link href={`/contact-us`}>
        <Button size="lg" variant="white">
          Book Assessment
          <span className="size-8 bg-primary flex items-center justify-center rounded-full">
            <MoveUpRight className="size-4 text-white" />
          </span>
        </Button>
        </Link>
      </div>
    </div>
    </div>
  );
};

export default BookAssessment;
