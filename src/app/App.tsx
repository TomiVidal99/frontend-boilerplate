import * as React from "react";

// import the style for the entire app
import "./styles/app.scss";

// import the svg and images in your files like this
import logo from "./../assets/logo.svg";

const App = () => {
  return (
    <div className="app">
      <h1>Welcome to the boilerplate for your front end projects!</h1>
      <div className="logo-container">
        <img src={logo} alt="logo" />
      </div>
    </div>
  );
};

export default App;
