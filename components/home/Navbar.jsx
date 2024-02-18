"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import closeIcon from "../../public/images/close.png";
import logo from "../../public/images/logo.svg";
import Image from "next/image";
import { IoCaretDownOutline } from "react-icons/io5";

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
      },
    ],
  },
  {
    id: 2,
    url: "#",
    text: "Services",
  },
  {
    id: 3,
    url: "/case-studies",
    text: "Case Studies",
  },
  {
    id: 4,
    url: "#",
    text: "FAQs",
  },
  {
    id: 5,
    url: "#",
    text: "Blogs",
  },
];

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShow(!show);
  };

  useEffect(() => {
    if (show) {
      // Apply inline styles to the body when show is true
      document.body.className = "disable_scroll";
    } else {
      // Reset the inline styles when show is false
      document.body.className = "";
    }
  }, [show]);

  return (
    <nav className="w-full md:w-4/5 mx-auto flex justify-between items-center px-4 my-4 md:my-6 bg-white font-Avenir">
      <div className="">
        <Link href="/">
          <Image src={logo} alt="logo" className="" />
        </Link>
      </div>

      <div className="hidden xl:flex items-center justify-center gap-14 mx-8">
        {links.map((link, index) => {
          const { id, url, text, subLinks } = link;
          if (subLinks) {
            return (
              <div key={id} className="relative group">
                <Link
                  key={index}
                  href={url}
                  className="text-gray-primary font-Avenir-Medium text-[18px] hover:text-primary-gold transition duration-300"
                  onClick={() => setShowMenu(!showMenu)}
                >
                  {text} {subLinks && <IoCaretDownOutline className="inline" />}
                </Link>
                {showMenu && subLinks && (
                  <div
                    className="flex flex-col gap-2
                 absolute top-[30px] left-0 bg-white shadow-lg py-4 px-4 rounded-md z-20 w-[200px]"
                  >
                    {subLinks.map((subLink) => {
                      const { id, url, text } = subLink;
                      return (
                        <Link
                          key={id}
                          href={url}
                          className="px-2 py-2 w-max text-gray-primary font-Avenir-Medium text-[18px] hover:text-primary-gold transition duration-300"
                          onClick={() => {
                            setShowMenu(!showMenu);
                            setShow(false);
                          }}
                        >
                          {text}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          } else {
            return (
              <div key={id} className="relative group">
                <Link
                  key={index}
                  href={url}
                  className="text-gray-primary font-Avenir-Medium text-[18px] hover:text-primary-gold transition duration-300"
                >
                  {text}
                </Link>
              </div>
            );
          }
        })}
      </div>

      {/*  Add a book Appointment button */}
      <Link
        href="/book-appointment"
        className="hidden xl:flex bg-primary-green ml-12 text-white rounded-md font-avenir text-base font-semibold py-2.5 px-4 hover:bg-primary-gold hover:text-white transition duration-300"
      >
        Book Appointment
      </Link>

      <div
        className="flex sm:flex xl:hidden cursor-pointer"
        onClick={toggleMenu}
      >
        <div className="">
          <span
            className={`w-6 h-1 md:w-8 bg-gray-primary block mb-1 transition duration-300 ${
              show ? "transform -rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-1 md:w-8 bg-gray-primary block my-1.5 transition duration-300 ${
              show ? "hidden" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-1 md:w-8 bg-gray-primary block mb-1 transition duration-300 ${
              show ? "transform rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </div>
      </div>

      {show && (
        <div className="flex flex-col gap-10 absolute top-0 left-0 w-full h-screen bg-primary-green z-20">
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
              const { id, url, text, subLinks } = link;
              if (subLinks) {
                return (
                  <div key={id} className="relative">
                    <Link
                      key={index}
                      href={url}
                      prefetch={false}
                      className="text-white font-avenir text-2xl hover:text-primary-gold transition duration-300"
                      onClick={() => setShowMenu(!showMenu)}
                    >
                      {text}
                      {subLinks && <IoCaretDownOutline className="inline" />}
                    </Link>

                    {showMenu && subLinks && (
                      <div
                        className="flex flex-col gap-2
                       absolute top-[30px] left-0  bg-white shadow-lg py-4 px-4 rounded-md z-20 w-[200px]"
                      >
                        {subLinks.map((subLink) => {
                          const { id, url, text } = subLink;
                          return (
                            <Link
                              key={id}
                              href={url}
                              className="px-2 py-2 w-max text-gray-primary font-Avenir-Medium text-[18px] hover:text-primary-gold transition duration-300"
                              onClick={() => {
                                setShow(!show);
                                setShowMenu(!showMenu);
                              }}
                            >
                              {text}
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              } else {
                return (
                  <div key={id} className="relative">
                    <Link
                      key={index}
                      href={url}
                      prefetch={false}
                      className="text-white font-avenir text-2xl hover:text-primary-gold transition duration-300"
                      onClick={() => {
                        setShow(!show);
                      }}
                    >
                      {text}
                    </Link>
                  </div>
                );
              }
            })}
            <Link
              href="/book-appointment"
              className="bg-white text-primary-green rounded-lg font-avenir text-[18px] py-3.5 px-6 hover:bg-primary-gold hover:text-white transition duration-300"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
