export const Hero = () => {
  return (
    <div className="w-full h-full lg:h-[60vh] contact-image flex flex-col justify-center p-8 py-14 lg:py-0">
      <div className="w-full lg:w-4/5 mx-auto">
        <div className="flex-1 flex flex-col justify-center gap-2 lg:gap-6 py-4 md:px-10 lg:p-0">
          <h2 className="font-Trajan sm:tracking-wider text-[#044625] text-3xl leading-[45px] xs:leading-[55px] xs:text-[2.2rem] font-bold lg:leading-[80px] xl:leading-[78px] lg:text-[3rem] xl:text-[4rem] 2xl:text-[4.5rem] 2xl:leading-[85px] sm:w-4/5">
            CONTACT US
          </h2>
          <p className="w-full md:w-4/5 lg:w-1/2 text-[#333] text-sm md:text-[1.125rem] leading-[32px] md:leading-10 font-Avenir-Regular">
            We welcome the opportunity to connect with you. Whether you have
            inquiries about our transformative services, want to discuss a
            potential project, or simply have questions about the real estate
            industry, our team is here to assist you.
          </p>
        </div>
        <div className="flex-2 md:flex hidden"></div>
      </div>
    </div>
  );
};
