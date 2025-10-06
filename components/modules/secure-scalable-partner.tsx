import React from "react";
import SectionBadge from "../shared/section-badge";
import Image from "next/image";

const SecureScalablePartner = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-12 space-y-6">
      <div className="grid lg:grid-cols-2 gap-12">
        <div className="space-y-6">
          <SectionBadge title="why choose us" />

          <div className="space-y-2">
            <h3 className="text-secondary font-dm-sans font-semibold text-[28px]">
              Your Partner for Secure, Scalable IT
            </h3>
            <p className="text-base text-tertiary font-medium">
              Partnering with CoreInnovate means proactive care,
              enterprise-grade security, and technology built around your goals.
            </p>
          </div>

          <div className="grid pt-6 sm:grid-cols-2 gap-6">
            {whys.slice(0, 2).map((why) => (
              <div
                key={why.id}
                className="flex flex-col shadow-[0px_2px_4px_-1px_#10192805,0px_5px_13px_-5px_#1019280D] border border-[#F7F9FC] gap-y-6 p-6 rounded-lg bg-white"
              >
                <Image
                  src={"/shield-tick.png"}
                  alt={"shield icon"}
                  height={40}
                  width={40}
                />

                <p className="text-grey font-dm-sans text-lg font-semibold">
                  {why.title}
                </p>

                <p className="font-medium text-base text-tertiary">
                  {why.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative w-full h-[543px] lg:h-full overflow-hidden rounded-2xl">
          <Image
            alt="partners"
            fill
            className="object-cover"
            src={"/partners.jpg"}
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-12">
        {whys.slice(2, 4).map((why) => (
          <div
            key={why.id}
            className="flex flex-col shadow-[0px_2px_4px_-1px_#10192805,0px_5px_13px_-5px_#1019280D] border border-[#F7F9FC] gap-y-6 p-6 rounded-lg bg-white"
          >
            <Image
              src={"/shield-tick.png"}
              alt={"shield icon"}
              height={40}
              width={40}
            />

            <p className="text-grey font-dm-sans text-lg font-semibold">
              {why.title}
            </p>

            <p className="font-medium text-base text-tertiary">
              {why.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SecureScalablePartner;

const whys = [
  {
    id: 1,
    title: "24/7 Threat Monitoring",
    description:
      "Our security analysts continuously monitor your network, endpoints, and cloud environments to detect and stop threats before they escalate.",
  },

  {
    id: 2,
    title: "Predictable Costs",
    description:
      "No more surprise bills. Our managed services come with transparent, predictable pricing that helps you plan your IT budget with confidence.",
  },

  {
    id: 3,
    title: "Tailored Solutions",
    description:
      "We do not believe in one size fits all. Every project is designed around your business goals, workflows, and users to ensure maximum impact",
  },

  {
    id: 4,
    title: "Modern and Scalable Technology",
    description:
      "From responsive websites to enterprise applications, we use the latest frameworks, cloud technologies, and secure coding standards to build solutions that grow with your business.",
  },
];
