import React from "react";

const PrimaryBtn = ({ text }) => {
  return (
    <button className="px-6 py-2 bg-primary font-medium text-lg rounded-3xl text-white transition-all shadow hover:brightness-[95%] hover:shadow-lg">
      {text}                                                          
    </button>
  );
};

export default PrimaryBtn;
