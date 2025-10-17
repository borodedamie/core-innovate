import React from "react";
import SectionBadge from "../shared/section-badge";
import Image from "next/image";

const Founder = () => {
  return (
    <div className="px-4 space-y-6 sm:px-8 max-w-7xl mx-auto lg:px-12">
      <SectionBadge title="Founder & Information Security Leader" />

      <div className="grid lg:grid-cols-3 justify-center items-center gap-12">
        <div className="space-y-6 lg:col-span-2">
          <h3 className="title">About Mike Folley</h3>

          <div className="text-base text-secondary font-medium space-y-6">
            <p>
              Michael Folorunsho is an accomplished Information Security and GRC
              professional with over 15 years of experience spanning IT,
              healthcare, public sector, and consulting. With deep expertise in
              cyber risk management, compliance, and cloud security, he has a
              proven track record of implementing globally recognised frameworks
              such as ISO 27001, NIST CSF, and SOC 2.
            </p>

            <p>
              Holding an MSc in Cybersecurity and certifications including
              CRISC, Microsoft SC-200, MCITP, and MCSA, Michael has successfully
              led initiatives in incident response, threat intelligence, policy
              development, and stakeholder engagement. His leadership ensures
              that organisations not only achieve compliance but also adopt a
              security-first culture aligned with business strategy.
            </p>

            <p>
              As Founder of CoreInnovate, Michael is driven by a vision to
              bridge the gap between technology and business outcomes. Beyond
              his technical expertise, he is passionate about mentoring and
              coaching the next generation of IT and cybersecurity
              professionals, helping them gain the knowledge and confidence to
              thrive in the tech industry.
            </p>

            <p>
              Michael is also a member of ISACA and the Chartered Institute of
              Information Security (CIISEC), actively contributing to the
              professional community while continuing to champion secure,
              resilient, and innovative technology practices.
            </p>
          </div>
        </div>

        <div className="relative w-[356px] bg-center bg-cover aspect-square h-[488px] overflow-hidden rounded-2xl">
          <Image
            src="/mike.jpg"
            alt="mike folorunsho"
            fill
            className="object-fill"
          />
        </div>
      </div>
    </div>
  );
};

export default Founder;
