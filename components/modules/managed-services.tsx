import Image from "next/image";
import React from "react";
import SectionBadge from "../shared/section-badge";
import { CircleCheck } from "lucide-react";

const ManagedServices = () => {
  return (
    <div className="px-4 sm:px-8 space-y-12 lg:px-12">
      <div className="text-center">
        <h3 className="text-secondary text-[28px] font-semibold font-dm-sans">
          Managed IT Services
        </h3>
        <p className="text-tertiary max-w-[464px] mx-auto text-base font-medium">
          CoreInnovate simplifies IT with proactive support, monitoring, and
          guidance for growth.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-16">
        <div className="relative h-[462px] rounded-2xl overflow-hidden">
          <Image
            fill
            className="object-cover"
            alt="team"
            src={`/team.jpg`}
          />
        </div>

        <div className="space-y-6">
          <SectionBadge title="What we offer" />

          <div>
            <h3 className="text-secondary text-[28px] font-semibold font-dm-sans">
              Reliable IT. Secure Systems. Better Business.
            </h3>
            <p className="text-tertiary text-base font-medium">
              Our managed services offers the following solutions for your
              business
            </p>
          </div>

          <ul className="space-y-4 flex flex-col list-inside">
            {services.map((service, index) => (
              <li
                className="text-base inline-flex gap-2 items-center font-medium text-tertiary"
                key={index}
              >
                <CircleCheck />
                {service}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ManagedServices;

const services = [
  "Helpdesk & Remote Support",
  "Network Management",
  "Cybersecurity Services",
  "Cloud & Microsoft 365 Management",
  "Backup & Disaster Recovery",
  "Onsite Support",
];
