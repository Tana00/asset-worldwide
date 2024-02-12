import Image from "next/image";
import React from "react";
import logo from "../../public/images/logo.png";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();

  return (
    <footer className="w-full h-full md:h-[70vh]  flex justify-end items-end mt-5">
      <div className=" h-full w-full bg-[#f7f7f7] flex flex-col md:flex-row justify-around items-start py-5 pt-12 px-4">
        <div className="w-[300px] h-auto">
          <Image src={logo} alt="" className="w-full h-full object-contain" />
        </div>
        <div className="flex flex-col gap-4 h-full justify-between">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="flex flex-col gap-8 font-Avenir-Regular text-[1.125rem] text-black">
              <Link href="/company" className="">
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
            <div className="flex flex-col gap-8 font-Avenir-Regular text-[1.125rem] text-black">
              <Link href="" className="">
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
            <div className="flex flex-col gap-8 font-Avenir-Regular text-[1.125rem] text-black">
              <Link href="" className="">
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
              <div className="flex gap-4">
                <div className="bg-primary-gold p-2 rounded-md">
                  <FaFacebookF className="text-white text-xl" />
                </div>
                <div className="bg-primary-gold p-2 rounded-md">
                  <FaTwitter className="text-white text-xl" />
                </div>
                <div className="bg-primary-gold p-2 rounded-md">
                  <FaInstagram className="text-white text-xl" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-4">
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
