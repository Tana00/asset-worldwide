import Image from "next/image";
import Diamond from "@/public/images/diamond.svg";

const MissionAndVision = () => {
  return (
    <div className="w-full my-6 lg:mt-[15rem] text-center font-Avenir-Medium">
      <div className="relative w-full flex items-center justify-start flex-col xl:w-11/12 py-14 lg:px-20 mx-auto">
        <div className="w-full px-8 grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto">
          <div className="mission w-full h-[738px] flex flex-col items-center justify-start gap-6 px-10 py-16 rounded-2xl">
            <Image src={Diamond} alt="mission" className="w-10 h-10" />
            <p className="text-primary-green font-Avenir-Heavy font-bold text-2xl sm:text-3xl md:text-4xl xl:text-[40px]">
              Our Mission
            </p>
            <p className="text-black text-sm md:text-base font-medium !leading-8">
              We strive to be at the forefront of design trends, technological
              advancements, and client-centric practices, continuously
              innovating to meet the evolving needs of our clients on a global
              scale.
            </p>
          </div>
          <div className="vision w-full h-[738px] flex flex-col items-center justify-start gap-6 px-10 py-16 rounded-2xl">
            <Image src={Diamond} alt="mission" className="w-10 h-10" />
            <p className="text-primary-green font-Avenir-Heavy font-bold text-2xl sm:text-3xl md:text-4xl xl:text-[40px]">
              Our Values
            </p>
            <p className="text-black text-sm md:text-base font-medium !leading-8">
              We strive to be at the forefront of design trends, technological
              advancements, and client-centric practices, continuously
              innovating to meet the evolving needs of our clients on a global
              scale.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionAndVision;
