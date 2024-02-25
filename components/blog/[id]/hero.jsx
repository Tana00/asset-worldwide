import FadeIn from "@/components/FadeIn";

export const Hero = () => {
  return (
    <FadeIn classname="lg:!pb-16">
      <div className="w-full h-[40vh] md:h-[70vh] single-blog-image flex flex-col justify-center p-8 !pb-0">
        <div className=" text-white relative w-full h-auto flex items-center justify-center flex-col lg:w-11/12 pt-12 py-6 lg:p-20 lg:pt-40 !pb-0 mx-auto">
          <div className="py-6 md:pt-10 flex flex-col items-center justify-center text-center sm:w-full mx-4 sm:mx-8 xl:mx-0 3xl:w-3/5 gap-1 sm:gap-3 xl:gap-4 !pb-0">
            <p className="text-sm md:text-base">News & Blogs / Blogs</p>
            <h2 className="font-Avenir-Heavy sm:tracking-wider text-white text-2xl md:text-[2.2rem] font-bold sm:leading-[45px] xl:leading-[60px] lg:text-[40px] sm:w-4/5 mx-auto">
              The Future of Home Design <br /> Trends to Watch in 2024
            </h2>
            <p className="text-xs sm:text-sm md:text-base !leading-7 md:!leading-9 font-light w-full md:w-3/4 xl:w-3/5 mx-auto font-Avenir">
              Posted on 24th January, 2024, 9:00am
            </p>
          </div>
        </div>
      </div>
    </FadeIn>
  );
};
