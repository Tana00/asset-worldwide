"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import img1 from "../../public/images/exp-1.png";
import img2 from "../../public/images/exp-2.png";
import img3 from "../../public/images/exp-3.png";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";

export const customersList = [
  {
    id: 1,
    name: "Emily and James T",
    title: "Satisfied Homeowner",
    img: img1,
    text: "I had the pleasure of working with Asset Worldwide Ltd to bring back an empty home in my neighborhood, and I couldn't be more pleased with the results. From start to finish, they demonstrated a keen eye for design, a commitment to quality craftsmanship, and a genuine passion for transforming neglected properties into vibrant living spaces. Their team's expertise and professionalism made the entire process seamless and enjoyable. Thank you for making our community a better place to live!!!",
  },

  {
    id: 2,
    name: "David K",
    title: "Property Owner",
    img: img2,
    text: "For years, I've entrusted to Asset Worldwide Ltd my rental properties, and they consistently exceed my expectations. Their attention to detail in tenant selection and swift response to maintenance issues are truly remarkable. I confidently recommend them to any property owner seeking reliable management services.",
  },
  {
    id: 3,
    name: "Jennifer R.",
    title: "Property Homeowner",
    img: img3,
    text: "I cannot express enough gratitude for the Lease Option presented by Asset Worldwide Real Estate for my vacant property. Initially feeling overwhelmed by the state of my home, their solution offered a lifeline. The Lease Option allowed me to witness the transformation of my once-distressed property into a welcoming home again, all while retaining the flexibility to make a decision that suited my needs. Asset Worldwide Real Estate's forward-thinking approach not only brought life back to my home but also brought peace to my mind. I couldn't be happier with the outcome!",
  },

  {
    id: 4,
    name: "David K",
    title: "Happy Tenant",
    img: img2,
    text: "We've been renting with Asset Worldwide Ltd for a while now, and we couldn't be happier with their service. From the moment we moved in, they've been incredibly responsive to any concerns or maintenance issues we've had. Their professionalism and efficiency make renting with them a breeze. We highly recommend their service to anyone in search of a reliable and tenant-friendly property management company.",
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
          <div className="mt-10 flex flex-col items-center justify-center w-11/12 md:w-10/12 mx-auto">
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
