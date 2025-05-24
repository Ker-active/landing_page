"use client"

import React from 'react';

export const TrainerSkeletonLoader = () => {
  return (
    <div className="flex justify-center gap-8 p-8">
      {[1, 2, 3, 4].map((index) => (
        <div key={index} className="flex flex-col items-center space-y-4">
          {/* Circle Avatar */}
          <div className="relative w-32 h-32 rounded-full border-2 border-teal-500 overflow-hidden">
            <div className="absolute inset-0 bg-gray-200 animate-pulse">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-300/70 to-transparent shimmer"></div>
            </div>
          </div>

          {/* Name */}
          <div className="h-4 w-32 bg-gray-200 rounded animate-pulse">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-300/70 to-transparent shimmer"></div>
          </div>

          {/* Description */}
          <div className="h-3 w-40 bg-gray-200 rounded animate-pulse">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-300/70 to-transparent shimmer"></div>
          </div>

          {/* View Profile Link */}
          <div className="h-3 w-24 bg-gray-200 rounded animate-pulse">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-300/70 to-transparent shimmer"></div>
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

