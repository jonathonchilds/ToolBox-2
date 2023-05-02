import React from "react";
import backgroundImg from "../images/pointy-glove-guy.jpg";
import logo from "../images/logo.png";
import { button } from "../styling/tailwindClasses";

export default function About() {
  return (
    <div className="h-full w-full">
      <div className="flex items-center justify-center p-10">
        <div className="relative mx-auto w-full max-w-[400px] rounded-lg border-4 border-gray-50 bg-secondary-400 p-8 shadow-lg">
          <p className="text-center">
            <h1 className="mt-2 text-xl">Welcome to my capstone app!</h1>
            <br />
            <br />
            ToolBox gives users a place to borrow, rent, or buy/sell tools.
            <br />
            <br />
            But my vision is larger than just tools.
            <br />
            <br />
            I envision a borrow-first platform whereby users can borrow or rent
            nearly anything:
            <br />
            <br />
            Bike pumps, 3d printers, a tent, an iron... anything!
            <br />
            <br />
            For now, I&apos;ve started with tools.
            <br />
            <br />
            Feel free to create an account, login, and add some tools.
            <br />
            <br />
            Front End: TypeScript, React, Vite <br />
            <br />
            Backend: C#, .NET, ASP.NET Core, Entity Framework, PostgreSQL <br />
            <br />
            Styling: Tailwind CSS
            <br />
            <br />
            <p>Enjoy!</p>
          </p>
          <button className={`${button} animate-bounce `}>
            <a href="mailto:jonathon.k.childs@gmail.com">
              Hire Jonathon! (prompts email)
            </a>
          </button>
          <button className={button}>
            <a href="https://www.linkedin.com/in/jonathon-childs-97b43651/">
              Jonathon&apos;s LinkedIn
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
