import React from "react";
import SectionBadge from "../shared/section-badge";

const OurVision = () => {
  return (
    <div className="px-4 max-w-7xl mx-auto space-y-6">
      <SectionBadge title="our vision" />

      <div className="grid lg:grid-cols-2 gap-12">
        <h3 className="title">Why CoreInnovate was founded</h3>

        <div className="text-base text-secondary font-medium space-y-6">
          <p>
            CoreInnovate was created with a simple but powerful mission: to
            bridge the gap between technology and business outcomes. Too often,
            organisations struggle with IT that is reactive, insecure, or
            misaligned with their goals. Our founder, Michael Folorunsho, saw
            first-hand how the right strategy and support could transform
            businesses — not just by fixing problems, but by preventing them and
            driving growth.
          </p>

          <p>
            From the start, CoreInnovate has been built on the belief that
            technology should empower people, protect organisations, and create
            long-term value. That vision continues to guide everything we do
            today.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurVision;
