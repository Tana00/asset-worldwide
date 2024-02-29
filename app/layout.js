"use client";
import { useState } from "react";
import Navbar from "../components/home/Navbar";
import Footer from "../components/home/Footer";
import { ToastContext } from "@/utils/ToastContext";
import { Toast } from "@/components/modal";
import "./globals.css";

const metadata = {
  title: "Assets Worldwide",
  description:
    "We are a company that provides services to help make asset acquisition and management easier for you. We provide services such as property management, real estate, and more. We are here to help you with all your asset needs.",
};

export default function RootLayout({ children }) {
  const [showToast, setShowToast] = useState(null);
  const [toastMessage, setToastMessage] = useState("");

  return (
    <ToastContext.Provider
      value={{ showToast, setShowToast, toastMessage, setToastMessage }}
    >
      <html lang="en">
        <body>
          {(showToast === "error" || showToast === "success") && (
            <Toast
              closeToast={() => setShowToast(false)}
              message={toastMessage}
              type={showToast}
            />
          )}
          <Navbar />
          <div className="">{children}</div>
          <Footer />
        </body>
      </html>
    </ToastContext.Provider>
  );
}
