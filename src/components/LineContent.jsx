import React from "react";

const LineContent = ({ text, classname }) => {
  return (
    <div className={`${classname}`}>
      <p className="line fs-14">{text}</p>
    </div>
  );
};

export default LineContent;
