import React from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

import Logo from "../assets/logo.png";
import useMediaQuery from "../hooks/useMediaQuery";

function Navbar({ setSearchInput }: any) {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  };

  const flexBetween = "flex items-center justify-between";
  const isAboveMediumScreens = useMediaQuery("(min-width: 1425px)");
  const [isMenuToggled, setIsMenuToggled] = React.useState(false);

  return (
    <nav>
      {/* Overall navbar */}
      <div
        className={`${flexBetween} w-full border-b border-primary-500 bg-secondary-400 py-8`}
      >
        {/* Components container of the navbar */}
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* LEFT SIDE */}
            <img alt="logo" src={Logo} />
            {/* RIGHT SIDE */}
            {isAboveMediumScreens ? (
              <div className={`${flexBetween} w-full`}>
                <div className={`${flexBetween} gap-8 text-sm`}>
                  <Link to="/">Home</Link>
                  <Link to="/about">About</Link>
                  <Link to="/contact-us">Contact Us</Link>
                  <p>Saved Tools</p>
                  <p>My Tools</p>
                </div>
                <div className={`${flexBetween} gap-8`}>
                  <Link to="/sign-in">Sign In</Link>
                  <Link to="/sign-up">Sign Up</Link>
                  <form>
                    <div
                      className={
                        isAboveMediumScreens
                          ? `flex items-center justify-between gap-2`
                          : `flex items-center justify-start gap-2 px-2 pb-8`
                      }
                    >
                      <input
                        className="rounded-full px-4 py-3"
                        type="text"
                        placeholder="Find a tool"
                        onSubmit={handleInputChange}
                      />
                      <button>Search</button>
                    </div>
                  </form>
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
      </div>
      {/* Mobile menu modal*/}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-secondary-400">
          {/* Close icon */}
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
                <input
                  className="rounded-full px-4 py-3"
                  type="text"
                  placeholder="Find a tool"
                  onChange={handleInputChange}
                />
                <button>Search</button>
              </div>
            </div>
          </div>
          <div className="ml-[33%] flex flex-col gap-10 text-2xl">
            <Link to="/">Home</Link>
            <p>Saved Tools</p>
            <p>My Tools</p>
            <Link to="/sign-in">Sign In</Link>
            <Link to="/sign-up">Sign Up</Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
