import Image from "next/image";
import React from "react";
import SectionBadge from "../shared/section-badge";
import VerticalStepList from "../shared/vertical-steplist";

const CloudManagementServices = () => {
  return (
    <div className="px-4 sm:px-8 bg-[#F5F5F5] relative py-16 space-y-12 lg:px-12">
      <div className="absolute inset-0 bg-[url('/vector-white.png')] bg-center bg-cover bg-no-repeat" />

      <div className="text-center">
        <h3 className="text-secondary max-w-[486px] mx-auto text-[28px] font-semibold font-dm-sans">
          Cloud Management Services (Microsoft Azure & AWS)
        </h3>
        <p className="text-tertiary max-w-[464px] mx-auto text-base font-medium">
          CoreInnovate helps you harness the full power of Microsoft Azure and
          Amazon Web Services (AWS)
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-16 relative z-10">
        <div className="space-y-6">
          <SectionBadge title="Why Choose CoreInnovate for Cloud Management" />

          <div>
            <h3 className="text-secondary lg:max-w-[396px] text-[28px] font-semibold font-dm-sans">
              We help you simplify, secure, & scale.
            </h3>
            <p className="text-tertiary lg:max-w-[436px] text-base font-medium">
              Our Cloud Management Services provides your business with the
              following
            </p>
          </div>

          <VerticalStepList key={'cloud'} items={services} />
        </div>

        <div className="relative h-[462px] sm:h-full rounded-2xl overflow-hidden">
          <Image fill className="object-cover" alt="team" src={`/cloud.jpg`} />
        </div>
      </div>
    </div>
  );
};

export default CloudManagementServices;

const services = [
  {
    title: "Seamless Migration",
    description:
      "Move your workloads, applications, and data to the cloud with minimal disruption. We design and execute a clear migration plan that ensures a smooth transition from on-premise systems to Azure or AWS.",
  },
  {
    title: "Performance Optimisation",
    description:
      "We monitor and fine-tune your cloud environment to deliver speed, reliability, and scalability. Our experts continuously optimise workloads to keep your business running at peak performance.",
  },
  {
    title: "Cost Control and Transparency",
    description:
      "Cloud costs can spiral if unmanaged. We analyse your usage, remove waste, and right-size resources to ensure you only pay for what you need.",
  },
  {
    title: "Security and Compliance",
    description:
      "Your data is safe with us. We implement robust security frameworks, enforce best practices, and ensure compliance with industry regulations such as GDPR, ISO 27001, and HIPAA.",
  },
  {
    title: "Hybrid and Multi-Cloud Support",
    description:
      "Whether you are running Azure, AWS, or a hybrid mix, we manage complex environments with ease and ensure seamless integration with your on-premises systems.",
  },
];
