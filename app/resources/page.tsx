import BookAssessment from "@/components/modules/book-assessment";
import PopularBlogs from "@/components/modules/popular-blogs";
import RecentArticles from "@/components/modules/recent-articles";
import SectionBadge from "@/components/shared/section-badge";
import React from "react";

const page = () => {
  return (
    <div className="space-y-16">
      <div className="bg-dark h-[497px] flex items-center px-4 sm:px-8 lg:px-12">
        <div className="relative text-white bg-cover bg-center w-full flex flex-col gap-6">
          <SectionBadge title="blog" />
          <p className="text-4xl max-w-[600px] font-semibold font-dm-sans">
            News & Articles
          </p>
          <p className="text-[#F9FAFB] max-w-4xl text-base">
            Get the latest insights, industry updates, and expert advice
            designed to keep your business secure, productive, and future-ready
            in today’s fast-changing digital world.
          </p>
        </div>
      </div>

      <PopularBlogs />
      <RecentArticles />
      <BookAssessment />
    </div>
  );
};

export default page;
