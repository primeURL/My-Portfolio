import React from "react";

const SectionTitle = ({ text }) => {
  return (
    <div className="border-b border-gray-300 pb-3 ">
      <h1 className="text-3xl font-medium tracking-wider capitalize">{text}</h1>
    </div>
  );
};

export default SectionTitle;
