import React from "react";
import backgroundImg from "../images/pointy-glove-guy.jpg";
import logo from "../images/logo.png";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
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
        <form className="relative mx-auto w-full max-w-[400px] rounded-lg border-4 border-gray-50 bg-secondary-400 p-8">
          <div className="flex justify-center py-4">
            <img src={logo} className="relative " />
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
            <input
              className="relative rounded-full border border-stone-500 bg-gray-50 p-2 px-4"
              type="text"
              placeholder="Username"
            />
          </div>
          <div className="flex flex-col ">
            <input
              className="relative rounded-full border border-stone-500 bg-gray-50 p-2 px-4 "
              type="password"
              placeholder="Password"
            />
          </div>
          <button className="mt-8 w-full rounded-full bg-gray-500 py-3 text-white hover:bg-primary-500">
            Sign In
          </button>
          <p className="mt-3 flex items-center">
            <input className="mr-2" type="checkbox" />
            Remember Me
          </p>
          <p className="mt-8 text-center">
            Not a member?{" "}
            <Link to="/sign-up" className="underline">
              Sign Up Here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
