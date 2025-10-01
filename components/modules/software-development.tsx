import Image from "next/image";
import React from "react";
import SectionBadge from "../shared/section-badge";

const SoftwareDevelopment = () => {
  return (
    <div className="px-4 sm:px-8 bg-[#F5F5F5] relative py-16 space-y-12 lg:px-12">
      <div className="absolute inset-0 bg-[url('/vector-white.png')] bg-center bg-cover bg-no-repeat" />

      <div className="text-center">
        <h3 className="text-secondary max-w-[486px] mx-auto text-[28px] font-semibold font-dm-sans">
          Web & Software Development Services
        </h3>
        <p className="text-tertiary max-w-[464px] mx-auto text-base font-medium">
          Whether you need a sleek website, a custom business application, or
          enterprise-grade software, our team of developers and designers bring
          your vision to life with the latest technologies and best practices.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-16">
        <div className="space-y-6">
          <SectionBadge title="Why Choose CoreInnovate for Web development" />

          <div>
            <h3 className="text-secondary max-w-[396px] text-[28px] font-semibold font-dm-sans">
              We help you simplify, secure, & scale.
            </h3>
            <p className="text-tertiary max-w-[436px] text-base font-medium">
              Our Cloud Management Services provides your business with the
              following
            </p>
          </div>
        </div>

        <div className="relative h-[462px] rounded-2xl overflow-hidden">
          <Image fill className="object-cover" alt="team" src={`/team.jpg`} />
        </div>
      </div>
    </div>
  );
};

export default SoftwareDevelopment;

const services = [
  {
    title: "Tailored Solutions",
    description:
      "We do not believe in one size fits all. Every project is designed around your business goals, workflows, and users to ensure maximum impact.",
  },

  {
    title: "Modern and Scalable Technology",
    description: "",
  },

  {
    title: "End-to-End Development",
    description: "",
  },

  {
    title: "User-Focused Design",
    description: "",
  },

  {
    title: "Ongoing Support and Maintenance",
    description: "",
  },
];
