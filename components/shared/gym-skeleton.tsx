"use client";

import React, { FC } from "react";
import clsx from "clsx";

interface GymSkeletonLoaderProps {
  showAll: boolean;
}

export const GymSkeletonLoader: FC<GymSkeletonLoaderProps> = ({ showAll }) => {
  const arrayLength = Array.from({ length: showAll ? 12 : 6 });

  return (
    <div
      className={clsx(
        "grid gap-8 p-4",
        showAll ? "grid-cols-auto-fit-gym-four" : "grid-cols-auto-fit-three"
      )}
    >
      {arrayLength.map((_, index) => (
        <div
          key={index}
          className="bg-gray-200 animate-pulse w-full max-w-[387px] px-5 py-3 flex items-end overflow-hidden rounded-[30px] h-[240px] relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-300/70 to-transparent shimmer"></div>

          <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
            <div className="space-y-2">
              <div className="h-4 w-24 bg-gray-300 rounded"></div>
              <div className="h-3 w-20 bg-gray-300 rounded"></div>
            </div>
            <div className="flex items-center space-x-1">
              <div className="h-4 w-4 bg-gray-300 rounded"></div>
              <div className="h-3 w-8 bg-gray-300 rounded"></div>
            </div>
          </div>
        </div>
      ))}

      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </div>
  );
};

export default GymSkeletonLoader;
