export const CustomUploadButton = ({ name, file, handleFileChange, error }) => {
  return (
    <div className="flex flex-col items-start w-full">
      <label className="bg-blue-light text-black border-none rounded-lg cursor-pointer flex flex-col items-start w-full justify-between">
        <span className="mr-2.5 text-[#02030D] mb-2">
          Attach file/image if necessary
        </span>
        <div className="w-full border border-[#CC9933] bg-[#FAF5EB] rounded-lg px-4 py-3.5">
          <div className="bg-primary-gold rounded-lg flex flex-col items-center justify-center p-3">
            <input
              name={name}
              type="file"
              onChange={handleFileChange}
              className="hidden"
              accept=".pdf, .jpg, .png, .jpeg, .docx"
            />
            <div className="flex flex-col items-center justify-center">
              <p className="font-medium font-Avenir-Medium text-sm md:text-[15px] text-white">
                Tap to Upload Picture/document
              </p>
              <p className="text-xs md:text-[13px] text-[#FAF5EB80] font-Avenir-Regular">
                jpg, jpeg, pdf, docx.
              </p>
            </div>
          </div>
        </div>
      </label>
      {file && (
        <span className="mt-2 text-primary-green text-xs sm:text-sm font-medium">
          {file.name}
        </span>
      )}
      {error && (
        <span className="ml-2 mb-6 text-red-500 text-lg font-medium">*</span>
      )}
    </div>
  );
};
