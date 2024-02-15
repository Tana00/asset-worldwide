import Image from "next/image";
import FadeIn from "../FadeIn";

const featureList = [
  {
    id: 0,
    title: "Comprehensive Suite of Transformative Services",
    desc: "From Empty Homes Transformation to Guaranteed Rent, Property Management, and Lease Options, we offer a diverse range of services to cater to all your real estate needs. Our comprehensive approach ensures that every aspect of your property is expertly managed and transformed to meet your unique requirements.",
    imgSrc: "/images/features/feature1.svg",
  },
  {
    id: 1,
    title: "Global Network, Local Expertise",
    desc: "Benefit from the best of both worlds - a global network with a local touch. Our team combines international experience with deep local knowledge, ensuring that your property receives personalized attention and expertise regardless of its location.",
    imgSrc: "/images/features/feature2.svg",
  },
  {
    id: 2,
    title: "Innovative Design and Technology Integration",
    desc: "Stay ahead of the curve with our commitment to innovation. We seamlessly integrate the latest design trends and technological advancements into our projects, creating homes that are not only aesthetically pleasing but also equipped with cutting-edge features.",
    imgSrc: "/images/features/feature3.svg",
  },
  {
    id: 3,
    title: "Client-Centric Approach",
    desc: "Your vision is our priority. We work closely with you to understand your unique preferences and requirements, ensuring that every transformation aligns with your lifestyle and aspirations. Our client-centric approach sets us apart, fostering a collaborative relationship built on trust and transparency.",
    imgSrc: "/images/features/feature4.svg",
  },
  {
    id: 4,
    title: "Financial Stability and Peace of Mind",
    desc: "Experience the peace of mind that comes with our Guaranteed Rent Scheme. Property owners can enjoy a reliable income stream without the hassle of day-to-day management, allowing you to maximize returns while minimizing stress.",
    imgSrc: "/images/features/feature5.svg",
  },
  {
    id: 5,
    title: "Hassle-Free Property Ownership with Professional Management",
    desc: "Our Property Management services are designed to make property ownership effortless. From regular maintenance to tenant communication and legal compliance, we handle it all, allowing you to enjoy the benefits of property ownership without the associated stress.",
    imgSrc: "/images/features/feature6.svg",
  },
  {
    id: 6,
    title: "Flexible Transaction Options with Lease Option",
    desc: "Explore flexibility in real estate transactions with our Lease Option. Whether you're a buyer looking for more time to decide or a seller aiming for a unique approach, our Lease Option provides adaptable solutions to meet your needs.",
    imgSrc: "/images/features/feature7.svg",
  },
  {
    id: 7,
    title: "Commitment to Excellence",
    desc: "At Asset Worldwide, excellence is not just a goal; it's our commitment. We take pride in delivering quality craftsmanship, attention to detail, and exceptional results in every project. Our dedication to excellence is the foundation of our success.",
    imgSrc: "/images/features/feature8.svg",
  },
];

export const Features = () => {
  return (
    <section className="w-full my-6 lg:mt-28 xl:mt-48 text-center font-Avenir-Medium">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-10">
        {featureList.map(({ id, title, desc, imgSrc }) => (
          <FadeIn key={id}>
            <div
              className={`mb-10 md:mb-20 xl:my-36 grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 xl:gap-16 2xl:gap-32 items-start justify-between w-full`}
            >
              <div
                className={`${
                  id % 2 === 0 ? "md:order-1" : "md:order-2"
                } lg:rounded-lg h-full w-full`}
              >
                <Image
                  src={imgSrc}
                  alt={title}
                  width={100}
                  height={414}
                  layout="responsive"
                  className="w-full h-auto"
                />
              </div>
              <div
                className={`${
                  id % 2 === 0 ? "md:order-2" : "md:order-1"
                } text-left mt-3`}
              >
                <p className="w-full xl:w-11/12 text-primary-green font-Avenir-Black font-bold text-2xl leading-10 md:text-3xl xl:text-4xl 2xl:text-[40px] lg:leading-[45px] xl:leading-[54.64px]">
                  {title}
                </p>
                <p className="my-2 text-black font-medium text-sm lg:text-base leading-6 lg:leading-8">
                  {desc}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};
