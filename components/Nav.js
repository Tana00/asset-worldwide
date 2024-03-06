"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import ArrowDown from "../public/assets/icons/arrow-down.svg";
import ArrowDownGreen from "../public/assets/icons/arrow-down-green.svg";
import { menuList } from "@/utils";

const Nav = () => {
  const pathname = usePathname();

  const navbarRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (title) => {
    if (openDropdown === title) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(title);
    }
  };

  useEffect(() => {
    function handleOutsideClick(event) {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setOpenDropdown(null);
        // setOpenMenu("");
      }
    }

    if (openDropdown) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [openDropdown]);

  return (
    <section
      className={`bg-white font-avenir font-medium z-10 py-4 ${
        isOpen ? "fixed w-full h-screen" : "relative"
      }`}
    >
      <div className="max-w-[1920px] mx-auto flex items-center justify-between py-4 px-5 sm:px-10 lg:px-20 xl:px-40 w-full">
        <div>
          <a href="/">
            <Image
              src="/assets/images/logo.svg"
              alt="logo"
              width={200}
              height={200}
            />
          </a>
        </div>
        <div ref={navbarRef} className="w-full mx-4 hidden lg:block max-w-4xl">
          <ul className="flex items-center justify-evenly">
            {menuList?.map((menu, i) => {
              if (!menu.hasSubmenu) {
                return (
                  <Link key={i} href={menu.href}>
                    <li className="relative">
                      <p className="flex items-center cursor-pointer">
                        <span
                          className={`text-lg font-medium ${
                            pathname === `${menu.href}`
                              ? "text-green"
                              : "text-gray-primary"
                          } hover:text-green`}
                        >
                          {menu.title}
                        </span>
                      </p>
                    </li>
                  </Link>
                );
              } else {
                return (
                  <li key={i} className="relative">
                    <p
                      className="flex items-center cursor-pointer"
                      onClick={() => {
                        toggleDropdown(menu.title);
                      }}
                    >
                      <span
                        className={`text-lg font-medium ${
                          pathname !== `/${menu.title}`
                            ? "text-gray-primary"
                            : "text-green"
                        } hover:text-green`}
                      >
                        {menu.title}
                      </span>
                      <Image
                        src={
                          pathname !== `/${menu.title}`
                            ? ArrowDown
                            : ArrowDownGreen
                        }
                        alt=""
                        width={25}
                        height={25}
                      />
                    </p>
                    {openDropdown === menu.title && (
                      <div
                        className={`bg-white shadow-md absolute top-[3.45rem] left-0 grid ${
                          menu.submenu.length > 8
                            ? "grid-cols-2 w-[556px]"
                            : "grid-cols-1 w-[300px]"
                        } gap-3 p-3`}
                      >
                        <ul className="">
                          {menu.submenu.slice(0, 8).map((submenu, i) => (
                            <Link
                              key={i}
                              href={
                                submenu?.title === "Why Us"
                                  ? `${submenu.href}`
                                  : `/${menu.title?.toLowerCase()}/${
                                      submenu.href
                                    }`
                              }
                              className=""
                            >
                              <li
                                onClick={() => {
                                  setOpenDropdown(null);
                                }}
                                className="text-gray-primary text-lg py-2 px-4 hover:text-green"
                              >
                                {submenu.title}
                              </li>
                            </Link>
                          ))}
                        </ul>
                        <ul
                          className={`${
                            menu.submenu.length < 8 ? "hidden" : "block"
                          }`}
                        >
                          {menu.submenu.slice(8).map((submenu, i) => (
                            <Link
                              key={i}
                              href={`/${menu.title?.toLowerCase()}/${
                                submenu.href
                              }`}
                              className=""
                            >
                              <li
                                onClick={() => setOpenDropdown(null)}
                                className="text-gray-primary text-lg py-2 px-4 hover:text-green"
                              >
                                {submenu.title}
                              </li>
                            </Link>
                          ))}
                        </ul>
                      </div>
                    )}
                  </li>
                );
              }
            })}
          </ul>
        </div>
        <Link href="/contact-us">
          <div className="hidden lg:block">
            <button className="bg-green text-base font-semibold text-white border border-green rounded-lg w-48 py-3 hover:bg-green/90 hover:text-white transition-all">
              Book Appointment
            </button>
          </div>
        </Link>
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="bg-green/10 p-2 rounded-sm hover:bg-green/20 transition-colors"
          >
            {isOpen ? (
              <AiOutlineClose className="w-6 h-6 text-black" />
            ) : (
              <AiOutlineMenu className="w-6 h-6 text-black" />
            )}
          </button>
        </div>
      </div>
      {isOpen && (
        <div
          ref={navbarRef}
          className={`lg:hidden block w-full mx-1 mt-5 py-4 px-5 sm:px-10`}
        >
          <ul className="flex flex-col items-start justify-start gap-4">
            {menuList?.map((menu, i) => {
              if (!menu.hasSubmenu) {
                return (
                  <Link key={i} href={menu.href}>
                    <li className="w-full" onClick={() => setIsOpen(false)}>
                      <p className="flex items-center justify-between">
                        <span className="text-gray-primary text-lg">
                          {menu.title}
                        </span>
                        {menu?.hasSubmenu && (
                          <Image
                            src={ArrowDown}
                            alt=""
                            width={30}
                            height={30}
                            className="cursor-pointer"
                          />
                        )}
                      </p>
                    </li>
                  </Link>
                );
              } else {
                return (
                  <li key={i} className="w-full">
                    <p
                      onClick={() => toggleDropdown(menu.title)}
                      className="flex items-center justify-between"
                    >
                      <span className="text-gray-primary text-lg">
                        {menu.title}
                      </span>
                      {menu?.hasSubmenu && (
                        <Image
                          src={ArrowDown}
                          alt=""
                          width={30}
                          height={30}
                          className="cursor-pointer"
                        />
                      )}
                    </p>
                    {openDropdown === menu.title && (
                      <div
                        className={`grid ${
                          menu.submenu.length > 8
                            ? "grid-cols-2"
                            : "grid-cols-1"
                        } gap-3 sm:p-3 w-auto`}
                      >
                        <ul className="">
                          {menu.submenu.slice(0, 8).map((submenu, i) => (
                            <Link
                              key={i}
                              href={`/${menu.title?.toLowerCase()}/${
                                submenu.href
                              }`}
                              className=""
                            >
                              <li
                                onClick={() => {
                                  setIsOpen(false);
                                  setOpenDropdown(null);
                                }}
                                className="text-gray-primary text-lg py-2 px-4"
                              >
                                {submenu.title}
                              </li>
                            </Link>
                          ))}
                        </ul>
                        <ul
                          className={`${
                            menu.submenu.length < 8 ? "hidden" : "block"
                          }`}
                        >
                          {menu.submenu.slice(8).map((submenu, i) => (
                            <Link
                              key={i}
                              href={`/${menu.title?.toLowerCase()}/${
                                submenu.href
                              }`}
                              className=""
                            >
                              <li
                                onClick={() => {
                                  setIsOpen(false);
                                  setOpenDropdown(null);
                                }}
                                className="text-gray-primary text-lg py-2 px-4"
                              >
                                {submenu.title}
                              </li>
                            </Link>
                          ))}
                        </ul>
                      </div>
                    )}
                  </li>
                );
              }
            })}
            <Link href="/contact-us">
              <button
                onClick={() => setIsOpen(false)}
                className="bg-green text-white rounded-lg w-40 py-2.5 text-base"
              >
                Book Appointment
              </button>
            </Link>
          </ul>
        </div>
      )}
    </section>
  );
};

export default Nav;
