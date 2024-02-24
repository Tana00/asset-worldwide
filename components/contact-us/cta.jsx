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
    desc: "London, UK",
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
      <div className="w-full lg:w-4/5 2xl:w-3/5 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center justify-evenly text-center gap-y-10 gap-4 lg:gap-10">
        {data?.map((item) => (
          <div
            key={item?.id}
            className={`flex flex-col items-start gap-4 text-black w-fit`}
          >
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
