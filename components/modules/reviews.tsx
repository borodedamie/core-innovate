"use client";

import React from "react";
import SectionBadge from "../shared/section-badge";

import ReviewComponent from "../ui/review";

const Reviews = () => {
  return (
    <div className="px-4 sm:px-8 lg:px-12 bg-[#F5F5F5] space-y-6 py-16">
      <SectionBadge title="reviews" />

      <div>
        <h3 className="text-secondary font-dm-sans font-semibold text-[28px]">
          What our clients say about us
        </h3>
        <p className="text-base text-tertiary font-medium">
          We do our best to provide the best experience ever
        </p>
      </div>

      <div className="pt-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mx-auto max-w-screen-lg">
          {testimonials.map((testimonial) => (
            <ReviewComponent key={testimonial.id} {...testimonial} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;

const testimonials = [
  {
    id: 1,
    title: "Top-notch cyber security and compliance support",
    name: "Mike O.",
    position: "Director, Excellis Care Group Ltd",
    rating: 5,
    content:
      "We were struggling with data security and compliance. Core Innovate guided us through Cyber Essentials certification and set up stronger protection for our systems. They made the process smooth and stress-free. Now our clients trust us more, and we feel safer from threats.",
  },
  {
    id: 2,
    title: "Brilliant website that reflects our brand perfectly",
    name: "Ola O.",
    position: "Founder, 7th Care",
    rating: 4,
    content:
      "Core Innovate built our website from scratch and nailed the look we wanted. It’s clean, fast, and works beautifully on mobile. They didn’t just build a site, they helped us understand how to attract customers online. We’ve seen a big jump in inquiries since launch.",
  },
  {
    id: 3,
    title: "Reliable IT partner that gives us peace of mind",
    name: "Augustina S.",
    position: "Director, Statecare Solutions",
    rating: 5,
    content:
      "Core Innovate transformed how we manage our IT. Their team is quick to respond and always explains things in plain English. Since moving to their managed support, downtime has dropped to nearly zero, and our staff can work without constant tech issues. It’s like having our own IT department.",
  },
];
