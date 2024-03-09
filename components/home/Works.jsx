import React from "react";
import oldWorks1 from "../../public/images/works-old.png";
import oldWorks2 from "../../public/images/works-old2.png";
import newWorks1 from "../../public/images/new-works.png";
import newWorks2 from "../../public/images/new-works2.png";
import Image from "next/image";
import Link from "next/link";

const Works = () => {
  return (
    <div className="w-full min-h-screen pb-12 bg-white">
      <div className="w-full py-6 px-4 xl:px-8 mx-auto mt-8 flex flex-col justify-center items-center text-center gap-14">
        <div className="flex flex-col gap-3 px-4 md:px-16 font-light justify-center items-center text-center">
          <p className="text-primary-green text-[1.5rem] md:text-[2rem] lg:text-[2.5rem] font-bold font-Avenir-Black  ">
            Our Transformative Works
          </p>
          <p className="text-black text-sm !leading-6 sm:text-[1.125rem] w-full md:w-4/5 sm:leading-8 font-Avenir-Regular">
            We go beyond traditional real estate Services, we specialize in
            turning houses into dream homes.
          </p>
        </div>

        <div className="flex flex-col gap-8 ml-0 xl:ml-8 overflow-hidden w-full h-full">
          <div className="flex flex-col md:flex-row gap-4 xl:gap-10">
            <div className="w-full md:w-3/5 h-max flex flex-col gap-2">
              <Image
                src={oldWorks1}
                alt="old-works"
                className="w-full h-[500px] object-cover object-center"
              />

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
            </div>
            <div className="w-full md:w-2/5 h-max flex flex-col gap-2">
              <Image
                src={newWorks1}
                alt="old-works"
                className="w-full h-[500px] object-center"
              />
              <div className="my-6 flex items-center justify-start gap-2">
                <p className="text-primary-green text-sm w-16 h-16 xl:w-20 xl:h-20 rounded-full bg-green-light flex justify-center items-center font-Avenir-Heavy font-bold">
                  After
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4 xl:gap-10 mt-20">
            <div className="w-full md:w-3/5 h-max flex flex-col gap-2">
              <Image
                src={newWorks2}
                alt="old-works"
                className="w-full h-[500px] object-cover object-center "
              />

              {/*  circle with before written */}
              <div className="relative flex items-center justify-start gap-2">
                <p className="my-6 text-primary-green text-sm w-16 h-16 xl:w-20 xl:h-20 rounded-full bg-green-light flex justify-center items-center font-Avenir-Heavy font-bold">
                  After
                </p>
                <hr
                  className="w-full h-[1px] bg-[#e6e6e6] absolute left-24"
                  style={{
                    width: "calc(100% - 100px)",
                  }}
                />
              </div>
            </div>
            <div className="w-full md:w-2/5 h-max flex flex-col gap-2 pb-1">
              <Image
                src={oldWorks2}
                alt="old-works"
                className="w-full h-[500px] object-center"
              />
              <div className="my-6 flex items-center justify-start gap-2">
                <p className="text-black text-sm w-16 h-16 xl:w-20 xl:h-20 rounded-full bg-[#e6e6e6] flex justify-center items-center font-Avenir-Heavy font-bold">
                  Before
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-3/4 xl:w-4/5 2xl:w-1/2 bg-gold-light px-5 md:px-8 py-4 flex justify-center items-center rounded-md">
          <Link
            href="/case-studies"
            className="w-full bg-primary-green text-white text-sm md:text-[1.125rem] py-2 px-4 rounded-md font-Avenir-Black text-center hover:bg-primary-green-dark transition-all duration-300 ease-in-out"
          >
            See More transformative projects
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Works;
