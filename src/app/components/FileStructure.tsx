import React, { ReactElement } from "react";
import { Link } from "react-router-dom";

import FileStructureImage from "./../../assets/frontend-boilerplate-file-structure.png";

const FileStructure = (): ReactElement<any> => {
  return (
    <div className="file-structure">
      <span>FILE STRUCTURE</span>
      <img
        className="file-structure-image"
        src={FileStructureImage}
        alt="file structure"
      />
      <Link className="link" to="/">
        Go back
      </Link>
    </div>
  );
};

export default FileStructure;
