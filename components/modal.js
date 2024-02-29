import { useEffect } from "react";

export const Toast = ({ closeToast, message, type }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      closeToast();
    }, 5000); // 30000 milliseconds = 30 seconds

    // This function will run when the component unmounts or when the dependencies of useEffect change
    return () => {
      clearTimeout(timer);
    };
  }, [closeToast]);
  return (
    <div
      className={`border rounded ${
        type === "success"
          ? "bg-[#D4EDDA] border-[#28A745] text-[#155724]"
          : "bg-[#fef2f2] border-[#f87171] text-[#991b1b]"
      } text-sm p-4 flex justify-between sm:w-[380px] lg:w-2/5 max-w-[430px] fixed right-1 top-4 z-50`}
    >
      <div>
        <div className="flex items-center">
          {type === "success" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clipRule="evenodd"
              />
            </svg>
          )}
          <p>{message}</p>
        </div>
      </div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          onClick={closeToast}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>
    </div>
  );
};
