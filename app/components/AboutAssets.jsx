import React from 'react'
import aboutAsset from '../../public/images/about-assets.png'
import Image from 'next/image'
import Link from 'next/link'
const AboutAssets = () => {
  return (
    <div className="w-full min-h-screen py-12">
      <div className="w-full md:w-4/5 bg-white py-6 px-8 mx-auto mt-8 flex flex-col justify-center items-center text-center gap-14">
        <div className="flex flex-col gap-3 px-2 md:px-16 font-light justify-center items-center text-center">
            <h2 className="text-primary-gold text-[2.5rem] font-bold leading-[40px] md:leading-[80px] font-Trajan ">
                About Assets Worldwide
            </h2>
            <p className="text-black md:text-[1.125rem] w-full md:w-4/5 font-Avenir-Regular">
                Asset Worldwide, a prominent real estate entity based in the United
                Kingdom, boasts a rich operational history spanning over five years.
                We redefine the concept of home by seamlessly merging real estate
                expertise with transformative design and innovation. We understand
                that a house is more than just a property; it&apos;s a canvas waiting to
                be transformed into a masterpiece that reflects your unique
                lifestyle.
            </p>
            <Link href="/learn-more"
                className="bg-primary-green text-[#fafafb] text-center py-2 px-4 rounded-lg font-Avenir-Regular w-max text-[18px] hover:bg-primary-gold transition duration-300"
            >Learn More</Link>
        </div>
        <div className="">
          <Image src={aboutAsset} alt="about-assets" />
        </div>
      </div>
    </div>
  );
}

export default AboutAssets