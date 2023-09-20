import React from "react";

const LanguageTag = ({ language }: { language: string }) => {
  return (
    <div
      className={`px-[10px] py-1 rounded-2xl bg-[#ddf4ff] hover:bg-[#0969da] text-[#0969da] font-medium  hover:text-white text-xs cursor-pointer transition-colors duration-200`}
    >
      {language}
    </div>
  );
};

export default LanguageTag;
