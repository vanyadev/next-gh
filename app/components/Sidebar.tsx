"use client";

import React, { useRef, useState } from "react";
import { FiBook } from "react-icons/fi";
import { BsCodeSlash } from "react-icons/bs";
import useSlider from "../hooks/useSlider";
import { VscIssues } from "react-icons/vsc";
import { AiOutlinePullRequest } from "react-icons/ai";
import { getCircleColor } from "../helpers/getCircleColor";
import Link from "next/link";
import { linksArr, topLanguages } from "../data";

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const ulRef = useRef<HTMLUListElement>(null);
  const handleChangeTab = (value: number) => {
    setActiveTab(value);
  };

  const sliderInfo = useSlider({
    ref: ulRef,
    tabIndex: activeTab,
  });

  const isTabActive = (tabIndex: number) => {
    return tabIndex === activeTab;
  };

  return (
    <div className="hidden md:block max-h-screen sticky top-0 w-[380px] overflow-y-auto px-3 py-3 border-r">
      <div className="text-md font-semibold mb-8">Filter by</div>
      <ul className="relative" ref={ulRef}>
        {linksArr.map((link, index) => (
          <li
            key={index}
            className="mb-2"
            onClick={() => handleChangeTab(index)}
          >
            <Link
              href="#"
              className={`flex items-center px-2 py-1 ml-2 rounded-md hover:bg-gray-200 transition-colors duration-200 ${
                isTabActive(index) ? "bg-gray-200" : ""
              }`}
            >
              {React.createElement(link.icon, { className: "mr-2" })}
              {link.label}
              <span className="ml-auto text-xs px-2 py-1 rounded-lg bg-[#eaeef2] font-semibold">
                {link.num}
              </span>
            </Link>
          </li>
        ))}
        <div
          className="absolute left-0 top-0 w-1 rounded-lg bg-[#0969da] transition-all duration-300"
          style={{
            transform: `translateY(${sliderInfo.top}px)`,
            height: `${sliderInfo.height}px`,
          }}
        ></div>
      </ul>
      <div className="pt-4 border-t">
        <h4 className="text-xs text-[rgb(101, 109, 118)] font-semibold ml-2 px-2 py-2">
          Languages
        </h4>
        <ul>
          {topLanguages.map((lang, index) => (
            <li key={index} className="mb-2">
              <Link
                href="#"
                className="flex items-center px-2 py-1 ml-2 rounded-md hover:bg-gray-200 transition-colors duration-200"
              >
                <span
                  className={`w-2 h-2 mr-2 inline-block rounded-full ${getCircleColor(
                    lang.name
                  )}`}
                ></span>{" "}
                {lang.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
