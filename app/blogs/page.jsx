import Image from "next/image";
import Link from "next/link";
import blog1 from "../../public/images/blog-1.svg";
import blog2 from "../../public/images/blog-2.svg";
import blog3 from "../../public/images/blog-3.svg";

const page = () => {
  return (
    <div className="w-full min-h-screen">
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

      <div className="w-full md:w-4/5 lg:w-11/12 xl:w-4/5 mx-auto mt-8 md:mt-16 px-4 sm:px-8 md:px-4 h-full flex flex-col">
        <div className="h-full flex flex-col">
          <p className="text-black text-[1.125rem] md:text-[2.5rem] font-Avenir-Black ">
            Latest from the Blog
          </p>

          <div className="w-full h-full flex flex-col lg:flex-row gap-5 mt-6">
            <div className="w-full h-auto flex-1 flex flex-col gap-8">
              <div className="w-full h-full md:h-[400px] relative rounded-2xl">
                <Image
                  src={blog1}
                  alt="blog"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              <div className="w-full h-auto flex flex-col gap-2">
                <p className="text-[#000000] text-base md:text-[1.5rem] leading-[40px] font-black font-Avenir-Black">
                  <span>The Future of Home Design:</span>
                  <span className="block -mt-2 md:mt-1">
                    Trends to Watch in 2024
                  </span>
                </p>
                <p className="text-[#000] text-sm md:text-[1.125rem] leading-[32px] font-Avenir-Regular">
                  Explore the latest trends shaping the future of home design in
                  2024. From sustainable features to smart home integration, our
                  blog delves into the innovations that are redefining the way
                  we live. Stay inspired with insights from our design experts.
                </p>
                <Link
                  href="/blogs"
                  className="mt-4 flex items-center justify-center text-primary-green bg-green-light  text-center xl:py-2 xl:px-4  rounded-[100px]  font-Avenir-heavy font-medium w-fit px-8 py-3.5 sm:text-base xl:w-[210px] xl:h-[56px] xl:text-lg hover:bg-primary-green hover:text-white transition duration-300"
                >
                  Read More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2 -rotate-90"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 3a1 1 0 011 1v7.586l3.293-3.293a1 1 0 111.414 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L9 11.586V4a1 1 0 011-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="w-full h-auto flex-1 gap-8 flex flex-col">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full h-auto md:h-[183px] relative rounded-2xl">
                  <Image
                    src={blog2}
                    alt="blog"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
                <div className="flex flex-col justify-between gap-4 md:gap-2">
                  <p className="text-[#000000] text-base lg:text-xl xl:text-[1.35rem] xl:leading-9 2xl:leading-[40px] font-extrabold font-avenir">
                    Transforming Historic Homes: A Journey Through Time
                  </p>

                  <Link
                    href="/blogs"
                    className=" flex items-center justify-center text-primary-green bg-green-light  text-center xl:py-2 xl:px-4  rounded-[100px]  font-Avenir-heavy font-medium w-fit px-8 py-3.5 sm:text-base xl:w-[210px] xl:h-[56px] xl:text-lg hover:bg-primary-green hover:text-white transition duration-300"
                  >
                    Read More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 ml-2 -rotate-90"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 3a1 1 0 011 1v7.586l3.293-3.293a1 1 0 111.414 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L9 11.586V4a1 1 0 011-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full h-auto md:h-[183px] relative rounded-2xl">
                  <Image
                    src={blog3}
                    alt="blog"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
                <div className="flex flex-col justify-between gap-4 md:gap-2">
                  <p className="text-[#000000] text-base lg:text-xl xl:text-[1.35rem] xl:leading-9 2xl:leading-[40px] font-extrabold font-avenir">
                    Navigating Real Estate Transactions with Lease Options
                  </p>

                  <Link
                    href="/blogs"
                    className="mt-4 flex items-center justify-center text-primary-green bg-green-light  text-center xl:py-2 xl:px-4  rounded-[100px]  font-Avenir-heavy font-medium w-fit px-8 py-3.5 sm:text-base xl:w-[210px] xl:h-[56px] xl:text-lg hover:bg-primary-green hover:text-white transition duration-300"
                  >
                    Read More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 ml-2 -rotate-90"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 3a1 1 0 011 1v7.586l3.293-3.293a1 1 0 111.414 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L9 11.586V4a1 1 0 011-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="h-full flex flex-col mt-32">
          <p className="text-black text-[1.125rem] md:text-[2.5rem] font-Avenir-Black ">
            Latest News
          </p>
          <div className="flex flex-col md:flex-row gap-5 mt-6">
            <div className="w-full h-auto flex-1 flex flex-col gap-8">
              <div className="w-full h-full xl:h-[400px] relative rounded-2xl">
                <Image
                  src={blog1}
                  alt="blog"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              <div className="w-full h-auto flex flex-col gap-2 lg:gap-3">
                <p className="text-[#000000] text-base md:text-lg lg:text-xl xl:text-[1.5rem] leading-[40px] font-black font-Avenir-Black">
                  <span>The Future of Home Design:</span>
                  <span className="block -mt-2 md:mt-2">
                    Trends to Watch in 2024
                  </span>
                </p>
                <p className="text-[#000] text-sm md:text-[1.125rem] leading-[32px] font-Avenir-Regular">
                  Explore the latest trends shaping the future of home design in
                  2024. From sustainable features to smart home integration, our
                  blog delves into the innovations that are redefining the way
                  we live. Stay inspired with insights from our design experts.
                </p>
                <Link
                  href="/blogs"
                  className="mt-4 flex items-center justify-center text-primary-green bg-green-light  text-center xl:py-2 xl:px-4  rounded-[100px]  font-Avenir-heavy font-medium w-fit px-8 py-3.5 sm:text-base xl:w-[210px] xl:h-[56px] xl:text-lg hover:bg-primary-green hover:text-white transition duration-300"
                >
                  Read More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2 -rotate-90"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 3a1 1 0 011 1v7.586l3.293-3.293a1 1 0 111.414 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L9 11.586V4a1 1 0 011-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="w-full h-auto flex-1 flex flex-col gap-8">
              <div className="w-full h-full xl:h-[400px] relative rounded-2xl">
                <Image
                  src={blog1}
                  alt="blog"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              <div className="w-full h-auto flex flex-col gap-2 lg:gap-3">
                <p className="text-[#000000] text-base md:text-lg lg:text-xl xl:text-[1.5rem] leading-[40px] font-black font-Avenir-Black">
                  The Art of Creating Timeless Interiors
                </p>
                <p className="text-[#000] text-sm md:text-[1.125rem] leading-[32px] font-Avenir-Regular">
                  Explore the secrets behind creating interiors that stand the
                  test of time. From selecting classic pieces to incorporating
                  personalized touches, our design experts share insights on
                  achieving a timeless and elegant home. Get inspired to
                  transform your living spaces into enduring masterpieces.
                </p>
                <Link
                  href="/blogs"
                  className="mt-4 flex items-center justify-center text-primary-green bg-green-light  text-center xl:py-2 xl:px-4  rounded-[100px]  font-Avenir-heavy font-medium w-fit px-8 py-3.5 sm:text-base xl:w-[210px] xl:h-[56px] xl:text-lg hover:bg-primary-green hover:text-white transition duration-300"
                >
                  Read More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2 -rotate-90"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 3a1 1 0 011 1v7.586l3.293-3.293a1 1 0 111.414 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L9 11.586V4a1 1 0 011-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
