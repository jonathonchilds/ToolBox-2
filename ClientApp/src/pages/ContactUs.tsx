import React from "react";
import backgroundImg from "../images/pointy-glove-guy.jpg";
import logo from "../images/logo.png";

export default function ContactUs() {
  return (
    <div className="relative w-full bg-zinc-900/90">
      <img
        src={backgroundImg}
        className="absolute h-full w-full object-cover mix-blend-overlay"
        alt="Friendly machinist with a mustache, a glove, and a smile."
      />
      <div className="flex h-full items-center justify-center p-8">
        <div className="relative mx-auto w-full max-w-[400px] rounded-lg border-4 border-gray-50 bg-secondary-400 p-8 shadow-lg">
          <div className="flex justify-center py-4 ">
            <img
              src={logo}
              className="relative flex max-w-[50%] justify-center py-2"
            />
          </div>
          <h1>
            Hello, and welcome to my capstone app! <br></br>
            <br></br>
          </h1>
          <p>
            I have lovingly crafted the styling, components, pages, buttons,
            etc. using Tailwind.<br></br> <br></br>
            The back end was created using C#, .NET, ASP.NET Core, Entity
            Framework, & PostgreSQL. <br></br>
            <br></br>
            The front end is built with TypeScript & React. <br></br>
            <br></br>
          </p>
          <p>
            Please understand that this app is a constant work-in-progress and
            it&apos;s my current home base for applying new concepts. <br></br>{" "}
            <br></br>
          </p>
          <p>Enjoy! :)</p>
          <button className="mt-8 w-full bg-gray-500 py-3 text-white hover:bg-primary-500">
            <a href="mailto:jonathon.k.childs@gmail.com">
              Hire Jonathon! (Opens email)
            </a>
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
