export const CustomInput = ({
  value,
  onChange,
  name,
  label,
  error,
  type = "text",
}) => {
  return (
    <div className="font-gilmer flex flex-col items-start justify-start">
      <label htmlFor={name} className="text-[#02030D] text-sm font-medium mb-2">
        {label}{" "}
        {/* <span className={`text-red text-lg ${error ? "visible" : "invisible"}`}>
          *
        </span> */}
      </label>
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        className={`bg-white border ${
          error ? "border-red-500" : "border-[#CED3DD]"
        } p-4 rounded-[4px] w-full h-12`}
      />
    </div>
  );
};
