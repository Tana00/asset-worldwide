import Image from "next/image";
import Diamond from "@/public/images/diamond.svg";
import FadeIn from "../FadeIn";

const MissionAndVision = () => {
  return (
    <FadeIn>
      <div className="w-full h-full max-w-[1600px] mx-auto my-6 lg:mt-[11rem] 2xl:mt-[15rem] 4xl:mt-[25rem] text-center font-Avenir-Medium">
        <div className="relative h-full w-full flex items-center justify-start flex-col xl:w-11/12 py-14 lg:px-20 2xl:px-0 mx-auto">
          <div className="w-full px-6 grid grid-cols-1 md:grid-cols-2 gap-6 2xl:gap-16 mx-auto">
            <div className="relative mission w-full !h-[430px] md:!h-full 2xl:h-[770px] overflow-hidden flex flex-col items-center justify-between gap-6 rounded-2xl">
              <div className="flex flex-col items-center justify-center gap-2 sm:gap-6 p-6 sm:px-10 sm:pt-16">
                <Image src={Diamond} alt="mission" className="w-10 h-10" />
                <p className="text-primary-green font-Avenir-Heavy font-bold text-2xl sm:text-3xl md:text-4xl xl:text-[40px]">
                  Our Mission
                </p>
                <p className="text-black text-sm md:text-base font-medium md:!leading-8 2xl:px-10">
                  We strive to be at the forefront of design trends,
                  technological advancements, and client-centric practices,
                  continuously innovating to meet the evolving needs of our
                  clients on a global scale.
                </p>
              </div>
            </div>
            <div className="relative vision w-full !h-[430px] md:!h-full 2xl:h-[770px] overflow-hidden flex flex-col items-center justify-between gap-6 rounded-2xl">
              <div className="flex flex-col items-center justify-center gap-2 sm:gap-6 p-6 sm:px-10 sm:pt-16">
                <Image src={Diamond} alt="mission" className="w-10 h-10" />
                <p className="text-primary-green font-Avenir-Heavy font-bold text-2xl sm:text-3xl md:text-4xl xl:text-[40px]">
                  Our Values
                </p>
                <p className="text-black text-sm md:text-base font-medium md:!leading-8 2xl:px-10">
                  We strive to be at the forefront of design trends,
                  technological advancements, and client-centric practices,
                  continuously innovating to meet the evolving needs of our
                  clients on a global scale.
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
