import Image from "next/image";

const data = [
  {
    id: 1,
    icon: "/images/phone.svg",
    title: "Phone",
    desc: "+44 741 155 9879",
  },
  {
    id: 2,
    icon: "/images/address.svg",
    title: "Address",
    desc: "Unit 3&4 Lustleigh Close, Marsh Barton Trading Estate, Exeter, United Kingdom, EX2 8PW",
  },
  {
    id: 3,
    icon: "/images/email.svg",
    title: "Email",
    desc: "jo.costa@assetworldwide.co.uk",
  },
];

export const CTA = () => {
  return (
    <div className="bg-green-light w-full h-full flex flex-col justify-center py-16 px-10 xl:py-28 lg:mt-10 mx-auto">
      <div className="w-full lg:w-4/5 2xl:w-3/5 mx-auto grid lg:flex justify-between items-start grid-cols-1 sm:grid-cols-2 text-start gap-y-10">
        {data?.map((item, i) => (
          <div
            key={item?.id}
            className={`flex flex-col items-start gap-4 text-black w-full ${
              item.id === 3
                ? "lg:pl-14 border-none"
                : item.id === 1
                ? "md:pr-14"
                : "md:px-14 md:border-l lg:border-x border-grey border-opacity-20 lg:w-[100rem]"
            }`}
          >
            {/* md:border-r border-grey border-opacity-20 md:pr-14 lg:pr-20 xl:pr-36 */}
            <Image
              src={item.icon}
              alt={item.title}
              width={100}
              height={100}
              className="size-8"
            />
            <p className="font-semibold font-Avenir-Heavy text-xl mt-2">
              {item?.title}
            </p>
            <p className="font-Avenir-Medium font-medium text-base">
              {item?.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
