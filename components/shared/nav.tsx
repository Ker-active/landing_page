"use client";
import { Columns3 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Dispatch, SetStateAction, useState } from "react";

const lines = [
  {
    href: "/",
    label: "HOME",
  },
  {
    href: "/trainers",
    label: "TRAINERS",
  },
  {
    href: "/gym",
    label: "GYM",
  },
  {
    href: "/contact",
    label: "CONTACT",
  },
];

const NavItem = ({
  setIsPopOverOpen,
}: {
  setIsPopOverOpen?: Dispatch<SetStateAction<boolean>>;
}) => (
  <div className='flex flex-col px-4 sm:px-0 py-4 sm:py-0 sm:flex-row gap-[11px]'>
    <ul className='flex-col text-off-white sm:flex-row sm:bg-[#EBE8E021] rounded-[4px] flex font-bricolage gap-[11px] sm:gap-6 font-semibold text-[12px] sm:px-12 sm:py-5'>
      {lines.map(({ href, label }) => (
        <li key={`${href}${label}`}>
          <Link
            onClick={() => setIsPopOverOpen?.(false)}
            className='w-full'
            href={href}
          >
            {label}
          </Link>
        </li>
      ))}
    </ul>
    <button className='rounded-[4px] py-2 sm:py-0 text-[12px] font-bricolage font-semibold bg-[#f5f5f5] text-green  sm:px-[25px] items-center justify-center'>
      LOGIN
    </button>
  </div>
);

export const Nav = () => {
  const [isPopOverOpen, setIsPopOverOpen] = useState(false);
  return (
    <nav className='flex max-w-screen-xl mx-auto px-6 py-4  justify-between items-center'>
      <Image src={"/logo.svg"} width={60} height={60} alt='Ker Active Logo' />
      <div className='hidden sm:flex'>
        <NavItem />
      </div>
      <Popover open={isPopOverOpen}>
        <PopoverTrigger asChild>
          <button
            onClick={() => setIsPopOverOpen(!isPopOverOpen)}
            aria-label='Open Mobile Nav'
            className='bg-[#EBE8E021] p-2 rounded-[4px] flex sm:hidden'
          >
            <Columns3 color='white' />
          </button>
        </PopoverTrigger>
        <PopoverContent className='bg-transparent right-4 relative  w-full p-0'>
          <NavItem setIsPopOverOpen={setIsPopOverOpen} />
        </PopoverContent>
      </Popover>
    </nav>
  );
};
