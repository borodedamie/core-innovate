import { individualProgrammes } from "@/lib/data";
import { CircleCheck } from "lucide-react";

import React from "react";

const TrainingPath = () => {
  return (
    <div className="px-4 sm:px-8 lg:px-12 space-y-12">
      <div className="text-center">
        <h3 className="text-secondary text-[28px] font-semibold font-dm-sans">
          Training Path
        </h3>
        <p className="text-tertiary max-w-[650px] mx-auto text-base font-medium">
          At CoreInnovate, we provide trainings for both individuals and
          corporations. Explore some of our training paths below
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        <div className="space-y-6">
          <div>
            <h3 className="text-secondary text-[28px] font-semibold font-dm-sans">
              Individual Training Programs
            </h3>
            <p className="text-tertiary max-w-[435px] text-base font-medium">
              From beginner to job-ready, build the skills employers are looking
              for.
            </p>
          </div>

          <div className="flex flex-col gap-y-6">
            {individualProgrammes.map((programme) => (
              <div className="flex gap-2" key={programme.title}>
                <CircleCheck className="size-5 text-primary" />
                <div className="space-y-2">
                  <p className="font-medium text-secondary text-lg">
                    {programme.title}
                  </p>
                  <ul className="list-disc list-inside">
                    {programme.topics.map((topic) => (
                      <li className="text-base text-tertiary" key={topic}>
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6 p-6 border border-primary rounded-2xl">
          <div>
            <h3 className="text-secondary text-[28px] font-semibold font-dm-sans">
              Corporate Training Programs
            </h3>
            <p className="text-tertiary max-w-[435px] text-base font-medium">
              Equip your workforce with the knowledge and skills to strengthen
              security and boost productivity.
            </p>
          </div>

          <div className="flex flex-col gap-y-6">
            {individualProgrammes.map((programme) => (
              <div className="flex gap-2" key={programme.title}>
                <CircleCheck className="size-5 text-white fill-primary" />
                <div className="space-y-2">
                  <p className="font-medium text-secondary text-lg">
                    {programme.title}
                  </p>
                  <ul className="list-disc list-inside">
                    {programme.topics.map((topic) => (
                      <li className="text-base text-tertiary" key={topic}>
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainingPath;

