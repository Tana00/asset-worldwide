"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { AiFillBackward, AiFillForward } from "react-icons/ai";
import { latestNews } from "@/utils";

export const SingleBlogComponent = ({ blog }) => {
  const router = useRouter();

  const findNextBlog = () => {
    const nextBlog = latestNews.find((item) => item.id === blog.id + 1);
    return nextBlog?.link;
  };
  const findPrevBlog = () => {
    const nextBlog = latestNews.find((item) => item.id === blog.id - 1);
    return nextBlog?.link;
  };
  return (
    <section className="w-10/12 md:w-11/12 lg:w-4/5 mx-auto mb-20 blog">
      <div className="leading-8 font-medium font-Avenir-Medium">
        <div dangerouslySetInnerHTML={{ __html: blog?.fullContent }} />
      </div>
      <div className="w-full flex items-center justify-end gap-4 !mt-10">
        <button
          className={`mt-4 flex items-center justify-center gap-2 text-primary-green bg-green-light text-center xl:py-2 xl:px-4 rounded-[100px] font-Avenir-heavy font-medium w-fit px-8 py-3.5 sm:text-base xl:w-[210px] xl:h-[56px] xl:text-lg hover:bg-primary-green hover:text-white transition duration-300 disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none`}
          disabled={blog?.id === 0}
          onClick={() => router.push(findPrevBlog())}
        >
          <AiFillBackward />
          Prev Post
        </button>

        <button
          className="mt-4 flex items-center justify-center gap-2 text-primary-green bg-green-light text-center xl:py-2 xl:px-4 rounded-[100px] font-Avenir-heavy font-medium w-fit px-8 py-3.5 sm:text-base xl:w-[210px] xl:h-[56px] xl:text-lg hover:bg-primary-green hover:text-white transition duration-300 disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none"
          disabled={blog?.id === latestNews?.length - 1}
          onClick={() => router.push(findNextBlog())}
        >
          Next Post
          <AiFillForward />
        </button>
      </div>
    </section>
  );
};
