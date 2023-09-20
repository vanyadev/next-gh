"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { BsSearch, BsSlashSquare } from "react-icons/bs";
const Search = () => {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    router.push(`/?q=${query}`);
    setQuery("");
  };
  return (
    <div className="relative md:ml-4 flex-1">
      <button>
        <BsSearch
          className="absolute left-2 top-2 text-[#57606a] cursor-pointer"
          onClick={handleSearch}
        />
      </button>
      <input
        type="text"
        placeholder="Search or jump to..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSearch();
          }
        }}
        className="outline-none bg-transparent border border-[#57606a] rounded-md h-8 px-8 w-full text-sm focus:border-[#ffffff] transition-colors duration-200"
      />
      <button>
        <BsSlashSquare className="absolute right-2 top-2 text-[#57606a]" />
      </button>
    </div>
  );
};

export default Search;
