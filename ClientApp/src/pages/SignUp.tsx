import React from "react";
import backgroundImg from "../images/pointy-glove-guy.jpg";
import logo from "../images/logo.png";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function SignIn() {
  return (
    <div className="relative w-full bg-zinc-900/90">
      <img
        src={backgroundImg}
        className="absolute h-full w-full object-cover mix-blend-overlay"
        alt="Friendly machinist with a mustache, a glove, and a smile."
      />
      <div className="flex items-center justify-center p-8">
        <form className="relative mx-auto w-full max-w-md bg-secondary-400 p-8 shadow-lg">
          <div className="flex justify-center py-4 ">
            <img
              src={logo}
              className="max-w-1/2 relative flex justify-center py-2"
            />
          </div>

          <div className="flex justify-around pb-8 pt-4">
            <p className="relative flex cursor-pointer border bg-slate-50 px-6 py-2 pb-1 shadow-lg hover:shadow-xl">
              <BsFacebook />
            </p>
            <p className="relative flex cursor-pointer border bg-slate-50 px-6 py-2 pb-1 shadow-lg hover:shadow-xl">
              <FcGoogle />
            </p>
          </div>
          <div className="mb-4 flex flex-col">
            <label className="px-2">First Name</label>
            <input className="rounded-full bg-gray-50 px-3" type="text" />
          </div>
          <div className="mb-4 flex flex-col">
            <label className="px-2">Last Name</label>
            <input className="rounded-full bg-gray-50 px-3" type="text" />
          </div>
          <div className="mb-4 flex flex-col">
            <label className="px-2">Zip Code</label>
            <input className="rounded-full bg-gray-50 px-3" type="text" />
          </div>
          <div className="mb-4 flex flex-col pt-2">
            <label className="px-2">Create a Username</label>
            <input className="rounded-full bg-gray-50 px-3" type="text" />
          </div>
          <div className="mb-4 flex flex-col pt-2 ">
            <label className="px-2">Create a Password</label>
            <input className="rounded-full bg-gray-50 px-3" type="password" />
          </div>
          <div className="flex flex-col ">
            <label className="px-2">Re-enter Password</label>
            <input className="rounded-full bg-gray-50 px-3" type="password" />
          </div>
          <button className="mt-8 w-full rounded-full bg-gray-500 py-3 text-white hover:bg-primary-500">
            Sign Up
          </button>
          <p className="mt-8 text-center">
            Already a member?{" "}
            <Link to="/sign-in" className="underline">
              Sign In Here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
