import React from "react";
import backgroundImg from "../images/pointy-glove-guy.jpg";
import logo from "../images/logo.png";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function SignIn() {
  return (
    <div className="h-full">
      <div className="flex items-center justify-center p-8">
        <form className="mx-auto w-full max-w-[400px] rounded bg-slate-100 p-8 text-gray-950 shadow-xl">
          <h1 className="flex justify-center text-xl font-semibold">Sign In</h1>
          <div className="flex justify-around pb-8 pt-4">
            <p className="flex cursor-pointer  bg-slate-50 px-6 py-2 pb-1 shadow-lg hover:shadow-xl">
              <BsFacebook />
            </p>
            <p className=" flex cursor-pointer  bg-slate-50 px-6 py-2 pb-1 shadow-lg hover:shadow-xl">
              <FcGoogle />
            </p>
          </div>
          <div className="mb-4 flex flex-col">
            <input
              className="rounded p-2 px-4"
              type="text"
              placeholder="Username"
            />
          </div>
          <div className="flex flex-col ">
            <input
              className="rounded p-2 px-4 "
              type="password"
              placeholder="Password"
            />
          </div>
          <button className="mt-8 w-full rounded-lg bg-gray-500 py-3 text-white hover:bg-primary-500">
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
