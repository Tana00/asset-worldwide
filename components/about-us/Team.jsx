import React from "react";
import Image from "next/image";
import Link from "next/link";
import img2 from "@/public/images/male-avatar.svg";
import img1 from "@/public/images/female-avatar.svg";
import FadeIn from "../FadeIn";

const teamList = [
  {
    id: 1,
    name: "Cynthia Kayle",
    title: "Founder/CEO",
    description:
      "She is the visionary behind Asset Worldwide Real Estate Transforming Houses. With her background she leads our team with a passion for transforming properties and creating unparalleled living experiences.",
    img: img1,
  },
  {
    id: 2,
    name: "John Francis",
    title: "Chief Technology Officer",
    description:
      "He has extensive experience in Real Estate and Housing. He is instrumental in guiding our strategic initiatives and ensuring that our services exceed client expectations.",
    img: img2,
  },
  {
    id: 3,
    name: "Patricia Adebayo",
    title: "Lead Designer",
    description:
      "She is the creative force behind our transformative designs. With a keen eye for detail and a deep understanding of the latest trends, She ensures that each project reflects a perfect blend of innovation and aesthetic appeal.",
    img: img1,
  },
  {
    id: 4,
    name: "Jonathan Brooke",
    title: "Architect",
    description:
      "Our Architect, Jonathan Brooke, brings a wealth of experience in architectural design. He is dedicated to creating spaces that seamlessly integrate functionality and elegance, contributing to the unique identity of every project.",
    img: img2,
  },
  {
    id: 5,
    name: "Christiana Durand",
    title: "Project Manager",
    description:
      "She oversees the seamless execution of our projects. With a background in [relevant experience], She ensures that timelines are met, quality is maintained, and our clients' visions come to life.",
    img: img1,
  },
  {
    id: 6,
    name: "Emmanuel Simone",
    title: "Client Services Manager",
    description:
      "He is the friendly face behind our exceptional client services. He ensures that our clients receive personalized attention, fostering strong relationships and providing support throughout their real estate journey.",
    img: img1,
  },
];

const Team = () => {
  return (
    <FadeIn>
      <div id="meet-the-team" className="mt-8 lg:pb-20">
        <div className="w-full min-h-screen pb-6 md:pt-4 xl:py-12 bg-gold-light">
          <div className="w-full lg:w-4/5 py-6 px-2 md:px-8 mx-auto mt-8 flex flex-col justify-center items-center text-center gap-14">
            <div className="flex flex-col gap-3 px-4 md:px-16 font-light justify-center items-center text-center">
              <h2 className="text-primary-gold text-2xl md:text-[2rem] lg:text-[2.5rem] font-bold sm:leading-[80px] font-Trajan ">
                MEET THE TEAM
              </h2>
              <p className="text-black text-sm !leading-6 sm:text-lg font-light sm:!leading-8 w-full 3xl:px-10 mx-auto font-Avenir-Regular">
                Who are the people who make up Asset Worldwide
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 4xl:grid-cols-4 gap-y-10 gap-x-4 xl:gap-y-10 3xl:gap-y-16">
              {teamList.map((member) => (
                <div
                  key={member.id}
                  className="w-11/12 h-[600px] mx-auto flex flex-col items-center gap-4 py-6 rounded-lg bg-white border-b-4 border-primary-gold"
                >
                  <div className="w-full flex items-center justify-center border-primary-gold border-b pb-2">
                    <Image
                      src={member.img}
                      alt={member.name}
                      className="w-24 h-40 object-contain"
                    />
                  </div>
                  <div className="flex flex-col gap-2 py-4 px-6">
                    <h3 className="text-primary-gold text-base md:text-xl font-Avenir-Heavy font-bold">
                      {member.name}
                    </h3>
                    <h3 className="text-grey text-xs xl:text-sm font-bold">
                      {member.title}
                    </h3>
                    <p className="mt-4 text-[#000] text-sm xl:text-base 2xl:text-[17px] !leading-8 font-light 3xl:w-4/5 mx-auto font-Avenir-Regular">
                      {member.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </FadeIn>
  );
};

export default Team;
