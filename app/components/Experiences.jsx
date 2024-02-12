"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import img1 from "../../public/images/exp-1.png";
import img2 from "../../public/images/exp-2.png";
import img3 from "../../public/images/exp-3.png";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";

const customersList = [
  {
    id: 1,
    name: "Emily and James T",
    title: "Satisfied Homeowners",
    img: img1,
    text: "Asset Worldwide turned our empty property into a stunning, market-ready home. The transformation was beyond our expectations. Their attention to detail and commitment to delivering on time truly sets them apart. We couldn't be happier with the result!",
  },

  {
    id: 2,
    name: "David K",
    title: "Property Owner",
    img: img2,
    text: "Asset Worldwide's Property Management team has been exceptional. They handle everything with professionalism and efficiency, from tenant communication to regular maintenance. It's a relief to know our property is in capable hands, allowing us to focus on other aspects of our investment portfolio.",
  },
  {
    id: 3,
    name: "Jennifer R.",
    title: "Satisfied Buyer",
    img: img3,
    text: "The Lease Option offered by Asset Worldwide Real Estate provided us with the flexibility we needed in our property transaction. It allowed us to explore the property before committing to a purchase, giving us peace of mind. A forward-thinking approach to real estate transactions!",
  },

  {
    id: 4,
    name: "David K",
    title: "Property Owner",
    img: img2,
    text: "Asset Worldwide's Property Management team has been exceptional. They handle everything with professionalism and efficiency, from tenant communication to regular maintenance. It's a relief to know our property is in capable hands, allowing us to focus on other aspects of our investment portfolio.",
  },
  {
    id: 5,
    name: "Jennifer R.",
    title: "Satisfied Buyer",
    img: img3,
    text: "The Lease Option offered by Asset Worldwide Real Estate provided us with the flexibility we needed in our property transaction. It allowed us to explore the property before committing to a purchase, giving us peace of mind. A forward-thinking approach to real estate transactions!",
  },
  {
    id: 6,
    name: "Emily and James T",
    title: "Satisfied Homeowners",
    img: img1,
    text: "Asset Worldwide turned our empty property into a stunning, market-ready home. The transformation was beyond our expectations. Their attention to detail and commitment to delivering on time truly sets them apart. We couldn't be happier with the result!",
  },
];

const Experiences = () => {
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < customersList.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(customersList.length - 1);
    }
  };

  return (
    <div>
      <div className="w-full min-h-screen py-12 bg-green-light">
        <div className="w-full md:w-4/5 py-6 px-2 md:px-8 mx-auto mt-8 flex flex-col justify-center items-center text-center gap-14">
          <div className="flex flex-col gap-3 px-4 md:px-16 font-light justify-center items-center text-center">
            <h2 className="text-primary-green text-[2.5rem] font-bold leading-[80px] font-Trajan ">
              Our Customer Experiences
            </h2>
            <p className="text-black text-[1.125rem] w-full md:w-3/5 font-Avenir-Regular">
              What our customers say about us.
            </p>
          </div>
          <div className="flex flex-col gap-4 items-center justify-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {customersList.slice(0, 3).map((customer) => (
                <div key={customer.id}>
                  <div className="w-full h-full relative flex flex-col justify-center items-center gap-4 p-4 bg-white rounded-lg">
                    <div className="w-20 h-20 absolute -top-[40px]">
                      <Image
                        src={customer.img}
                        alt="exp-1"
                        className="w-full h-full object-cover object-center rounded-lg"
                      />
                    </div>
                    <div className="flex flex-col px-6 mt-8">
                      <p className="text-primary-green text-[1.125rem] font-bold font-Avenir-Black">
                        {customer.name}
                      </p>
                      <p className="text-black text-[0.875rem] font-Avenir-Regular">
                        {customer.title}
                      </p>
                      <p className="text-black text-[0.875rem] font-Avenir-Regular mt-4 leading-8">
                        {customer.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              {/*  arrows left and right */}
            </div>
            <div className="flex justify-center items-center gap-4 mt-8">
              <button
                onClick={handlePrev}
                className="w-10 h-10 border-2 border-primary-green text-primary-green rounded-full flex justify-center items-center"
              >
                <IoArrowBack />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 border-2 border-primary-green text-primary-green rounded-full flex justify-center items-center"
              >
                <IoArrowForward />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
