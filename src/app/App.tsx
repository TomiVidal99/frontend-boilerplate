import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import the style for the entire app
import "./styles/global.scss";

// components
import Home from "./components/Home";
import FileStructure from "./components/FileStructure";

const App = () => {
  return (
    <BrowserRouter>
      <div id="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/file-structure" element={<FileStructure />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
