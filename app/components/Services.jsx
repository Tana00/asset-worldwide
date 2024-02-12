import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import img1 from '../../public/images/service-img-1.png'
import img2 from '../../public/images/service-img-2.png'
import img3 from '../../public/images/service-img-3.png'
import img4 from '../../public/images/service-img-4.png'

const serviceList = [
  {
    id: 1,
    title: "Empty House",
    description:
      "Is your property standing empty, waiting for a purpose? Asset Worldwide specializes in transforming vacant houses into vibrant, welcoming homes.",
    img: img1,
  },
  {
    id: 2,
    title: "Guaranteed Rent Scheme",
    description:
      "Asset Worldwide Real Estate offers a Guaranteed Rent Scheme designed to provide property owners with a reliable income stream.",
    img: img2,
  },
  {
    id: 3,
    title: "Property Management",
    description:
      "Our Property Management services are tailored to meet the diverse needs of property owners. From regular maintenance and tenant communication to financial reporting and legal compliance.",
    img: img3,
  },
  {
    id: 4,
    title: "Lease Option",
    description:
      "The Lease Option, providing flexibility and convenience in property transactions. This allows potential buyers to lease a property with the option to purchase it at a later date.",
    img: img4,
  },
];


const Services = () => {

  return (
    <div>
      <div className="w-full min-h-screen py-12 bg-gold-light">
        <div className="w-full md:w-4/5 py-6 px-2 md:px-8 mx-auto mt-8 flex flex-col justify-center items-center text-center gap-14">
          <div className="flex flex-col gap-3 px-4 md:px-16 font-light justify-center items-center text-center">
            <h2 className="text-primary-gold text-[2.5rem] font-bold leading-[80px] font-Trajan ">
              Our Services
            </h2>
            <p className="text-black text-[1.125rem] w-full md:w-3/5 font-Avenir-Regular">
              Ready to embark on a journey of transformation? Explore the
              possibilities with Asset Worldwide Real Estate Transforming
              Houses. Let us redefine your living spaces and create a home that
              truly reflects you.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {serviceList.map((service) => (
              <div
                key={service.id}
                className=" flex flex-col items-center gap-4 pb-6 "
              >
                <div className="">
                  <Image
                    src={service.img}
                    alt={service.title}
                 
                    className="w-full h-auto object-cover object-center rounded-lg"
                  />
                </div>
                <div className='flex flex-col gap-4 p-8'>
                  <h3 className="text-black text-[1.125rem] md:text-[2rem] font-bold">
                    {service.title}
                  </h3>
                  <p className="text-black text-sm md:text-[1.125rem] font-Avenir-Regular">
                    {service.description}
                  </p>
                </div>
                <Link
                  href="/learn-more"
                  className="bg-primary-gold text-[#fafafb] text-center py-2 px-4 rounded-lg font-Avenir-Regular w-max text-[18px] hover:bg-primary-gold transition duration-300"
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services