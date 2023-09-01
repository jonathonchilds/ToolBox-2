import React from "react";
import { button } from "../styling/tailwindClasses";

export default function About() {
  return (
    <div className="h-full w-full">
      <div className="flex items-center justify-center p-10">
        <div className="mx-auto w-full max-w-[415px] rounded bg-slate-100 p-6 shadow-xl">
          <div className="p-8 text-center">
            <h1 className=" text-xl">Welcome to ToolBox!</h1>
          </div>
          <p className="px-6 text-center">
            I hand-coded every pixel of this sensational full stack application.
            <br />
            <br />
            You can sign-up and subsequently sign-in, giving you the ability to
            add tools for all to see! When you&apos;re signed in, you&apos;ll be
            greeted with a nice welcome message and you&apos;ll gain access to
            user priviledges.
            <br />
            <br />
            (To reiterate, this is not just a concept. I&apos;m paying for the
            PostgreSQL database and the hosting - so go ahead!) Your password
            will be hashed via ASP.NET&apos;s built-in password hashing
            capabilities, making it up to date with modern standards.
            <br />
            <br />
            As a user, you may list tools for borrow, for rent, or allow them to
            be purchased. While signed in and your session is active (via
            sessions controller), the tools that YOU have added will be rendered
            with buttons to edit or delete those tools. (Authentication is used
            to ensure that the user who is logged in is the user who created the
            tool - this is verified on the backend using JWT tokens.)
            <br />
            <br />
            The entire app enjoys type-safety by way of TypeScript. React gives
            us a nice user experience, allowing for snappy rendering and some
            niceties such as drag-and-drop adding of your pictures.
            <br />
            <br />
            Last but not least, I used Tailwind CSS for styling, and the app
            features a completely different UI for mobile usage!
            <br />
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
