import BookAssessment from "@/components/modules/book-assessment";
import Founder from "@/components/modules/founder";
import OurMission from "@/components/modules/our-mission";
import OurVision from "@/components/modules/our-vision";
import Principle from "@/components/modules/principles";
import Image from "next/image";

const page = () => {
  return (
    <div className="space-y-16 pt-36">
      <div className="bg-dark hero h-[369px] flex items-center px-4 sm:px-8 lg:px-12">
        <div className="relative text-white bg-[url('/services-hero.png')] bg-cover bg-center text-center w-full flex flex-col items-center gap-6">
          <p className="text-4xl max-w-[600px] font-semibold font-dm-sans">
            Building Stronger Businesses Through Technology
          </p>
          <p className="text-[#F9FAFB] max-w-[550px] text-base">
            At CoreInnovate, our mission is simple: make technology secure,
            seamless, and a true driver of growth.
          </p>
        </div>
      </div>

      <div 
  className="relative h-[455px] bg-[url('/about.jpg')] rounded-t-2xl overflow-hidden -mt-24 bg-cover bg-center sm:bg-position-[100%_15%]"
/>
      <OurVision />
      <OurMission />
      <Founder />
      <Principle />
      <BookAssessment />
    </div>
  );
};

export default page;
