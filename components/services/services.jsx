import Image from "next/image";

const servicesList = [
  {
    id: 1,
    title: "Empty House",
    subTitle: "Bringing Life Back to Vacant Spaces",
    desc: "At Asset Worldwide Ltd, we specialize in revitalizing distressed properties by partnering with landlords of empty homes and local councils. Our mission is to breathe new life into these neglected properties, transforming them into vibrant, habitable spaces that benefit both the community and property owners. We understand the challenges faced by landlords with vacant properties and councils seeking to address housing shortages. By taking these properties off their hands through lease agreements or outright purchase, we relieve them of the burden of maintenance and management while providing a valuable solution to housing needs.",
    colors: ["#F0FFF7", "#EDFFD1"],
    image: "/images/services/service-1.svg",
  },
  {
    id: 2,
    title: "Guaranteed Rent Scheme",
    subTitle: "Peace of Mind for Property Owners",
    desc: "At Asset Worldwide, we offer a comprehensive suite of services to meet all your property needs. In addition to our expertise in revitalizing empty homes, we provide Lease Option and Rent to Rent solutions, offering landlords guaranteed rent while we secure tenants under fixed contract terms. Our meticulous property management services ensure smooth operations and maintenance, optimizing the value and potential of every property in our care. With a dedication to innovation and client satisfaction, Asset Worldwide is your ultimate partner for seamless property transformation and management. Are you a landlord seeking a hassle-free rental solution with guaranteed income? Look no further than our Guaranteed Rent (Rent to Rent) service at Asset Worldwide.",
    colors: ["#F0FFF7", "#D2FFFA"],
    image: "/images/services/service-2.svg",
  },
  {
    id: 3,
    title: "Property Management",
    subTitle: "Effortless Property Ownership",
    desc: "Are you a property owner looking to streamline operations, enhance value, and ensure the smooth running of your real estate investments? Welcome to Asset Worldwide's comprehensive Property Management service. With our expert team at the helm, we take the stress out of property ownership, providing tailored management solutions to meet your unique needs. At Asset Worldwide, we understand that managing properties can be time-consuming and complex. That's why we offer a full suite of property management services designed to maximize efficiency and optimize returns on your investment. From tenant sourcing and vetting to rent collection and maintenance, we handle every aspect of property management with professionalism and expertise.",
    colors: ["#F0FFF7", "#FFF2D2"],
    image: "/images/services/service-3.svg",
  },
  {
    id: 4,
    title: "Lease Option",
    subTitle: "Flexibility in Property Transactions",
    desc: "Unlock the potential of your property investment with Asset Worldwide's Lease Option service. Whether you're a landlord seeking to secure a steady income stream or a homeowner looking to sell your property in a challenging market, our Lease Option solution offers flexibility, security, and peace of mind. With our Lease Option service, you can enjoy the benefits of both renting and selling your property without compromising on your financial goals. Here's how it works: Asset Worldwide enters into a contractual agreement with you, the property owner, giving us the exclusive right to lease your property for a specified period with the option to purchase it at a predetermined price in the future.",
    colors: ["#F0FFF7", "#D2E7FF"],
    image: "/images/services/service-4.svg",
  },
];

export const Services = () => {
  return (
    <section className="w-full md:w-11/12 lg:w-10/12 mx-auto mb-10 space-y-16">
      {servicesList?.map(({ id, title, subTitle, desc, colors, image }) => (
        <div
          id={title?.replaceAll(" ", "_")?.toLowerCase()}
          key={id}
          className="h-full sm:h-[740px] md:h-[804px] w-full overflow-hidden"
        >
          <div
            className="relative lg:rounded-2xl h-[590px] w-full pt-4 sm:px-4 sm:py-8 lg:p-8 flex flex-col items-start sm:items-center gap-3 lg:gap-4 sm:text-center"
            style={{
              background: `linear-gradient(180deg, ${colors[0]} 0%, ${colors[1]} 100%)`,
            }}
          >
            <p className="text-primary-green text-2xl leading-5 sm:leading-10 md:text-[28px] lg:text-3xl lg:leading-[54.64px] font-Avenir-Black font-bold px-4">
              {title}
            </p>
            <p className="text-black text-xl font-Avenir-Heavy font-semibold px-4">
              {subTitle}
            </p>
            <p className="text-[13px] sm:text-sm leading-6 sm:leading-7 lg:text-base text-grey lg:leading-8 font-Avenir-Medium font-medium w-full mx-auto px-4 lg:px-10">
              {desc}
            </p>
            <div
              className="w-full sm:w-11/12 md:w-10/12 lg:w-4/5 mx-auto mt-10 sm:rounded-lg service_image bg-no-repeat"
              style={{
                backgroundImage: `url(${image})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >
              {/* <Image
                src={image}
                alt={title}
                width={100}
                height={100}
                // layout="fill"
                className="w-full h-full rounded-lg object-cover"
              /> */}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};
