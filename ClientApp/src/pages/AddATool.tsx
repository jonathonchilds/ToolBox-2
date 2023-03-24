import React from "react";
import backgroundImg from "../assets/pointy-glove-guy.jpg";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

export default function SignIn() {
  return (
    <div className="relative h-screen w-full bg-zinc-900/90">
      <img
        src={backgroundImg}
        className="absolute h-full w-full object-cover mix-blend-overlay"
        alt="Friendly machinist with a mustache, a glove, and a smile."
      />
      <div className="flex h-full items-center justify-center p-8">
        <form className="relative mx-auto w-full max-w-[400px] bg-secondary-400 p-8 shadow-lg">
          <div className="flex justify-center py-4 ">
            <img
              src={logo}
              className="relative flex max-w-[50%] justify-center py-2"
            />
          </div>

          <div className="flex justify-around pb-8 pt-4"></div>

          <div className="mb-4 flex flex-col">
            <label>Name of tool</label>
            <input className="relative border bg-gray-50" type="text" />
          </div>
          <div className="mb-4 flex flex-col">
            <label>Can people borrow this tool (at no charge)?</label>
            <input className="relative border bg-gray-50" type="text" />
          </div>
          <div className="mb-4 flex flex-col">
            <label>Can this tool be rented?</label>
            <input className="relative border bg-gray-50" type="text" />
          </div>
          <div className=" mb-4 flex flex-col ">
            <label>Can this tool be purchased?</label>
            <input className="relative border bg-gray-50" type="password" />
          </div>

          <button className="mt-8 w-full bg-gray-500 py-3 text-white hover:bg-primary-500">
            Add Tool
          </button>
        </form>
      </div>
    </div>
  );
}
