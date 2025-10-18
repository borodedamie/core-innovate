import { blogs } from "@/lib/data";
import React from "react";
import Article from "../ui/article";

const RecentArticles = () => {
  return (
    <div className="px-4 max-w-7xl mx-auto space-y-6">
      <div className="flex items-center gap-3">
        <h3 className="font-dm-sans text-2xl font-semibold text-black">
          Recent
        </h3>

        <hr className="w-full flex-1 border-none bg-[#F0F2F5] h-[1px]" />
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {blogs.map((blog) => (
          <Article key={blog.id} id={blog.id} image={blog.image} title={blog.title} content={blog.content} date={blog.date} tags={blog.tags} />
        ))}
      </div>
    </div>
  );
};

export default RecentArticles;
