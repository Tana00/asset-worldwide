import Image from "next/image";

const servicesList = [
  {
    id: 1,
    title: "Empty House",
    subTitle: "Bringing Life Back to Vacant Spaces",
    desc: "Is your property standing empty, waiting for a purpose? Asset Worldwide specializes in transforming vacant houses into vibrant, welcoming homes. Our expert team of designers, architects, and craftsmen collaborates with you to revitalize empty spaces, turning them into functional, aesthetically pleasing, and market-ready homes. Whether you're preparing to sell, rent, or simply breathe new life into an unused property, our Empty Homes Transformation service is your key to unlocking hidden potential.",
    colors: ["#F0FFF7", "#EDFFD1"],
    image: "/images/services/service-1.svg",
  },
  {
    id: 2,
    title: "Guaranteed Rent Scheme",
    subTitle: "Peace of Mind for Property Owners",
    desc: "Asset Worldwide offers a Guaranteed Rent Scheme designed to provide property owners with a reliable income stream. Under this scheme, we take on the responsibility of securing tenants, managing the property, and ensuring consistent rental payments. Enjoy the benefits of a hassle-free experience while maximizing the return on your investment. Our commitment to transparency and efficiency makes the Guaranteed Rent Scheme an ideal solution for property owners seeking financial stability and peace of mind.",
    colors: ["#F0FFF7", "#D2FFFA"],
    image: "/images/services/service-2.svg",
  },
  {
    id: 3,
    title: "Property Management",
    subTitle: "Effortless Property Ownership",
    desc: "Our Property Management services are tailored to meet the diverse needs of property owners. From regular maintenance and tenant communication to financial reporting and legal compliance, we handle every aspect of property management with precision and care. Asset Worldwide takes the burden off your shoulders, allowing you to enjoy the benefits of property ownership without the day-to-day stress. Trust us to safeguard your investment and enhance its value through our professional Property Management services.",
    colors: ["#F0FFF7", "#FFF2D2"],
    image: "/images/services/service-3.svg",
  },
  {
    id: 4,
    title: "Lease Option",
    subTitle: "Flexibility in Property Transactions",
    desc: "Asset Worldwide introduces the Lease Option, providing flexibility and convenience in property transactions. This innovative solution allows potential buyers to lease a property with the option to purchase it at a later date. It's an ideal arrangement for those who need time to secure financing or evaluate the property before committing to a purchase. The Lease Option empowers both buyers and sellers, offering a unique and adaptable approach to real estate transactions that aligns with the evolving needs of the market.",
    colors: ["#F0FFF7", "#D2E7FF"],
    image: "/images/services/service-4.svg",
  },
];

export const Services = () => {
  return (
    <section className="lg:w-10/12 mx-auto my-10 space-y-16">
      {servicesList?.map(({ id, title, subTitle, desc, colors, image }) => (
        <div
          key={id}
          className="relative lg:rounded-2xl w-full px-4 py-8 lg:p-8 flex flex-col items-center justify-center gap-3 md:gap-4 text-center"
          style={{
            background: `linear-gradient(180deg, ${colors[0]} 0%, ${colors[1]} 100%)`,
          }}
        >
          <p className="text-primary-green text-2xl leading-10 md:text-3xl lg:leading-[54.64px] font-Avenir-Black font-bold">
            {title}
          </p>
          <p className="text-black text-xl font-Avenir-Heavy font-semibold">
            {subTitle}
          </p>
          <p className="text-sm leading-7 lg:text-base text-grey lg:leading-8 font-Avenir-Medium font-medium w-full md:w-10/12 lg:w-4/5 mx-auto lg:px-10">
            {desc}
          </p>
          <div className="absolute top-72 w-full md:w-10/12 lg:w-4/5 mx-auto mt-10 rounded-lg">
            <Image
              src={image}
              alt={title}
              width={100}
              height={100}
              className="w-full rounded-lg"
            />
          </div>
        </div>
      ))}
    </section>
  );
};
