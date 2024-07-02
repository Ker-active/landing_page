"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useState } from "react";

export const ScrollToTop = () => {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1000) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      className={cn(
        "h-[136px] transition-all duration-100 relative",
        showScrollToTop ? "opacity-100" : "opacity-0"
      )}
    >
      <button
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        className='font-bricolage flex flex-row fixed z-30 bottom-[70px] right-6 items-center gap-2 text-sm text-white'
      >
        TO TOP
        <Image
          src='/arrow-up.svg'
          width={40}
          height={40}
          alt='Scroll Up Icon'
        />
      </button>
    </section>
  );
};
