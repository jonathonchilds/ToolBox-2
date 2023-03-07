import React from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "../assets/logo.png";
import SearchFunction from "../components/SearchFunction";
import useMediaQuery from "../hooks/useMediaQuery";

const Navbar = () => {
  const flexBetween = "flex items-center justify-between";
  const isAboveMediumScreens = useMediaQuery("(min-width: 1425px)");
  const [isMenuToggled, setIsMenuToggled] = React.useState(false);

  return (
    <nav>
      {/* Overall navbar */}
      <div
        className={`${flexBetween} w-full border-b border-primary-500 bg-secondary-400 py-6`}
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
                  <p>Home</p>
                  <p>About</p>
                  <p>Contact Us</p>
                  <p>Saved Tools</p>
                  <p>My Tools</p>
                </div>
                <div className={`${flexBetween} gap-8`}>
                  <p>Sign In</p>
                  <p>Sign Up</p>
                  <SearchFunction />
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
            <SearchFunction />
          </div>
          <div className="ml-[33%] flex flex-col gap-10 text-2xl">
            <p>Home</p>
            <p>Saved Tools</p>
            <p>My Tools</p>
            <p>Sign In</p>
            <p>Sign Up</p>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
