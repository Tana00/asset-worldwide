import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import logo from "../../public/images/logo.svg";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="w-full h-full md:h-[70vh] flex justify-end items-end mt-16">
      <div className="h-full w-full bg-[#f7f7f7] flex flex-col lg:flex-row justify-around items-start py-5 pt-12 px-4 md:px-10 lg:px-4">
        <div className="w-auto sm:w-[300px] h-auto">
          <Image src={logo} alt="" className="w-full h-full object-contain" />
        </div>
        <div className="flex flex-col gap-4 h-full justify-between mt-6 md:mt-10 lg:mt-0">
          <div className="flex flex-col md:flex-row gap-6 lg:gap-12">
            <div className="flex flex-col gap-2 sm:gap-8 font-Avenir-Regular text-base sm:text-[1.125rem] text-blue-black font-medium">
              <Link
                href=""
                className="text-black font-bold text-lg font-Avenir-Heavy"
              >
                Company
              </Link>
              <Link href="/about-us" className="">
                About Us
              </Link>
              <Link href="/why-us" className="">
                Why Us
              </Link>
              <Link href="/our-portfolio" className="">
                Our Portfolio
              </Link>
            </div>
            <div className="flex flex-col gap-2 sm:gap-8 font-Avenir-Regular text-base sm:text-[1.125rem] text-blue-black font-medium">
              <Link
                href=""
                className="text-black font-bold text-lg font-Avenir-Heavy"
              >
                Quick Links
              </Link>
              <Link href="/services" className="">
                Services
              </Link>
              <Link href="/faqs" className="">
                FAQs
              </Link>
              <Link href="/book-appointment" className="">
                Book Appoinment
              </Link>
            </div>
            <div className="flex flex-col gap-2 sm:gap-8 font-Avenir-Regular text-base sm:text-[1.125rem] text-blue-black font-medium">
              <Link
                href=""
                className="text-black font-bold text-lg font-Avenir-Heavy"
              >
                Contact Us
              </Link>
              <Link href="/services" className="">
                Book Appointment
              </Link>
              <Link href="/faqs" className="">
                +44 741 155 9879
              </Link>
              <Link href="/book-appointment" className="">
                Jo.costa@assetworldwide.co.uk
              </Link>
              <div className="flex items-center justify-start gap-4">
                <div className="bg-primary-gold flex items-center justify-center p-1.5 rounded-md">
                  <FaFacebookF className="text-white w-3.5 h-3.5" />
                </div>
                <div className="bg-primary-gold flex items-center justify-center p-1.5 rounded-md">
                  <FaTwitter className="text-white w-3.5 h-3.5" />
                </div>
                <div className="bg-primary-gold flex items-center justify-center p-1.5 rounded-md">
                  <FaInstagram className="text-white w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-4 mt-4 sm:mt-0">
            <p>&#xA9; {year} AssetWorldWide</p>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
