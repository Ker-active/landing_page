"use client";
import React, { FC } from "react";
import Image from "next/image";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

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
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-center gap-6 py-3 px-4 rounded-lg">
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          aria-label="Previous page"
          className={`p-2 rounded-full transition-transform duration-300 ${
            currentPage === 1
              ? "opacity-50 cursor-not-allowed"
              : "hover:scale-110"
          }`}
        >
          <Image
            width={32}
            height={32}
            alt="Arrow Left"
            src={"/ButtonLeft.svg"}
          />
        </button>

        <div className="flex gap-2">
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => onPageChange(index + 1)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentPage === index + 1
                  ? "bg-[#2D2C2A] scale-125"
                  : "bg-gray-500 hover:bg-[#2D2C2A] hover:scale-125"
              }`}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          aria-label="Next page"
          className={`p-2 rounded-full transition-transform duration-300 ${
            currentPage === totalPages
              ? "opacity-50 cursor-not-allowed"
              : "hover:scale-110"
          }`}
        >
          <Image
            width={32}
            height={32}
            alt="Arrow Right"
            src={"/ButtonRight.svg"}
          />
        </button>
      </div>
    </div>
  );
};

export default PaginationComponent;