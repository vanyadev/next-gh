"use client";

import React from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";

interface IProps {
  total: number;
}

const Pagination = ({ total }: IProps) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const currentPage = +(searchParams.get("page") ?? 1);
  const maxPage = Math.ceil(total / 10);

  const updatePage = (newPage: number) => {
    const newSearchParams = new URLSearchParams(searchParams.toString());
    newSearchParams.set("page", newPage.toString());
    router.replace(`${pathname}?${newSearchParams.toString()}`);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      updatePage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < maxPage) {
      updatePage(currentPage + 1);
    }
  };

  return (
    <div className="flex justify-center gap-3 mt-5">
      <button
        onClick={handlePrevPage}
        disabled={currentPage === 1}
        className="h-12 w-12 bg-blue-500 rounded-lg text-white flex justify-center items-center hover:bg-blue-400 disabled:bg-gray-500 disabled:hover:bg-gray-300 transition-colors duration-200"
      >
        <MdOutlineArrowBackIosNew />
      </button>
      <button
        onClick={handleNextPage}
        disabled={currentPage === maxPage}
        className="h-12 w-12 rounded-lg bg-blue-500 text-white flex justify-center items-center hover:bg-blue-400 disabled:bg-gray-500 disabled:hover:bg-gray-300 transition-colors duration-200"
      >
        <MdOutlineArrowForwardIos />
      </button>
    </div>
  );
};

export default Pagination;
