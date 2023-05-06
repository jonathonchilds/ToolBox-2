import React from "react";
import backgroundImg from "../images/pointy-glove-guy.jpg";
import logo from "../images/logo.png";
import { button } from "../styling/tailwindClasses";

export default function About() {
  return (
    <div className="h-full w-full">
      <div className="flex items-center justify-center p-10">
        <div className="relative mx-auto w-full max-w-[400px] rounded-lg border-4 border-gray-50 bg-secondary-400 shadow-lg">
          <div className="py-14 text-center">
            <h1 className=" text-xl">Welcome to ToolBox!</h1>
          </div>
          <p className="px-6 text-center">
            ToolBox is a concept app that I designed and built as an accessory
            for community-building and the gig-economy.
            <br />
            <br />
            Users can sign-up and subsequently sign-in, giving them access to
            add tools.
            <br />
            <br />
            Users are given the option to allow for their tools to be borrowed
            at no charge, offered for rent, or for purchase.
            <br />
            <br />
            When the user is logged-in, they may edit the tool details or delete
            the tool from the app.
            <br />
            <br />
            Authentication is used to ensure that the user who is logged in is
            the user who created the tool - this is verified on the backend
            using JWT tokens.
            <br />
            <br />
            I constructed the backend using .NET 6 with ASP.NET.
            <br />
            <br />
            I used a PostgreSQL database established via C# models by way of
            EntityFrameworkCore.
            <br />
            <br />
            AspNetCore gives me the framework for my API&apos;s, with
            Microsoft&apos;s JWT bearer for user authorization.
            <br />
            <br />
            The front-end of this app was built with TypeScript, React, HTML5,
            and Tailwind CSS.
            <br />
            <br />
            I decided to learn Tailwind for this project specifically and
            I&apos;ve thoroughly enjoyed its quick, simple, yet powerful design.
            I can appreciate the simplicity meshed with total control and
            customization features.
            <br />
            <br />
            React makes use of a few libraries for assistance, and I&apos;ve
            also integrated a few helper API&apos;s for things like address
            fill-in and form drop-downs. <br />
            <br />
            Please feel free to create an account, and be sure to view the app
            on mobile as well as desktop - the menu&apos;s and navigation bar
            are dynamic according to your screen size. &#40;As are a few other
            features.&#41;
            <br />
            <br />I hope you enjoy!
            <br />
            <br />
            <div className="font font-script text-lg">- Jonathon</div>
          </p>
          <div className=" my-10 flex flex-wrap justify-evenly ">
            <button className={`${button} p-2`}>
              <a href="mailto:jonathon.k.childs@gmail.com">Email me!</a>
            </button>
            <button className={button}>
              <a href="https://www.linkedin.com/in/jonathon-childs-97b43651/">
                LinkedIn
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
