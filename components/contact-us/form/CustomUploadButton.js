import { useState } from "react";

export const CustomUploadButton = ({ name, file, handleFileChange, error }) => {
  const [isInputClicked, setIsInputClicked] = useState(false);

  const handleClick = () => {
    if (!file || !file.name) {
      setIsInputClicked(true);
    }
  };

  const handleChange = (e) => {
    if (isInputClicked) {
      handleFileChange(e);
      setIsInputClicked(false); // Reset the state after handling the change
    }
  };
  return (
    <div className="flex flex-col items-start w-full">
      <label
        onClick={handleClick}
        className="bg-blue-light text-black border-none rounded-lg cursor-pointer flex flex-col items-start w-full justify-between"
      >
        <span className="mr-2.5 text-[#02030D] mb-2">
          Attach file/image if necessary
        </span>
        <div className="w-full border border-[#CC9933] bg-[#FAF5EB] rounded-lg px-4 py-3.5">
          <div className="bg-primary-gold rounded-lg flex flex-col items-center justify-center px-6 py-3">
            <input
              name={name}
              type="file"
              onChange={handleChange}
              className="hidden"
              accept=".pdf, .jpg, .png, .jpeg, .docx"
            />
            {!file ? (
              <div className="flex flex-col items-center justify-center">
                <p className="font-medium font-Avenir-Medium text-sm md:text-[15px] text-white">
                  Tap to Upload Picture/document
                </p>
                <p className="text-xs md:text-[13px] text-[#FAF5EB80] font-Avenir-Regular">
                  jpg, jpeg, pdf, docx.
                </p>
              </div>
            ) : (
              <div className="flex items-center justify-between w-full">
                <span className="text-white text-xs sm:text-sm font-medium">
                  {file.name}
                </span>
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={() => handleFileChange("")}
                >
                  <path
                    d="M10.125 5.375V5.75H13.875V5.375C13.875 4.87772 13.6775 4.40081 13.3258 4.04917C12.9742 3.69754 12.4973 3.5 12 3.5C11.5027 3.5 11.0258 3.69754 10.6742 4.04917C10.3225 4.40081 10.125 4.87772 10.125 5.375ZM8.625 5.75V5.375C8.625 4.47989 8.98058 3.62145 9.61351 2.98851C10.2464 2.35558 11.1049 2 12 2C12.8951 2 13.7535 2.35558 14.3865 2.98851C15.0194 3.62145 15.375 4.47989 15.375 5.375V5.75H21C21.1989 5.75 21.3897 5.82902 21.5303 5.96967C21.671 6.11032 21.75 6.30109 21.75 6.5C21.75 6.69891 21.671 6.88968 21.5303 7.03033C21.3897 7.17098 21.1989 7.25 21 7.25H19.869L18.45 19.676C18.3454 20.5911 17.9076 21.4358 17.2201 22.0488C16.5326 22.6618 15.6436 23.0004 14.7225 23H9.2775C8.3564 23.0004 7.46735 22.6618 6.77989 22.0488C6.09243 21.4358 5.65464 20.5911 5.55 19.676L4.131 7.25H3C2.80109 7.25 2.61032 7.17098 2.46967 7.03033C2.32902 6.88968 2.25 6.69891 2.25 6.5C2.25 6.30109 2.32902 6.11032 2.46967 5.96967C2.61032 5.82902 2.80109 5.75 3 5.75H8.625ZM10.5 10.625C10.5 10.4261 10.421 10.2353 10.2803 10.0947C10.1397 9.95402 9.94891 9.875 9.75 9.875C9.55109 9.875 9.36032 9.95402 9.21967 10.0947C9.07902 10.2353 9 10.4261 9 10.625V18.125C9 18.3239 9.07902 18.5147 9.21967 18.6553C9.36032 18.796 9.55109 18.875 9.75 18.875C9.94891 18.875 10.1397 18.796 10.2803 18.6553C10.421 18.5147 10.5 18.3239 10.5 18.125V10.625ZM14.25 9.875C14.0511 9.875 13.8603 9.95402 13.7197 10.0947C13.579 10.2353 13.5 10.4261 13.5 10.625V18.125C13.5 18.3239 13.579 18.5147 13.7197 18.6553C13.8603 18.796 14.0511 18.875 14.25 18.875C14.4489 18.875 14.6397 18.796 14.7803 18.6553C14.921 18.5147 15 18.3239 15 18.125V10.625C15 10.4261 14.921 10.2353 14.7803 10.0947C14.6397 9.95402 14.4489 9.875 14.25 9.875Z"
                    fill="#FAF5EB"
                  />
                </svg>
              </div>
            )}
          </div>
        </div>
      </label>
      {/* {file && (
        <span className="mt-2 text-primary-green text-xs sm:text-sm font-medium">
          {file.name}
        </span>
      )} */}
      {error && (
        <span className="ml-2 mb-6 text-red-500 text-lg font-medium">*</span>
      )}
    </div>
  );
};
