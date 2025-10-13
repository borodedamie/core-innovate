import { blogs } from "@/lib/data";
import Image from "next/image";
import React from "react";
import Article from "../ui/article";

const PopularBlogs = () => {
  return (
    <div className="px-4 space-y-6 sm:px-8 lg:px-12">
      <div className="flex items-center gap-3">
        <h3 className="font-dm-sans text-2xl font-semibold text-black">
          Popular
        </h3>

        <hr className="w-full flex-1 border-none bg-[#F0F2F5] h-[1px]" />
      </div>

      <div className="grid lg:grid-cols-2 justify-between items-center gap-6">
        <div className="relative w-full h-[476px] rounded-lg overflow-hidden">
          <Image src={`/popular.jpg`} fill className="object-cover" alt="hand holding cloud system" />
        </div>

        <div className="grid gap-y-6">
          {blogs.slice(0, 2).map((blog) => (
            <Article
              key={blog.id}
              id={blog.id}
              title={blog.title}
              tags={blog.tags}
              content={blog.content}
              date={blog.date}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularBlogs;
