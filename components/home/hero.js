import Link from "next/link";

const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto">
      <div className="bg-gold-light rounded-2xl">
        <div className="flex flex-col items-center justify-center gap-y-4 w-4/5 md:w-1/2 mx-auto text-center pt-20 pb-60">
          <p className="text-green-100 text-6xl leading-[80px] font-semibold font-trajanPro">
            ABOUT US
          </p>
          <p className="text-black-light text-lg leading-8 font-medium font-avenir">
            Asset Worldwide, a prominent real estate entity based in the United
            Kingdom, boasts a rich operational history spanning over five years.
            We redefine the concept of home by seamlessly merging real estate
            expertise with transformative design and innovation. We understand
            that a house is more than just a property; it&apos;s a canvas
            waiting to be transformed into a masterpiece that reflects your
            unique lifestyle.
          </p>
          <Link href="/contact-us" className="my-6">
            <div className="">
              <button className="bg-green text-base font-semibold text-white border border-green rounded-lg w-52 h-14 py-3 hover:bg-green/90 hover:text-white transition-all">
                Book Appointment
              </button>
            </div>
          </Link>
        </div>
      </div>
      <div
        className="max-w-6xl h-[415px] mx-auto bg-cover bg-center -mt-40"
        style={{ backgroundImage: "url('/assets/images/hero-video.png')" }}
      ></div>
    </section>
  );
};

export default Hero;
