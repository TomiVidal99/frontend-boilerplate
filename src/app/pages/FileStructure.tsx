import React, { ReactElement } from "react";
import { Link } from "react-router-dom";

import FileStructureImage from "./../../assets/frontend-boilerplate-file-structure.png";

const FileStructure = (): ReactElement<any> => {
  return (
    <div className="flex flex-col items-center h-full max-w-4xl mx-auto justify-evenly gap-5">
      <h1 className="px-2 py-6 text-xl font-bold text-center uppercase text-sky-700 md:text-2xl lg:text-3xl xl:text-4xl">
        FILE STRUCTURE
      </h1>
      <img
        className="file-structure-image hover:grow animation-all duration-1000"
        src={FileStructureImage}
        alt="file structure"
      />
      <Link
        className="px-2 py-6 text-lg text-sky-600 md:text-xl lg:text-2xl xl:text-3xl"
        to="/"
      >
        Go back
      </Link>
    </div>
  );
};

export default FileStructure;
