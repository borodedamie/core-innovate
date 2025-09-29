import React from "react";
import { Button } from "../shared/button";
import { MoveUpRight } from "lucide-react";

const BookAssessment = () => {
  return (
    <div className="relative bg-dark rounded-3xl mx-auto max-w-[75%] h-[397px] flex items-center px-4 sm:px-8 lg:px-12 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/vector-2.png')] bg-center bg-cover bg-no-repeat" />

      <div className="relative text-white text-center w-full flex flex-col items-center gap-6">
        <p className="text-4xl max-w-[600px] font-semibold font-dm-sans">
          Ready to Secure and Scale Your Business with Confidence?
        </p>
        <p className="max-w-[502px] text-base font-medium text-[#E4E7EC]">
          Take the next step towards secure, productive, and cost-effective
          solutions that will help your business thrive.
        </p>
        <Button size="lg" variant="white">
          Book Assessment
          <span className="size-8 bg-primary flex items-center justify-center rounded-full">
            <MoveUpRight className="size-4 text-white" />
          </span>
        </Button>
      </div>
    </div>
  );
};

export default BookAssessment;
