<<<<<<< HEAD
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: "Assets Worldwide",
  description:
    "We are a company that provides services to help make asset acquisition and management easier for you. We provide services such as property management, real estate, and more. We are here to help you with all your asset needs.",
=======
"use client";
import { useState } from "react";
import localFont from "next/font/local";
import { ToastContext } from "@/utils/ToastContext";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { ErrorToast, Notification } from "@/components/modal";
import "./globals.css";

const avenir = localFont({
  src: [
    {
      path: "../public/assets/fonts/Avenir Light.ttf",
      weight: "300",
    },
    {
      path: "../public/assets/fonts/Avenir Regular.ttf",
      weight: "400",
    },
    {
      path: "../public/assets/fonts/Avenir Book.ttf",
      weight: "500",
    },
    {
      path: "../public/assets/fonts/Avenir Heavy.ttf",
      weight: "600",
    },
    {
      path: "../public/assets/fonts/Avenir Black.ttf",
      weight: "700",
    },
  ],
});

const trajanPro = localFont({
  src: [
    {
      path: "../public/assets/fonts/TrajanPro-Regular.ttf",
      weight: "400",
    },
    {
      path: "../public/assets/fonts/TrajanPro-Bold.otf",
      weight: "700",
    },
  ],
});

const metadata = {
  title: "",
  description: "",
  keywords: "",
>>>>>>> f38d154257ac003846d80f9fd9b8b917b2c76b30
};

export default function RootLayout({ children }) {
  const [showToast, setShowToast] = useState(null);
  const [toastMessage, setToastMessage] = useState("");

  return (
<<<<<<< HEAD
    <html lang="en">
      <body>
        <Navbar />
        <div className="">
          {children}
        </div>
        <Footer />
      </body>
    </html>
=======
    <ToastContext.Provider
      value={{ showToast, setShowToast, toastMessage, setToastMessage }}
    >
      <html lang="en" className={`${trajanPro.className} ${avenir.className}`}>
        <head>
          <title>{metadata.title}</title>
          <meta name="description" content={metadata.description} />
          <meta name="keywords" content={metadata.keywords} />
        </head>
        <body className="">
          {showToast === "error" && (
            <ErrorToast
              closeToast={() => setShowToast(false)}
              message={toastMessage}
            />
          )}
          {showToast === "success" && (
            <Notification
              title={toastMessage.title}
              message={toastMessage.message}
              closeModal={() => setShowToast(null)}
            />
          )}
          <Nav />
          {children}
          <Footer />
        </body>
      </html>
    </ToastContext.Provider>
>>>>>>> f38d154257ac003846d80f9fd9b8b917b2c76b30
  );
}
