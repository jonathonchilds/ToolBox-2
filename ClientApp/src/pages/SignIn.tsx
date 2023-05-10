import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useMutation } from "react-query";

import {
  oAuthIcon,
  form,
  formContainer,
  button,
} from "../styling/tailwindClasses";
import { APIError, LoginSuccess, LoginUserType } from "../types";
import { recordAuthentication } from "../auth";

export default function SignIn() {
  const [errorMessage, setErrorMessage] = useState("");
  const [user, setUser] = useState<LoginUserType>({
    email: "",
    password: "",
  });

  function handleStringFieldChange(event: React.ChangeEvent<HTMLInputElement>) {
    const updatedUser = { ...user, [event.target.name]: event.target.value };
    setUser(updatedUser);
  }

  async function loginUser(user: LoginUserType): Promise<LoginSuccess> {
    console.log(user);
    const response = await fetch("/api/Session", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(user),
    });
    if (response.ok) {
      return response.json();
    } else {
      throw await response.json();
    }
  }

  const loginUserMutation = useMutation(loginUser, {
    onSuccess: function (apiResponse) {
      recordAuthentication(apiResponse);
      window.location.assign("/");
    },
    onError: function (error: APIError) {
      setErrorMessage(Object.values(error.errors).join(""));
    },
  });

  return (
    <div className="h-full">
      <div className={formContainer}>
        <form
          className={form}
          onSubmit={function (event) {
            event.preventDefault();
            loginUserMutation.mutate(user);
          }}
        >
          <h1 className="flex justify-center text-2xl ">Sign In</h1>
          {errorMessage ? <p>{errorMessage}</p> : null}
          <div className="flex justify-around pb-8 pt-4">
            <p className={oAuthIcon}>
              <BsFacebook />
            </p>
            <p className={oAuthIcon}>
              <FcGoogle />
            </p>
          </div>
          <p className="mb-4 flex flex-col">
            <label className="mb-1 ml-3 px-1">Email</label>
            <input
              className="rounded-full p-2 px-4"
              type="text"
              placeholder="Username"
              name="email"
              value={user.email}
              onChange={handleStringFieldChange}
            />
          </p>
          <p className="flex flex-col ">
            <label className="mb-1 ml-3 px-1">Password</label>
            <input
              className="rounded-full p-2 px-4 "
              type="password"
              placeholder="Password"
              name="password"
              value={user.password}
              onChange={handleStringFieldChange}
            />
          </p>
          <div className="flex justify-center">
            <button className={button}>Sign In</button>
          </div>
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
