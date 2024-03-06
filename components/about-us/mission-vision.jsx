import Image from "next/image";
import Diamond from "@/public/images/diamond.svg";
import FadeIn from "../FadeIn";

const MissionAndVision = () => {
  return (
    <FadeIn>
      <div className="w-full h-full max-w-[1600px] 3xl:w-[1800px] 4xl:max-w-[2000px] mx-auto my-6 xl:mt-[6rem] 2xl:mt-[15rem] 3xl:mt-[25rem] text-center font-Avenir-Medium">
        <div className="relative h-full w-full flex items-center justify-start flex-col xl:w-11/12 3xl:w-full py-14 lg:px-20 2xl:px-0 mx-auto">
          <div className="w-full px-6 grid grid-cols-1 md:grid-cols-2 gap-6 2xl:gap-16 mx-auto">
            <div className="relative mission w-full !h-[430px] xs:!h-[480px] md:!h-[500px] xl:!h-[650px] 2xl:!h-[770px] 3xl:!h-[850px] overflow-hidden flex flex-col items-center justify-between gap-6 rounded-2xl">
              <div className="flex flex-col items-center justify-center gap-2 md:gap-4 xl:gap-6 p-6 md:px-4 xl:px-10 sm:pt-4 md:pt-8 xl:pt-16">
                <Image src={Diamond} alt="mission" className="w-10 h-10" />
                <p className="text-primary-green font-Avenir-Heavy font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-[40px]">
                  Our Mission
                </p>
                <p className="text-black text-sm leading-6 md:text-[15px] lg:text-base font-medium md:!leading-7 lg:!leading-8 2xl:px-10 4xl:w-4/5">
                  Catalyzing community renewal through the transformation of
                  abandoned properties, our mission at Asset Worldwide is to
                  revitalize neighborhoods by providing bespoke solutions for
                  distressed and empty homes through innovative lease options.
                </p>
              </div>
            </div>
            <div className="relative vision w-full !h-[430px] xs:!h-[480px] sm:!h-[600px] md:!h-[500px] xl:!h-[650px] 2xl:!h-[770px] 3xl:!h-[850px] overflow-hidden flex flex-col items-center justify-between gap-6 rounded-2xl">
              <div className="flex flex-col items-center justify-center gap-2 md:gap-4 xl:gap-6 p-6 md:px-4 xl:px-10 sm:pt-4 md:pt-8 xl:pt-16">
                <Image src={Diamond} alt="mission" className="w-10 h-10" />
                <p className="text-primary-green font-Avenir-Heavy font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-[40px]">
                  Our Vision
                </p>
                <p className="text-black text-sm leading-6 md:text-[15px] lg:text-base font-medium md:!leading-7 lg:!leading-8 2xl:px-10 4xl:w-4/5">
                  Our vision is to become the leading force in property
                  revitalization, recognized for our innovative lease option
                  solutions and commitment to community development
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FadeIn>
  );
};

export default MissionAndVision;
