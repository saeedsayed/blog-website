import React from "react";
import aboutImage from "../../../public/about.png";
import Image from "next/image";

export const metadata = {
  title: "About Us",
  description: "About Us Devloper",
};

const AboutPage = () => {
  return (
    <div className="flex flex-col md:flex-row items-center">
      <div className="flex-1 flex flex-col gap-9">
        <h4 className="text-bermuda">About Agency</h4>
        <h1 className="text-4xl font-bold">
          We create digital ideas that are bigger, bolder, braver and better.
        </h1>
        <p className="text-gray-400">
          We create digital ideas that are bigger, bolder, braver and better. We
          believe in good ideas flexibility and precission We’re world’s Our
          Special Team best consulting & finance solution provider. Wide range
          of web and software development services.
        </p>
        <div className="flex justify-between gap-4">
          <div className="">
            <h1 className="text-3xl text-bermuda font-bold">10 K+</h1>
            <p>Year of experience</p>
          </div>
          <div className="">
            <h1 className="text-3xl text-bermuda font-bold">10 K+</h1>
            <p>Year of experience</p>
          </div>
          <div className="">
            <h1 className="text-3xl text-bermuda font-bold">10 K+</h1>
            <p>Year of experience</p>
          </div>
        </div>
      </div>
      <div className="relative md:flex-1 h-[470px] w-full">
        <Image src={aboutImage} alt="About Image" fill className="" />
      </div>
    </div>
  );
};

export default AboutPage;
