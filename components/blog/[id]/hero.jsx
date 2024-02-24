import FadeIn from "@/components/FadeIn";

export const Hero = () => {
  return (
    <FadeIn classname="lg:!pb-28">
      <div className="w-full h-[40vh] md:h-[60vh] single-blog-image flex flex-col justify-center p-8">
        <div className="relative w-full h-auto flex items-center justify-start flex-col lg:w-11/12 bg-gray-light md:rounded-2xl py-6 lg:p-20 mx-auto">
          <div className="py-6 md:pt-10 flex flex-col sm:w-full mx-4 sm:mx-8 xl:mx-0 3xl:w-3/5 gap-3 xl:gap-4">
            <p>News & Blogs / Blogs</p>
            <h2 className="font-Avenir-Heavy sm:tracking-wider text-green-100 text-[2.2rem] font-bold sm:leading-[65px] xl:leading-[80px] md:text-[3rem] xl:text-[4rem] 2xl:text-[4.5rem] 2xl:leading-[85px] sm:w-4/5 mx-auto">
              The Future of Home Design Trends to Watch in 2024
            </h2>
            <p className="text-black text-sm sm:text-base !leading-7 md:text-lg md:!leading-9 font-light w-full md:w-3/4 xl:w-3/5 mx-auto font-Avenir">
              Posted on 24th January, 2024, 9:00am
            </p>
          </div>
        </div>
      </div>
    </FadeIn>
  );
};
