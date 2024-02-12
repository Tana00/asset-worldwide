"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
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
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      // loop: true,
      initial: 0,
      slides: {
        perView: "auto",
        spacing: 30,
      },
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      created() {
        setLoaded(true);
      },
      // breakpoints: {
      //   "(min-width: 1024px)": {
      //     slides: {
      //       origin: "auto",
      //       perView: 2.5,
      //       spacing: 32,
      //     },
      //   },
      // },
    },
    []
  );

  return (
    <div>
      <div className="w-full min-h-screen sm:py-12 bg-green-light">
        <div className="w-full py-6 px-2 md:px-8 mx-auto mt-8 flex flex-col justify-center items-center text-center gap-14">
          <div className="xl:w-4/5 flex flex-col gap-3 px-4 md:px-16 font-light justify-center items-center text-center">
            <h2 className="text-primary-green text-2xl md:text-[2rem] lg:text-[2.5rem] font-bold lg:leading-[80px] font-Trajan">
              Our Customer Experiences
            </h2>
            <p className="text-black text-[1.125rem] w-full md:w-3/5 font-Avenir-Regular">
              What our customers say about us.
            </p>
          </div>
          <div className="mt-10 flex flex-col items-center justify-center w-10/12 mx-auto">
            <div ref={sliderRef} id="keen-slider" className="keen-slider">
              {customersList.map((customer, index) => (
                <div
                  key={customer.id}
                  className={`keen-slider__slide number-slide${index} relative !min-w-min snap-start`}
                  style={{ minWidth: "auto" }}
                >
                  <div className="w-[360px] h-[476px] flex flex-col justify-center items-center gap-4 p-4 bg-white rounded-lg">
                    <div className="w-20 h-20 absolute -top-[40px] z-10">
                      <Image
                        src={customer.img}
                        alt="exp-1"
                        className="w-full h-full object-cover object-center rounded-lg"
                      />
                    </div>
                    <div className="flex flex-col items-stretch px-6 mt-8">
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
            {loaded && instanceRef.current && (
              <div className="flex justify-center items-center gap-4 mt-8">
                <button
                  onClick={(e) =>
                    e.stopPropagation() || instanceRef.current?.prev()
                  }
                  disabled={currentSlide === 0}
                  className="w-10 h-10 border-2 border-primary-green text-primary-green rounded-full flex justify-center items-center disabled:opacity-50"
                >
                  <IoArrowBack />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation() || instanceRef.current?.next();
                  }}
                  disabled={currentSlide === customersList.length - 1}
                  className="w-10 h-10 border-2 border-primary-green text-primary-green rounded-full flex justify-center items-center disabled:opacity-50"
                >
                  <IoArrowForward />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
