import React from "react";
import oldWorks1 from "../../public/images/works-old.png";
import oldWorks2 from '../../public/images/works-old2.png';
import newWorks1 from "../../public/images/new-works.png";
import newWorks2 from "../../public/images/new-works2.png";
import Image from "next/image";
import Link from "next/link";


const Works = () => {
  return (
    <div className="w-full min-h-screen py-12 bg-white">
      <div className="w-full py-6 px-8 mx-auto mt-8 flex flex-col justify-center items-center text-center gap-14">
        <div className="flex flex-col gap-3 px-4 md:px-16 font-light justify-center items-center text-center">
          <p className="text-primary-green text-[1.5rem] md:text-[2.5rem] font-bold font-Avenir-Black  ">
            Our Transformative Works
          </p>
          <p className="text-black text-[1.125rem] w-full md:w-4/5 font-Avenir-Regular">
            We go beyond traditional real estate Services, we specialize in
            turning houses into dream homes.
          </p>
        </div>

        <div className="flex flex-col gap-8 ml-0 md:ml-8 overflow-hidden  w-full h-full">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full md:w-3/5 h-max flex flex-col gap-2">
              <Image
                src={oldWorks1}
                alt="old-works"
                className="w-full h-full object-cover object-center "
              />

              {/*  circle with before written */}
              <div className="flex items-center justify-start gap-2">
                <p className="text-black text-[1rem] w-20 h-20 rounded-full bg-[#e6e6e6] flex justify-center items-center">
                  Before
                </p>
                <hr className="w-full h-[1px] bg-[#e6e6e6]" />
              </div>
            </div>
            <div className="w-full md:w-2/5 h-[500px] flex flex-col gap-2">
              <Image
                src={newWorks1}
                alt="old-works"
                className="w-full h-full object-center"
              />
              <div className="flex items-center justify-start gap-2">
                <p className="text-black text-[1rem] w-20 h-20 rounded-full bg-green-light flex justify-center items-center">
                  After
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full md:w-3/5 h-max flex flex-col gap-2">
              <Image
                src={newWorks2}
                alt="old-works"
                className="w-full h-full object-cover object-center "
              />

              {/*  circle with before written */}
              <div className="flex items-center justify-start gap-2">
                <p className="text-black text-[1rem] w-20 h-20 rounded-full bg-green-light  flex justify-center items-center">
                  After
                </p>
                <hr className="w-full h-[1px] bg-[#e6e6e6]" />
              </div>
            </div>
            <div className="w-full md:w-2/5 h-[500px] flex flex-col gap-2 pb-1">
              <Image
                src={oldWorks2}
                alt="old-works"
                className="w-full h-full object-center"
              />
              <div className="flex items-center justify-start gap-2">
                <p className="text-black text-[1rem] w-20 h-20 rounded-full bg-[#e6e6e6] flex justify-center items-center">
                  Before
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-4/5 bg-gold-light px-5 md:px-8 py-4 flex justify-center items-center rounded-md">
            <Link href="/works"
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
