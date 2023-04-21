import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { UserType, APIError } from "src/types";
import { useMutation } from "react-query";

export default function SignIn() {
  const [passwordEye, setPasswordEye] = useState(false);
  const [confirmPasswordEye, setConfirmPasswordEye] = useState(false);

  const _passwordClick = () => {
    setPasswordEye(!passwordEye);
  };
  const _confirmPasswordClick = () => {
    setConfirmPasswordEye(!confirmPasswordEye);
  };
  const [newUser, setNewUser] = useState<UserType>({
    firstName: "",
    lastName: "",
    email: "",
    zipCode: "",
    isContractor: false,
    username: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  function _stringFieldChange(event: React.ChangeEvent<HTMLInputElement>) {
    setNewUser({ ...newUser, [event.target.name]: event.target.value });
  }

  async function submitNewUser(user: UserType) {
    const response = await fetch("/api/User", {
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

  const navigate = useNavigate();
  const createNewUser = useMutation(submitNewUser, {
    onSuccess: function () {
      navigate("/");
    },
    onError: function (apiError: APIError) {
      setErrorMessage(Object.values(apiError.errors).join(" "));
    },
  });

  async function _formSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    createNewUser.mutate(newUser);
  }

  function handlePriceFieldChange(event: React.ChangeEvent<HTMLInputElement>) {
    const priceInCents = Math.round(parseFloat(event.target.value) * 100);
    setNewUser({
      ...newUser,
      [event.target.name]: priceInCents,
    });
  }

  function handleRadioClick(event: React.ChangeEvent<HTMLInputElement>) {
    setNewUser({
      ...newUser,
      [event.target.name]: event.target.value === "Yes" ? true : false,
    });
  }

  const inputStyling = "h-8 rounded px-3";
  const oAuthIconStyling =
    "flex cursor-pointer border bg-slate-50 px-6 py-2 pb-1 shadow-lg hover:shadow-xl";

  return (
    <div className="h-full w-full">
      <div className="flex items-center justify-center p-8 ">
        <form
          className="mx-auto w-full max-w-[400px] rounded bg-slate-100 p-8 text-gray-950 shadow-xl"
          onSubmit={_formSubmit}
        >
          {errorMessage ? (
            <p className="flex justify-center border-2 border-solid border-red-700 bg-gray-50">
              {errorMessage}
            </p>
          ) : null}
          <h1 className="flex justify-center text-2xl ">Sign Up</h1>
          <section className="flex justify-around p-8 ">
            <p className={oAuthIconStyling}>
              <BsFacebook />
            </p>
            <p className={oAuthIconStyling}>
              <FcGoogle />
            </p>
          </section>
          <p className="mb-4 flex flex-col">
            <label className="mb-1 px-1">First Name</label>
            <input
              autoFocus
              className={inputStyling}
              placeholder="First Name"
              name="firstName"
              type="text"
              onChange={_stringFieldChange}
            />
          </p>
          <p className="mb-4 flex flex-col">
            <label className="mb-1 px-1">Last Name</label>
            <input
              className={inputStyling}
              placeholder="Last Name"
              name="lastName"
              type="text"
              onChange={_stringFieldChange}
            />
          </p>
          <p className="mb-4 flex flex-col">
            <label className="mb-1 px-1">Email</label>
            <input
              className="h-8 rounded px-3"
              placeholder="Email"
              name="email"
              type="text"
              onChange={_stringFieldChange}
            />
          </p>
          <p className="mb-4 flex flex-col">
            <label className="mb-1 px-1">Zip Code</label>
            <input
              className={inputStyling}
              placeholder="Zip Code"
              name="zipCode"
              type="text"
              onChange={_stringFieldChange}
            />
          </p>
          <fieldset>
            <section className="mb-2 flex flex-col pt-2">
              <legend className="px-1">Are you a licensed contractor?</legend>
              <div className="flex w-full justify-around py-2">
                <p>
                  <input
                    type="radio"
                    name="isContractor"
                    value="Yes"
                    onChange={handleRadioClick}
                  />
                  <label className="px-2">Yes</label>
                </p>
                <p>
                  <input
                    type="radio"
                    name="isContractor"
                    value="No"
                    onChange={handleRadioClick}
                  />
                  <label className="px-2">No</label>
                </p>
              </div>
            </section>
          </fieldset>
          <p className="mb-4 flex flex-col pt-2">
            <label className="mb-1 px-1">Create a Username</label>
            <input
              className={inputStyling}
              placeholder="Create a Username"
              name="username"
              type="text"
              onChange={_stringFieldChange}
            />
          </p>
          <fieldset>
            <p className="relative mb-4 flex flex-col pt-2 ">
              <legend className="mb-1 px-1">Create a Password</legend>
              <input
                className={inputStyling}
                type={passwordEye === false ? "password" : "text"}
                placeholder="Password"
              />
              <div className="absolute right-3 top-10 flex cursor-pointer text-2xl">
                {passwordEye === false ? (
                  <AiFillEyeInvisible onClick={_passwordClick} />
                ) : (
                  <AiFillEye onClick={_passwordClick} />
                )}
              </div>
            </p>
            <p className="relative flex flex-col ">
              <label className="mb-1 px-1">Confirm Password</label>
              <input
                className={inputStyling}
                type={confirmPasswordEye === false ? "password" : "text"}
                placeholder="Confirm Password"
              />

              <div className="absolute right-3 top-8 flex cursor-pointer text-2xl">
                {confirmPasswordEye === false ? (
                  <AiFillEyeInvisible onClick={_confirmPasswordClick} />
                ) : (
                  <AiFillEye onClick={_confirmPasswordClick} />
                )}
              </div>
            </p>
          </fieldset>
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
