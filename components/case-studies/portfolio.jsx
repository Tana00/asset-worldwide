"use client";
import { useState, useMemo } from "react";
import Image from "next/image";
import { Pagination } from "../pagination";

const portfolioList = [
  {
    id: 1,
    title: "Luxury Urban Retreat",
    location: "London, UK",
    desc: "In the heart of Manhattan, we transformed a dated penthouse into a sleek and luxurious urban retreat. Modern design elements, smart home integration, and panoramic views of the city skyline make this project a testament to our commitment to innovation and sophistication.",
    before: "/images/proj1-old.svg",
    after: "/images/proj1-new.svg",
  },
  {
    id: 2,
    title: "Historic Restoration",
    location: "London, UK",
    desc: "Preserving the heritage of a historic townhouse in London, we undertook a meticulous restoration project. The result is a harmonious blend of original features and contemporary comforts, showcasing our commitment to honoring the past while embracing the future.",
    before: "/images/proj2-old.svg",
    after: "/images/proj2-new.svg",
  },
  {
    id: 3,
    title: "Luxury Urban Retreat",
    location: "London, UK",
    desc: "In the heart of Manhattan, we transformed a dated penthouse into a sleek and luxurious urban retreat. Modern design elements, smart home integration, and panoramic views of the city skyline make this project a testament to our commitment to innovation and sophistication.",
    before: "/images/proj1-old.svg",
    after: "/images/proj1-new.svg",
  },
  {
    id: 4,
    title: "Historic Restoration",
    location: "London, UK",
    desc: "Preserving the heritage of a historic townhouse in London, we undertook a meticulous restoration project. The result is a harmonious blend of original features and contemporary comforts, showcasing our commitment to honoring the past while embracing the future.",
    before: "/images/proj2-old.svg",
    after: "/images/proj2-new.svg",
  },
  {
    id: 5,
    title: "Luxury Urban Retreat",
    location: "London, UK",
    desc: "In the heart of Manhattan, we transformed a dated penthouse into a sleek and luxurious urban retreat. Modern design elements, smart home integration, and panoramic views of the city skyline make this project a testament to our commitment to innovation and sophistication.",
    before: "/images/proj1-old.svg",
    after: "/images/proj1-new.svg",
  },
  {
    id: 6,
    title: "Historic Restoration",
    location: "London, UK",
    desc: "Preserving the heritage of a historic townhouse in London, we undertook a meticulous restoration project. The result is a harmonious blend of original features and contemporary comforts, showcasing our commitment to honoring the past while embracing the future.",
    before: "/images/proj2-old.svg",
    after: "/images/proj2-new.svg",
  },
];

export const Portfolio = () => {
  const [pageIndex, setPageIndex] = useState(1);

  const itemsPerPage = 3; // Set the number of items you want to display per page

  const currentPagePortfolioList = useMemo(() => {
    const firstPageIndex = (pageIndex - 1) * itemsPerPage;
    const lastPageIndex = firstPageIndex + itemsPerPage;
    const res = portfolioList?.slice(firstPageIndex, lastPageIndex);
    return res;
  }, [pageIndex]);

  return (
    <div className="w-full min-h-screen pb-12 bg-white">
      <div className="w-full pt-6 mx-auto mt-8 flex flex-col justify-center items-center text-center gap-14">
        <div className="flex flex-col gap-8 xl:gap-20 overflow-hidden w-full h-full">
          {currentPagePortfolioList.map(
            ({ id, title, location, desc, before, after }) => (
              <div
                key={id}
                className={`${
                  id % 2 !== 0 ? "bg-transparent" : "bg-grey bg-opacity-5"
                } flex flex-col md:flex-row gap-4 lg:gap-8 xl:gap-12 2xl:gap-16 p-4 xl:pl-28 py-10 xl:py-10`}
              >
                <div className="w-full md:w-3/5 h-max flex flex-col gap-2">
                  <div className="relative w-full h-[300px] xl:h-[435px]">
                    <Image
                      src={before}
                      alt="old-works"
                      layout="fill"
                      className="w-full h-full object-cover"
                      // className="w-full max-h-[450px] object-cover object-center"
                    />
                  </div>
                  {/*  circle with before written */}
                  <div className="relative my-6 flex items-center justify-start gap-2">
                    <p className="text-black text-sm w-16 h-16 xl:w-20 xl:h-20 rounded-full bg-[#e6e6e6] flex justify-center items-center font-Avenir-Heavy font-bold">
                      Before
                    </p>
                    <hr
                      className="h-[1px] bg-[#e6e6e6] absolute left-24"
                      style={{
                        width: "calc(100% - 100px)",
                      }}
                    />
                  </div>
                  <div className="text-left">
                    <p className="text-[#000] text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-[40px] xl:leading-[54.64px] font-Avenir-Black font-black">
                      {title}
                    </p>
                    <p className="text-grey font-Avenir-Regular text-base md:text-lg leading-8 italic my-1">
                      {location}
                    </p>
                    <p className="text-left text-black text-base lg:text-lg leading-8 font-Avenir-Medium font-medium">
                      {desc}
                    </p>
                  </div>
                </div>
                <div className="w-full md:w-2/5 h-max flex flex-col gap-2">
                  <div className="relative w-full h-[300px] xl:h-[435px]">
                    <Image
                      src={after}
                      alt="new-works"
                      layout="fill"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="my-6 flex items-center justify-start gap-2">
                    <p className="text-primary-green text-sm w-16 h-16 xl:w-20 xl:h-20 rounded-full bg-green-light flex justify-center items-center font-Avenir-Heavy font-bold">
                      After
                    </p>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
        <div className="flex gap-3 flex-wrap px-6">
          <Pagination
            className="pagination-bar"
            currentPage={pageIndex}
            totalCount={portfolioList?.length}
            onPageChange={(page) => setPageIndex(page)}
          />
        </div>
      </div>
    </div>
  );
};
