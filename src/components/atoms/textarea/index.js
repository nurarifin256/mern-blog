import React from "react";
import "./Textarea.scss";

const TextArea = ({ ...rest }) => {
  return (
    <div>
      <textarea className="text-area" {...rest}></textarea>
    </div>
  );
};

export default TextArea;
