"use client";
import React, { useState } from "react";
import Link from "next/link";
import closeIcon from "../../public/images/close.png";
import logo from "../../public/images/logo.png";
import Image from "next/image";
import { IoCaretDownOutline, IoCaretUpOutline } from "react-icons/io5";
const links = [
  {
    id: 1,
    url: "",
    text: "Company",
    subLinks: [
      {
        id: 1,
        url: "/about-us",
        text: "About Us", 
      },
      {
        id: 2,
        url: "/why-us",
        text: "Why Us",
      },
      {
        id: 3,
        url: "/our-team",
        text: "Meet The Team",
      }
    ]
  },
  {
    id: 2,
    url: "/services",
    text: "Services",
  },
  {
    id: 3,
    url: "/case-studies",
    text: "Case Studies",
  },
  {
    id: 3,
    url: "/faqs",
    text: "FAQs",
  },
  {
    id: 4,
    url: "/blogs",
    text: "Blogs",
  },
 
];

const Navbar = () => {
  const [show, setShow] = useState(false);

  const toggleMenu = () => {
    setShow(!show);
  };

  return (
    <nav className="flex justify-between items-center px-4 lg:px-32 h-[80px] bg-white">
      <div className="">
        <Link href="/">
          <Image src={logo} alt="logo" className="w-40 h-10" />
        </Link>
      </div>

      <div className="hidden sm:hidden lg:flex items-center justify-center gap-10">
        {links.map((link, index) => {
          const { id, url, text, subLinks } = link;
          return (
            <div key={id} className="relative group">
            <Link
              key={index}
              href={url}
              className="text-black font-Avenir-Medium text-[18px] hover:text-primary-gold transition duration-300"
            >
              {text} {subLinks && <IoCaretDownOutline className="inline" />}
            </Link>
            {
              subLinks && (
                <div className="hidden group-hover:flex group-hover:flex-col gap-2
                 absolute top-[30px] left-0  bg-white shadow-lg py-4 px-4 rounded-md z-10 w-[200px]">
                  {subLinks.map((subLink, index) => {
                    const { id, url, text } = subLink;
                    return (
                      <Link
                        key={index}
                        href={url}
                        className="px-2 py-2 w-max text-black font-Avenir-Medium text-[18px] hover:text-primary-gold transition duration-300"
                      >
                        {text}
                      </Link>
                    );
                  })}
                </div>
              )
            }
            </div>
          );
        })}

        {/*  Add a book Appointment button */}
        <Link
          href="/book-appointment"
          className="bg-primary-green ml-12 text-white rounded-md font-avenir text-[18px] py-2 px-4 hover:bg-primary-gold transition duration-300"
        >
          Book Appointment
        </Link>

      </div>

      <div
        className="flex sm:flex lg:hidden cursor-pointer"
        onClick={toggleMenu}
      >
        <div className="">
          <span
            className={`w-6 h-1 md:w-10 md:h-2 bg-black block mb-1 md:mb-2 transition duration-300 ${
              show ? "transform -rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-1 md:w-10 md:h-2 bg-black block mb-1 md:mb-2 transition duration-300 ${
              show ? "hidden" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-1 md:w-10 md:h-2 bg-black block mb-1 transition duration-300 ${
              show ? "transform rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </div>
      </div>

      {show && (
        <div className="flex flex-col gap-10 absolute top-0 left-0 w-full h-screen bg-primary-green z-[1]">
          <div className="flex justify-end items-center px-4 md:px-32 h-[100px] z-auto">
            <div className="cursor-pointer" onClick={toggleMenu}>
              <Image src={closeIcon} alt="close" className="w-10 h-10" />
            </div>
          </div>
          <div className="flex flex-col gap-10 justify-center items-center">
            <Link
              href="/"
              className="text-white font-avenir text-2xl hover:text-primary-gold transition duration-300"
            >
              Home
            </Link>
            {links.map((link, index) => {
              const { id, url, text } = link;
              return (
                <div key={id} className="relative group">
                <Link
                  key={index}
                  href={url}
                  prefetch={false}
                  className="text-white font-avenir text-2xl hover:text-primary-gold transition duration-300"
                >
                  {text} {link.subLinks && <IoCaretDownOutline className="inline" />}
                </Link>

                  {
                    link.subLinks && (
                      <div className="hidden group-hover:flex group-hover:flex-col gap-2
                       absolute top-[30px] left-0  bg-white shadow-lg py-4 px-4 rounded-md z-10 w-[200px]">
                        {link.subLinks.map((subLink, index) => {
                          const { id, url, text } = subLink;
                          return (
                            <Link
                              key={index}
                              href={url}
                              className="px-2 py-2 w-max text-black font-Avenir-Medium text-[18px] hover:text-primary-gold transition duration-300"
                            >
                              {text}
                            </Link>
                          );
                        })}
                      </div>
                    )
                  
                  }


                </div>
              );
            })}
                  <Link href="/book-appointment" className="bg-white text-primary-green rounded-lg font-avenir text-[18px] py-2 px-4 hover:bg-primary-gold transition duration-300">
                    Book Appointment
                  </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
