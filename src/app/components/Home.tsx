import React, { ReactElement } from "react";
import { Link } from "react-router-dom";

// import all the images like this
import logo from "./../../assets/logo.svg";

const Home = (): ReactElement<any> => {
  return (
    <div className="home">
      <h1>Welcome to the boilerplate for your front end projects!</h1>
      <div className="logo-container">
        <img src={logo} alt="logo" />
      </div>
      <Link className="link" to="/file-structure">
        File Structure
      </Link>
    </div>
  );
};

export default Home;
