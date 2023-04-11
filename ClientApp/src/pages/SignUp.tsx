import React, { useState } from "react";
import backgroundImg from "../images/pointy-glove-guy.jpg";
import logo from "../images/logo.png";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { Link } from "react-router-dom";
import { UserType } from "src/types";

export default function SignIn() {
  const [newUser, setNewUser] = useState<UserType>({
    firstName: "",
    lastName: "",
    zipCode: 0,
    isContractor: false,
    userName: "",
    password: "",
  });

  function handleRadioClick(event: React.ChangeEvent<HTMLInputElement>) {
    setNewUser({
      ...newUser,
      [event.target.name]: event.target.value === "Yes" ? true : false,
    });
  }

  return (
    <div className="h-full w-full">
      <div className="flex items-center justify-center p-8 ">
        <form className="mx-auto w-full max-w-[400px] rounded bg-slate-100 p-8 text-gray-950 shadow-xl">
          <h1 className="flex justify-center text-2xl ">Sign Up</h1>
          <div className="flex justify-around p-8 ">
            <p className="flex cursor-pointer border bg-slate-50 px-6 py-2 pb-1 shadow-lg hover:shadow-xl">
              <BsFacebook />
            </p>
            <p className="flex cursor-pointer border bg-slate-50 px-6 py-2 pb-1 shadow-lg hover:shadow-xl">
              <FcGoogle />
            </p>
          </div>
          <div className="mb-4 flex flex-col">
            <label className="px-1">First Name</label>
            <input
              className="rounded px-3"
              type="text"
              value={newUser.firstName}
            />
          </div>
          <div className="mb-4 flex flex-col">
            <label className="px-1">Last Name</label>
            <input
              className="rounded px-3"
              type="text"
              value={newUser.lastName}
            />
          </div>
          <div className="mb-4 flex flex-col">
            <label className="px-1">Zip Code</label>
            <input
              className="rounded px-3"
              type="text"
              value={newUser.zipCode}
            />
          </div>
          <div className="mb-2 flex flex-col pt-2">
            <label className="px-1">Are you a licensed contractor?</label>
            <div className="flex w-full justify-around py-2">
              <div>
                <label className="px-2">Yes</label>
                <input
                  type="radio"
                  name="isContractor"
                  value="Yes"
                  onChange={handleRadioClick}
                />
              </div>
              <div>
                <label className="px-2">No</label>
                <input
                  type="radio"
                  name="isContractor"
                  value="No"
                  onChange={handleRadioClick}
                />
              </div>
            </div>
          </div>
          <div className="mb-4 flex flex-col pt-2">
            <label className="px-1">Create a Username</label>
            <input className="rounded px-3" type="text" />
          </div>
          <div className="mb-4 flex flex-col pt-2 ">
            <label className="px-1">Create a Password</label>
            <input className="rounded px-3" type="password" />
          </div>
          <div className="flex flex-col ">
            <label className="px-1">Re-enter Password</label>
            <input className="rounded px-3" type="password" />
          </div>
          <button className="mt-8 w-full rounded-xl bg-gray-500 py-3 text-white hover:bg-primary-500">
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
