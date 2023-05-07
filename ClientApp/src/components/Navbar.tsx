import React from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

import Logo from "../images/logo.png";
import useMediaQuery from "../hooks/useMediaQuery";
import SearchFunction from "./SearchFunction";
import { getUser, isLoggedIn, logout } from "../auth";

function Navbar() {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1425px)");
  const [isMenuToggled, setIsMenuToggled] = React.useState(false);

  function handleLogout() {
    logout();
    window.location.assign("/");
  }

  const user = getUser();

  return (
    <nav className="sticky top-0">
      <div className="border-b border-slate-600 bg-secondary-400 p-8">
        <div className="flex items-center justify-between gap-14">
          <Link to="/">
            {" "}
            <img alt="logo" src={Logo} />{" "}
          </Link>
          {isAboveMediumScreens ? (
            <div className="flex w-full items-center justify-between">
              <div className="flex items-center justify-between gap-8 text-gray-900">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/add-a-tool">Add A Tool</Link>
                <Link to="/checkout">Checkout</Link>
                {isLoggedIn() ? <p> Welcome back, {user.firstName}!</p> : null}
              </div>
              <div className="mx-8 flex items-center gap-8">
                {isLoggedIn() ? null : <Link to="/sign-in">Sign In</Link>}
                {isLoggedIn() ? null : <Link to="/sign-up">Sign Up</Link>}
                {isLoggedIn() ? (
                  <a
                    href="/"
                    onClick={function (event) {
                      event.preventDefault();
                      handleLogout();
                    }}
                  >
                    {" "}
                    Sign Out
                  </a>
                ) : null}
                <div>
                  <SearchFunction />
                </div>
              </div>
            </div>
          ) : (
            <button
              className="bg-se rounded-full bg-primary-500 p-2"
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              <Bars3Icon className="h-6 w-6 text-white" />
            </button>
          )}
        </div>
      </div>
      {/* Mobile menu modal*/}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed bottom-0 right-0 z-40 h-full w-[300px] bg-secondary-400">
          <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className="h-6 w-6 text-gray-400" />
            </button>
          </div>
          <div className="">
            <div>
              <div
                className={
                  isAboveMediumScreens
                    ? `flex items-center justify-between gap-2`
                    : `flex items-center justify-start gap-2 px-2 pb-8`
                }
              >
                <SearchFunction />
              </div>
            </div>
          </div>
          <div className="ml-[30%] mr-2 flex flex-col gap-10 text-2xl">
            <Link to="/" onClick={() => setIsMenuToggled(!isMenuToggled)}>
              Home
            </Link>
            <Link to="/about" onClick={() => setIsMenuToggled(!isMenuToggled)}>
              About
            </Link>
            <Link
              to="/add-a-tool"
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              Add A Tool
            </Link>
            <Link
              to="/sign-in"
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              Sign In
            </Link>
            <Link
              to="/sign-up"
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              Sign Up
            </Link>
            <Link
              to="/checkout"
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              Checkout
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
