import Image from "next/image";
import React from "react";
import SectionBadge from "../shared/section-badge";
import { CircleCheck } from "lucide-react";

const ProjectRisk = () => {
  return (
    <div className="px-4 sm:px-8 -mt-16 py-16 text-white space-y-12 bg-dark lg:px-12">
      <div className="text-center">
        <h3 className=" text-[28px] font-semibold font-dm-sans">
          Project Risk Management Services
        </h3>
        <p className=" max-w-[464px] mx-auto text-base font-medium">
          At CoreInnovate, our Project Risk Management Services help you
          anticipate, evaluate, and control risks before they affect your
          project’s success
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <SectionBadge title="WHY CHOOSE OUR rISK MANAGEMENT service" />

          <div>
            <h3 className=" text-[28px] font-semibold font-dm-sans">
              Identify Risks Early. Minimize Impact. Deliver with Confidence.
            </h3>
            <p className=" text-base font-medium">
              Every project comes with uncertainties, but unmanaged risks can
              lead to delays, increased costs, and reduced quality. Our risk
              management services include
            </p>
          </div>

          <ul className="space-y-4 flex flex-col list-inside">
            {services.map((service, index) => (
              <li
                className="text-base inline-flex gap-2 items-center font-medium "
                key={index}
              >
                <CircleCheck />
                {service}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative h-[462px] rounded-2xl overflow-hidden">
          <Image fill className="object-cover" alt="project-risk" src={`/project-risk.jpg`} />
        </div>
      </div>
    </div>
  );
};

export default ProjectRisk;

const services = [
  "Risk identification workshops and assessments",
  "Risk register development and maintenance",
  "Quantitative and qualitative risk analysis",
  "Risk response planning and mitigation strategies",
  "Quantitative Risk Modelling",
  "Contingency and fallback planning",
  "Ongoing monitoring and reporting",
  "Stakeholder communication and risk awareness training",
];
