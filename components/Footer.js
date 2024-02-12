import Image from "next/image";
import Link from "next/link";
import { menuList } from "@/utils";

const footerLinks = [
  {
    title: "Company",
    submenu: [
      {
        title: "About Us",
        href: "/about-us",
      },
      {
        title: "Why Us",
        href: "/why-us",
      },
      {
        title: "Our Portfolio",
        href: "/our-portfolio",
      },
    ],
  },
  {
    title: "Quick Links",
    submenu: [
      { title: "Services", href: "/services" },
      {
        title: "FAQs",
        href: "/faqs",
      },
      {
        title: "Book Appointment",
        href: "/contact-us",
      },
    ],
  },
  {
    title: "Contact Us",
    submenu: [
      {
        title: "Book Appointment",
        href: "/contact-us",
      },
      { title: "+44 741 155 9879", href: "" },
      {
        title: "Jo.costa@assetworldwide.co.uk",
        href: "",
      },
    ],
  },
];

const Footer = () => {
  return (
    <section className="bg-gray-light py-4 md:py-10 font-avenir">
      <div className="max-w-[1920px] px-5 sm:px-10 lg:px-20 xl:px-40 mx-auto w-full">
        <div className="grid grid-cols-1 sm:grid-cols-[1fr_1fr] lg:grid-cols-[minmax(400px,_700px)_200px_200px_200px] gap-y-8 items-start justify-between">
          <div className="">
            <a href="/">
              <Image
                src="/assets/images/logo.svg"
                alt="logo"
                width={150}
                height={150}
              />
            </a>
          </div>
          {footerLinks.map((link, i) => (
            <div
              key={i}
              className={`${
                link.title === "Services"
                  ? "col-span-4 lg:col-span-1"
                  : "col-span-4 sm:col-auto"
              }`}
            >
              <h2 className="text-black-light font-bold text-base leading-8">
                {link.title}
              </h2>
              <div
                className={`grid ${
                  link.submenu.length > 8 ? "grid-cols-2" : "grid-cols-1"
                } gap-3 text-blue-black text-base font-medium py-2 w-full`}
              >
                <ul className="">
                  {link.submenu.slice(0, 8).map((submenu, i) => (
                    <Link
                      key={i}
                      href={
                        link.title === "Quick Links"
                          ? `${submenu.href}`
                          : submenu?.title === "Location"
                          ? `${submenu.href}`
                          : `/${link.title?.toLowerCase()}/${submenu.href}`
                      }
                      className=""
                    >
                      <li
                        key={i}
                        className="py-2.5 hover:text-red cursor-pointer transition-all"
                      >
                        {submenu.title}
                      </li>
                    </Link>
                  ))}
                </ul>
                <ul className="">
                  {link.submenu.slice(8).map((submenu, i) => (
                    <Link
                      key={i}
                      href={`/${link.title?.toLowerCase()}/${submenu.href}`}
                      className=""
                    >
                      <li
                        key={i}
                        className="py-2.5 hover:text-red cursor-pointer transition-all"
                      >
                        {submenu.title}
                      </li>
                    </Link>
                  ))}
                </ul>
                {link.title === "Contact Us" && (
                  <ul className="flex items-center justify-start gap-4">
                    <li className="hover:scale-110 transition-all">
                      <a href="#">
                        <Image
                          src="/assets/icons/facebook.svg"
                          alt="logo"
                          width={30}
                          height={30}
                        />
                      </a>
                    </li>
                    <li className="hover:scale-110 transition-all">
                      <a href="#">
                        <Image
                          src="/assets/icons/twitter.svg"
                          alt="logo"
                          width={30}
                          height={30}
                        />
                      </a>
                    </li>
                    <li className="hover:scale-110 transition-all">
                      <a href="#">
                        <Image
                          src="/assets/icons/instagram.svg"
                          alt="logo"
                          width={30}
                          height={30}
                        />
                      </a>
                    </li>
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="w-full flex flex-col-reverse sm:flex-row items-center lg:justify-center justify-start gap-x-10 md:gap-20 text-blue font-medium py-4 md:pt-10 md:pb-0 lg:pt-16">
          <p>© 2024 AssetWorldwide</p>
          <div className="flex items-center justify-between mb-2 sm:mb-0 gap-x-10 md:gap-20">
            <a
              href="/terms-and-conditions"
              className="hover:text-red cursor-pointer transition-all"
            >
              Terms & conditions
            </a>
            <a
              href="/privacy-policy"
              className="hover:text-red cursor-pointer transition-all"
            >
              Privacy policy
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
