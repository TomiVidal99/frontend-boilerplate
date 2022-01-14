import React from "react";
import { useRoutes } from "react-router-dom";

// pages
import Home from "./Home";
import FileStructure from "./FileStructure";
import DefaultRoute from "./DefaultRoute";

const PagesContainer = () => {
  const element = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/file-structure",
      element: <FileStructure />,
    },
    {
      path: "*",
      element: <DefaultRoute />,
    },
  ]);
  return element;
};

export default PagesContainer;
