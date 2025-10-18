import Image from "next/image";
import React from "react";
import SectionBadge from "../shared/section-badge";
import { CircleCheck } from "lucide-react";

const ManagedSecurity = () => {
  return (
    <div className="px-4 -mt-16 py-16 text-white bg-dark">
      <div className="space-y-12 max-w-7xl mx-auto">
      <div className="text-center">
        <h3 className=" text-[28px] font-semibold font-dm-sans">
          Managed Security (SOC AS-A-SERVICE)
        </h3>
        <p className=" max-w-[464px] mx-auto text-base font-medium">
          Our SOC-as-a-Service delivers 24/7 monitoring and response, delivering
          enterprise security at affordable cost.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-16">
        <div className="relative h-[462px] rounded-2xl overflow-hidden">
          <Image fill className="object-cover" alt="soc" src={`/new-soc.png`} />
        </div>

        <div className="space-y-6">
          <SectionBadge title="WHY CHOOSE SOC-As-a-service" />

          <div>
            <h3 className=" text-[28px] font-semibold font-dm-sans">
              Enterprise-Grade Cybersecurity Without the Overhead
            </h3>
            <p className=" text-base font-medium">
              SOC-As-a-Service protects small and mid-sized businesses against
              cyber threats by offering the following
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
      </div>
      </div>
    </div>
  );
};

export default ManagedSecurity;

const services = [
  "24/7 Threat Monitoring",
  "Endpoint Detection & Response (EDR)",
  "Vulnerability Management",
  "Firewall & Network Security Management",
  "Incident Detection & Response (IDR)",
  "Compliance Reporting & Auditing",
];
