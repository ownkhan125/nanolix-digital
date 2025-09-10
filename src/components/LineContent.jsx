import React from "react";

const LineContent = ({ text, classname }) => {
  return (
    <div class={`text-center ${classname}`}>
      <p class="line fs-14">{text}</p>
    </div>
  );
};

export default LineContent;
