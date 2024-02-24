import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import logo from "../../public/images/logo.svg";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="w-full h-full flex justify-end items-end mt-16">
      <div className="h-full w-full bg-[#f7f7f7] flex flex-col lg:flex-row justify-around items-start py-5 pt-12 px-4 md:px-10 lg:px-4">
        <div className="w-auto sm:w-[300px] h-auto">
          <Image src={logo} alt="" className="w-full h-full object-contain" />
        </div>
        <div className="flex flex-col gap-6 lg:gap-14 h-full justify-between mt-6 md:mt-10 lg:mt-0">
          <div className="flex flex-col md:flex-row gap-6 lg:gap-12">
            <div className="flex flex-col gap-2 sm:gap-8 font-Avenir-Regular text-base sm:text-[1.125rem] text-blue-black font-medium">
              <p className="text-black font-bold text-lg font-Avenir-Heavy">
                Company
              </p>
              <Link href="/about-us" className="hover:text-primary-gold">
                About Us
              </Link>
              <Link href="/why-us" className="hover:text-primary-gold">
                Why Us
              </Link>
              <Link href="/case-studies" className="hover:text-primary-gold">
                Our Portfolio
              </Link>
            </div>
            <div className="flex flex-col gap-2 sm:gap-8 font-Avenir-Regular text-base sm:text-[1.125rem] text-blue-black font-medium">
              <p className="text-black font-bold text-lg font-Avenir-Heavy">
                Quick Links
              </p>
              <Link href="/services" className="hover:text-primary-gold">
                Services
              </Link>
              <Link href="/faqs" className="hover:text-primary-gold">
                FAQs
              </Link>
              <Link href="/contact-us" className="hover:text-primary-gold">
                Book Appoinment
              </Link>
            </div>
            <div className="flex flex-col gap-2 sm:gap-8 font-Avenir-Regular text-base sm:text-[1.125rem] text-blue-black font-medium">
              <p className="text-black font-bold text-lg font-Avenir-Heavy">
                Contact Us
              </p>
              <Link href="/contact-us" className="hover:text-primary-gold">
                Book Appointment
              </Link>
              <Link href="" className="hover:text-primary-gold">
                +44 741 155 9879
              </Link>
              <Link href="" className="hover:text-primary-gold">
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
            <p className="cursor-pointer hover:text-primary-gold">
              Terms & Conditions
            </p>
            <p className="cursor-pointer hover:text-primary-gold">
              Privacy Policy
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
