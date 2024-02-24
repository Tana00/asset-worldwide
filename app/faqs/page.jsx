import React from "react";
import Link from "next/link";
import Image from "next/image";
import faqImage from "../../public/images/faq.png";
import Cta from "@/components/home/Cta";

const faqs = [
  {
    question: "What services does Asset Worldwide provide?",
    answer:
      "Asset Worldwide specializes in a comprehensive suite of services, including Empty Homes Transformation, Guaranteed Rent Scheme, Property Management, and Lease Option. We transform empty spaces into vibrant homes, provide guaranteed rental income, offer professional property management, and introduce flexible transaction options.",
  },
  {
    question: "How does the Empty Homes Transformation service work?",
    answer:
      "Our Empty Homes Transformation service involves collaborating with clients to revitalize vacant properties. From design conceptualization to project completion, we transform empty spaces into market-ready, aesthetically pleasing homes, preparing them for sale, rent, or personal use.",
  },
  {
    question:
      "What is the Guaranteed Rent Scheme, and how does it benefit property owners?",
    answer:
      "The Guaranteed Rent Scheme offers property owners a reliable income stream. Asset Worldwide takes on the responsibility of securing tenants, managing the property, and ensuring consistent rental payments, providing financial stability and peace of mind for property owners.",
  },
  {
    question: "What does the Property Management service include?",
    answer:
      "Our Property Management service encompasses a range of tasks, including regular maintenance, tenant communication, financial reporting, and legal compliance. We handle day-to-day affairs, allowing property owners to enjoy hassle-free ownership.",
  },
  {
    question: "Can you explain the Lease Option in more detail?",
    answer:
      "The Lease Option is an innovative solution providing flexibility in real estate transactions. It allows potential buyers to lease a property with the option to purchase it at a later date. This offers buyers the opportunity to evaluate the property before committing to a purchase.",
  },
  {
    question: "How does Asset Worldwide ensure global and local expertise?",
    answer:
      "We have a global network of professionals with deep local expertise. This combination allows us to provide personalized services tailored to the specific needs and characteristics of each property, regardless of its location.",
  },
  {
    question: "Are there testimonials or case studies available for review?",
    answer:
      "Yes, you can explore testimonials from satisfied clients and detailed case studies on our website. These real-life experiences highlight the success stories of our transformative projects and the positive impact we've had on our clients' real estate journeys.",
  },
];

const page = () => {
  return (
    <div className="w-full min-h-screen pb-8 bg-white">
      <div className="w-full h-full py-6 px-4 mb-16 md:mb-32 xl:px-8 mx-auto mt-8 flex flex-col justify-center items-center  gap-14">
        <div className="w-full h-max md:h-[60vh] bg-primary-green rounded-xl flex flex-col md:flex-row gap-6 md:gap-2 justify-end items-start md:items-end py-6 px-4 sm:px-8">
          <div className="flex flex-col h-full gap-4 justify-center flex-1">
            <h2 className="font-Trajan sm:tracking-wider text-white text-3xl leading-[45px] xs:leading-[55px] xs:text-[2.2rem] font-bold md:leading-[60px] lg:leading-[80px] xl:leading-[78px] md:text-[2.5rem] lg:text-[3rem] xl:text-[4rem] 2xl:text-[4.5rem] 2xl:leading-[85px] sm:w-4/5">
              FREQUENTLY
              <br />
              ASKED QUESTIONS
            </h2>
            <p className="w-full md:w-4/5 lg:w-1/2 text-white text-sm md:text-[1.125rem] leading-[32px] font-Avenir-Regular">
              Everything you need to know about Asset Worldwide
            </p>

            <Link
              href="/contact-us"
              className="sm:mt-3 3xl:mt-8 flex items-center justify-center text-primary-green bg-[#fafafb] text-center xl:py-2 xl:px-4 rounded-lg font-Avenir-heavy font-bold w-fit px-8 py-3.5 sm:text-base xl:w-[210px] xl:h-[56px] xl:text-lg hover:bg-primary-gold hover:text-white transition duration-300"
            >
              Book Appoinment
            </Link>
          </div>
          <div className="w-2/6 lg:w-1/2 xl:w-auto h-1/4 md:h-full flex-2 flex items-end justify-end ">
            <Image
              src={faqImage}
              alt="faq"
              className="w-full h-full  md:h-4/5 object-contain"
            />
          </div>
        </div>
        <div className="w-full md:w-11/12 h-full flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="w-full h-full flex flex-col gap-4 py-6 px-3 md:px-8 border border-[#cbefa9] rounded-lg "
            >
              <p className="text-black text-base lg:text-[1.125rem] xl:text-[1.125rem] font-bold font-Avenir-Heavy">
                {faq.question}
              </p>
              <p className="text-[#666666] text-sm lg:text-[1.125rem] leading-7 md:leading-[32px] font-Avenir-Regular">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
      <Cta />
    </div>
  );
};

export default page;
