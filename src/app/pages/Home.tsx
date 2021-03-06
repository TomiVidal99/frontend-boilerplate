import React, { ReactElement } from "react";
import { Link } from "react-router-dom";

// imported svg will be called as a component and renderer as inline svg.
import Logo from "@assets/logo.svg";

const Home = (): ReactElement<any> => {
  return (
    <div className="flex flex-col items-center h-full max-w-4xl mx-auto justify-evenly gap-5">
      <h1 className="px-2 py-6 text-xl font-bold text-center uppercase text-sky-700 md:text-2xl lg:text-3xl xl:text-4xl">
        Welcome to the boilerplate for your front end projects!
      </h1>
      <div className="logo_container shrink-0 fill-sky-800">
        <Logo />
      </div>
      <Link
        className="px-2 py-6 text-lg text-sky-600 md:text-xl lg:text-2xl xl:text-3xl"
        to="/file-structure"
      >
        Go To File Structure
      </Link>
    </div>
  );
};

export default Home;
