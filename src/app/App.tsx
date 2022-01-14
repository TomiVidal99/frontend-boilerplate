import React, { ReactElement } from "react";
import { BrowserRouter } from "react-router-dom";

// import the style for the entire app
import "./styles/global.scss";

// components
import PagesContainer from "@pages/PagesContainer";
import Layout from "@components/Layout";

const App = (): ReactElement => {
  return (
    <BrowserRouter>
      <div id="app" className="h-screen w-screen bg-stone-300">
        <Layout>
          <PagesContainer />
        </Layout>
      </div>
    </BrowserRouter>
  );
};

export default App;
