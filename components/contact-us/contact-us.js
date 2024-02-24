"use client";
import { useState, useContext, useEffect } from "react";
import { ToastContext } from "@/utils/ToastContext";
import { CustomInput, CustomUploadButton } from "./form";
import { toBase64 } from "@/utils";

const defaultState = {
  subject: "",
  fullName: "",
  email: "",
  file: "",
  fileName: "",
  message: "",
};

export const ContactUsForm = () => {
  const [data, setData] = useState(defaultState);
  const [isActive, setIsActive] = useState(false);
  const [buttonText, setButtonText] = useState("Send Message");
  const [missingFields, setMissingFields] = useState([]);
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [attachment, setAttachment] = useState([]);

  const { setShowToast, setToastMessage } = useContext(ToastContext);

  const resetMissingFields = () => {
    setMissingFields([]);
    setIsValidEmail(false);
  };

  const handleDataChange = (value, name) => {
    resetMissingFields();
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleFileChange = async (event, name) => {
    resetMissingFields();
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      const res = await toBase64(selectedFile);

      setAttachment([...attachment, res]);
      event.target.value = "";
      return setData({
        ...data,
        [name]: selectedFile,
        ...(name === "file" && { fileName: selectedFile.name }),
      });
    }
  };

  const validateFields = () => {
    const requiredFields = ["subject", "fullName", "email", "message"];

    const filteredFields = requiredFields.filter((field) => data[field] === "");

    setMissingFields(filteredFields);

    // Use regex for basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (filteredFields.length > 0) {
      setToastMessage(
        "Validation Error, please fill all required missing fields"
      );
      setShowToast("error");
      return false;
    }

    if (!emailRegex.test(data?.email)) {
      setToastMessage("Validation Error, email is invalid");
      setShowToast("error");
      setIsValidEmail(true);
      return false;
    }

    return true;
  };

  const handleOnSubmit = async () => {
    try {
      setButtonText("Sending...");
      if (!validateFields()) {
        return setButtonText("Send");
      } else {
        const bodyData = {
          Subject: data?.subject,
          "Full Name": data?.fullName,
          "Email Address": data?.email,
          Message: data?.message,
        };
        // const res = await fetch("/api/contact", {
        //   body: JSON.stringify({
        //     email: data?.email,
        //     subject: `Enquiry`,
        //     body: bodyData,
        // files: attachment,
        //     data,
        //   }),
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   method: "POST",
        // });

        // const result = await res.json();

        // if (result.status === 202) {
        //   setToastMessage({
        //     title: "Message sent",
        //     message: "Your message has been sent successfully.",
        //   });
        //   setShowToast("success");
        //   setData(defaultState);
        //   return setButtonText("Send");
        // } else {
        //   setToastMessage("Message was not sent else. Please try again");
        //   setShowToast("error");
        //   return setButtonText("Send");
        // }
      }
    } catch (err) {
      setToastMessage("Message not sent. Please try again");
      setShowToast("error");
      return setButtonText("Send");
    }
  };

  useEffect(() => {
    if (isActive) {
      document.body.classList.add("active-modal");
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.classList.remove("active-modal");
      document.documentElement.style.overflow = "auto";
    }

    return () => {
      // Cleanup function to remove styles when component unmounts
      document.body.classList.remove("active-modal");
      document.documentElement.style.overflow = "auto";
    };
  }, [isActive]);

  return (
    <section className="w-full md:w-10/12 xl:w-4/5 p-8 lg:mb-20 mx-auto">
      <div className="flex flex-col items-center justify-center gap-4 py-6 md:py-10">
        <p className="text-primary-green text-3xl md:text-[40px] md:leading-[54.64px] font-Avenir-Black font-bold">
          Get In Touch
        </p>
        <p className="text-black text-base font-Avenir-Medium font-medium text-center">
          Please fill out the form below and we will get across to you.
        </p>
      </div>
      <div className="w-full lg:w-4/5 xl:w-2/3 mx-auto grid grid-cols-1 gap-4 md:gap-6 xl:gap-8">
        <CustomInput
          value={data.subject}
          onChange={(e) => {
            const regex = /^[A-Za-z]*$/;

            if (regex.test(e.target.value)) {
              handleDataChange(e.target.value, "subject");
            } else if (e.target.value === "") {
              // Handle the case where the input is empty
              handleDataChange("", "subject");
            }
          }}
          name="subject"
          label="Subject"
          error={missingFields?.includes("subject")}
        />
        <CustomInput
          value={data.fullName}
          onChange={(e) => {
            const regex = /^[A-Za-z]*$/; // Allow an empty string or alphabets

            if (regex.test(e.target.value)) {
              handleDataChange(e.target.value, "fullName");
            } else if (e.target.value === "") {
              // Handle the case where the input is empty
              handleDataChange("", "fullName");
            }
          }}
          name="full_name"
          label="Full Name"
          error={missingFields?.includes("fullName")}
        />
        <CustomInput
          value={data.email}
          type="email"
          onChange={(e) => handleDataChange(e.target.value, "email")}
          name="email"
          label="Email Address"
          error={missingFields?.includes("email") || isValidEmail}
        />
        <CustomUploadButton
          name="file"
          file={data.file}
          handleFileChange={(e) => handleFileChange(e, "file")}
          error={missingFields?.includes("file")}
        />
        <div className="w-full flex items-start justify-start flex-col">
          <label htmlFor="fullName" className="text-gray text-sm mb-2">
            Message
          </label>
          <textarea
            type="text"
            id="fullName"
            cols={30}
            value={data.message}
            onChange={(e) => handleDataChange(e.target.value, "message")}
            className={`border ${
              missingFields?.includes("message")
                ? "border-red-500"
                : "border-[#CED3DD]"
            } rounded-[4px] h-[200px] w-full p-4 placeholder:text-[#858585]`}
            placeholder="Write message here"
          />
        </div>
        <div className="w-4/5 mx-auto flex items-center justify-center">
          <button
            onClick={handleOnSubmit}
            className="mt-8 bg-primary-green text-white w-full md:w-80 h-14 text-base font-medium rounded-lg sm:mx-4 hover:scale-105 transition-all"
          >
            {buttonText}
          </button>
        </div>
      </div>
    </section>
  );
};
