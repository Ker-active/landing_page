"use client";
import React, { FC } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const buttonClass =
  "bg-[#2D2C2A] border-white border text-off-white font-bricolage font-semibold text-[12px] rounded-full  text-white py-2 px-2 rounded-full flex items-center gap-1  disabled:cursor-not-allowed ";

export const PaginationComponent: FC<PaginationProps> = ({
  totalPages,
  currentPage,
  onPageChange,
}) => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className=" flex justify-between items-center">
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className={buttonClass}
      >
        <ArrowLeft fill="#FFF" size={17} color="#FFF" /> Previous
      </button>
      <span>
        Page {currentPage} of {totalPages}
      </span>
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className={buttonClass}
      >
        Next <ArrowRight fill="#FFF" size={17} color="#FFF" />
      </button>
    </div>
  );
};
