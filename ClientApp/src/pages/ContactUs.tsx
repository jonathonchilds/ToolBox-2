import React from "react";
import backgroundImg from "../assets/pointy-glove-guy.jpg";
import logo from "../assets/logo.png";

export default function ContactUs() {
  return (
    <div className="relative h-screen w-full bg-zinc-900/90">
      <img
        src={backgroundImg}
        className="absolute h-full w-full object-cover mix-blend-overlay"
        alt="Friendly machinist with a mustache, a glove, and a smile."
      />
      <div className="flex h-full items-center justify-center p-8">
        <div className="relative mx-auto w-full max-w-[400px] bg-secondary-400 p-8 shadow-lg">
          <div className="flex justify-center py-4 ">
            <img
              src={logo}
              className="relative flex max-w-[50%] justify-center py-2"
            />
          </div>
          <button className="mt-8 w-full bg-gray-500 py-3 text-white hover:bg-primary-500">
            <a href="mailto:jonathon.k.childs@gmail.com">Hire Jonathon!</a>
          </button>
          <button className="mt-8 w-full bg-gray-500 py-3 text-white hover:bg-primary-500">
            <a href="https://www.linkedin.com/in/jonathon-childs-97b43651/">
              Jonathon&apos;s LinkedIn
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
