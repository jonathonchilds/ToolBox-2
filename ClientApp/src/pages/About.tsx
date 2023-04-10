import React from "react";
import backgroundImg from "../images/pointy-glove-guy.jpg";
import logo from "../images/logo.png";

export default function About() {
  return (
    <div className="h-full w-full">
      <div className="flex items-center justify-center p-10">
        <div className="relative mx-auto w-full max-w-[400px] rounded-lg border-4 border-gray-50 bg-secondary-400 p-8 shadow-lg">
          <p className="text-center">
            <h1 className="mt-2 text-xl">Welcome to my capstone app!</h1>
            <br></br>

            <p>
              Front End: TypeScript, React, Vite <br></br> <br></br>
              Backend: C#, .NET, ASP.NET Core, Entity Framework, PostgreSQL{" "}
              <br></br> <br></br>
              Styling: Tailwind CSS
              <br></br>
              <br></br>
            </p>
            <p>
              &#40;This app is a constant work-in-progress and it&apos;s my
              current sandbox for applying new concepts.&#41; <br></br>{" "}
              <br></br>
            </p>
            <p>Enjoy!</p>
          </p>
          <button className="my-4 mt-8 w-full animate-bounce rounded bg-gray-500 py-3 text-white hover:bg-primary-500">
            <a href="mailto:jonathon.k.childs@gmail.com">
              Hire Jonathon! (e-mail)
            </a>
          </button>
          <button className="my-2 w-full rounded bg-gray-500 py-3 text-white hover:bg-primary-500">
            <a href="https://www.linkedin.com/in/jonathon-childs-97b43651/">
              Jonathon&apos;s LinkedIn
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
