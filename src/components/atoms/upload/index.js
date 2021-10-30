import React from "react";
import { LoginBg } from "../../../assets";
import "./Upload.scss";

const Upload = () => {
  return (
    <div className="upload">
      <img className="preview" src={LoginBg} alt="preview" />
      <input type="file" />
    </div>
  );
};

export default Upload;
