export const Hero = () => {
  return (
    <div className="w-full h-[40vh] md:h-[60vh] blog-image flex flex-col justify-center p-8">
      <div className="w-4/5 mx-auto">
        <div className="flex-1 flex flex-col justify-center gap-2 sm:gap-6">
          <h2 className="font-Trajan sm:tracking-wider text-[#044625] text-3xl leading-[45px] xs:leading-[55px] xs:text-[2.2rem] font-bold md:leading-[80px] xl:leading-[78px] md:text-[3rem] xl:text-[4rem] 2xl:text-[4.5rem] 2xl:leading-[85px] sm:w-4/5">
            News & Blogs
          </h2>
          <p className="w-full md:w-1/2 text-[#333] text-sm md:text-[1.125rem] leading-[32px] font-Avenir-Regular">
            Read about our latest articles and news
          </p>
        </div>
        <div className="flex-2 md:flex hidden"></div>
      </div>
    </div>
  );
};
