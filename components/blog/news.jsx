"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useAxios } from "@/requests";
import { latestNews } from "@/utils";

export const News = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;

  const totalPages = Math.ceil(latestNews.length / itemsPerPage);
  const paginatedNews = latestNews.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="w-full md:w-4/5 lg:w-11/12 xl:w-4/5 mx-auto mt-8 md:mt-16 px-4 sm:px-8 md:px-4 h-full flex flex-col">
      <div className="h-full flex flex-col">
        <p className="text-black text-[1.125rem] md:text-[2.5rem] font-Avenir-Black ">
          Latest from the Blog
        </p>

        <div className="w-full h-full flex flex-col lg:flex-row gap-5 mt-6">
          {latestNews?.map(({ id, img, title, content, link }) => {
            if (id === 0) {
              return (
                <div
                  key={id}
                  className="w-full h-auto flex-1 flex flex-col gap-8"
                >
                  <div className="w-full h-full md:h-[400px] relative rounded-2xl">
                    <Image
                      src={img}
                      alt="blog"
                      width={100}
                      height={100}
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </div>
                  <div className="w-full h-auto flex flex-col gap-2">
                    <p className="text-[#000000] text-base md:text-[1.5rem] leading-[40px] font-black font-Avenir-Black">
                      <span>{title?.split(":")?.[0]}</span>
                      {title?.split(":")?.[1] && (
                        <span className="block -mt-2 md:mt-1">
                          {title?.split(":")?.[1]}
                        </span>
                      )}
                    </p>
                    <p className="text-[#000] text-sm md:text-[1.125rem] leading-[32px] font-Avenir-Regular line-clamp-3">
                      {content}
                    </p>
                    <Link
                      href={link}
                      className="mt-4 flex items-center justify-center text-primary-green bg-green-light  text-center xl:py-2 xl:px-4  rounded-[100px]  font-Avenir-heavy font-medium w-fit px-8 py-3.5 sm:text-base xl:w-[210px] xl:h-[56px] xl:text-lg hover:bg-primary-green hover:text-white transition duration-300"
                    >
                      Read More
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 ml-2 -rotate-90"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 3a1 1 0 011 1v7.586l3.293-3.293a1 1 0 111.414 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L9 11.586V4a1 1 0 011-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              );
            }
          })}
          <div className="w-full h-auto flex flex-row lg:flex-col flex-1 gap-8 mt-6 lg:mt-0">
            {latestNews?.map(({ id, img, title, link }) => {
              if (id === 1 || id === 2) {
                return (
                  <div
                    key={id}
                    className="w-full md:w-1/2 lg:w-full flex flex-col lg:flex-row gap-4"
                  >
                    <div className="w-full h-auto lg:w-1/2 md:h-[183px] relative rounded-2xl">
                      <Image
                        src={img}
                        alt="blog"
                        width={100}
                        height={100}
                        className="w-full h-full object-cover rounded-2xl"
                      />
                    </div>
                    <div className="w-full lg:w-1/2 flex flex-col justify-between gap-4 md:gap-2">
                      <p className="text-[#000000] text-base md:text-xl xl:text-[1.35rem] xl:leading-9 2xl:leading-[40px] font-extrabold font-Avenir-Heavy">
                        {title?.split(":")?.[0]}
                      </p>

                      <Link
                        href={link}
                        className=" flex items-center justify-center text-primary-green bg-green-light text-center xl:py-2 xl:px-4 rounded-[100px] font-Avenir-heavy font-medium w-fit px-8 py-3.5 sm:text-base xl:w-[210px] xl:h-[56px] xl:text-lg hover:bg-primary-green hover:text-white transition duration-300"
                      >
                        Read More
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 ml-2 -rotate-90"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 3a1 1 0 011 1v7.586l3.293-3.293a1 1 0 111.414 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L9 11.586V4a1 1 0 011-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                );
              }
            })}
            {/* <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full h-auto md:h-[183px] relative rounded-2xl">
                <Image
                  src="/images/blog-3.svg"
                  alt="blog"
                  width={100}
                  height={100}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              <div className="flex flex-col justify-between gap-4 md:gap-2">
                <p className="text-[#000000] text-base lg:text-xl xl:text-[1.35rem] xl:leading-9 2xl:leading-[40px] font-extrabold font-avenir">
                  Navigating Real Estate Transactions with Lease Options
                </p>

                <Link
                  href="/blogs/future-of-home-design"
                  className="mt-4 flex items-center justify-center text-primary-green bg-green-light  text-center xl:py-2 xl:px-4  rounded-[100px]  font-Avenir-heavy font-medium w-fit px-8 py-3.5 sm:text-base xl:w-[210px] xl:h-[56px] xl:text-lg hover:bg-primary-green hover:text-white transition duration-300"
                >
                  Read More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2 -rotate-90"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 3a1 1 0 011 1v7.586l3.293-3.293a1 1 0 111.414 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L9 11.586V4a1 1 0 011-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      <div className="h-full flex flex-col my-32">
        <p className="text-black text-[1.125rem] md:text-[2.5rem] font-Avenir-Black ">
          Latest News
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 gap-y-8 mt-6">
          {paginatedNews?.map(({ id, img, title, content, link }) => (
            <div key={id} className="w-full h-auto flex-1 flex flex-col gap-8">
              <div className="w-full h-full xl:h-[400px] relative rounded-2xl">
                <Image
                  src={img}
                  alt="blog"
                  width={100}
                  height={100}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              <div className="w-full h-auto flex flex-col gap-2 lg:gap-3">
                <p className="text-[#000000] text-base md:text-lg lg:text-xl xl:text-[1.5rem] leading-[40px] font-black font-Avenir-Black">
                  <span>{title?.split(":")?.[0]}</span>
                  {title?.split(":")?.[1] && (
                    <span className="block -mt-2 md:mt-2">
                      {title?.split(":")?.[1]}
                    </span>
                  )}
                </p>
                <p className="text-[#000] text-sm md:text-[1.125rem] leading-[32px] font-Avenir-Regular line-clamp-3">
                  {content}
                </p>
                <Link
                  href={link}
                  className="mt-4 flex items-center justify-center text-primary-green bg-green-light text-center xl:py-2 xl:px-4  rounded-[100px]  font-Avenir-heavy font-medium w-fit px-8 py-3.5 sm:text-base xl:w-[210px] xl:h-[56px] xl:text-lg hover:bg-primary-green hover:text-white transition duration-300"
                >
                  Read More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2 -rotate-90"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 3a1 1 0 011 1v7.586l3.293-3.293a1 1 0 111.414 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L9 11.586V4a1 1 0 011-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`mx-2 px-4 py-2 rounded ${
                currentPage === index + 1
                  ? "bg-primary-green text-white"
                  : "bg-green-light text-primary-green"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
