import React from 'react'
import ctaImage from '../../public/images/cta-image.png'
import Image from 'next/image'
import Link from 'next/link'
const Cta = () => {
    return (
      <div className="min-h-max w-full">
        <div className=" h-full md:h-4/5 w-full bg-primary-green flex justify-between">
          <div className='hidden md:flex flex-2'></div>
          <div className="flex-1 ml-0 md:ml-48 flex flex-col justify-center gap-4 text-white w-full py-8 px-4 pl-0 md:pl-12">
            <h2 className=" font-Avenir-black font-semibold text-[2.5rem]">Let&apos;s Tranform Together</h2>
            <p className="w-full md:w-11/12 font-Avenir-Regular text-[1.125rem]">
              Whether you&apos;re looking to breathe new life into an existing
              property or reimagine your dream home from the ground up, Asset
              Worldwide Transforming Houses is your trusted partner. Join us on
              a transformative journey that turns houses into exceptional living
              spaces, elevating your lifestyle to new heights.
              <br /> <br />
              Contact us today to start the conversation and discover the
              endless possibilities of transforming your house into a home like
              never before
            </p>
            <Link
              href="/learn-more"
              className="text-primary-green bg-white font-Avenir-Black text-center py-2 px-4 rounded-lg w-max text-[18px] hover:bg-primary-gold transition duration-300"
            >
              Book Appoinment
            </Link>
          </div>
          <div className="hidden md:flex flex-1 w-full h-full object-contain">
            <Image src={ctaImage} alt="cta" className="w-full h-full" />
          </div>
        </div>
      </div>
    );
}

export default Cta