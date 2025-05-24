"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { useState } from "react";

const buttonClass =
  "w-[84px] h-[37px] bg-[#2D2C2A] border-white border text-off-white font-bricolage font-semibold text-[12px] rounded-full";

interface PageHeaderProps {
  header: string;
  onFilterChange: (filters: {
    service?: string;
    location?: string;
    search?: string;
  }) => void;
}

export const PageHeader = ({ header, onFilterChange }: PageHeaderProps) => {
  const [service, setService] = useState("");
  const [location, setLocation] = useState("");
  const [search, setSearch] = useState("");

  const handleFilterChange = () => {
    onFilterChange({ service, location, search });
  };

  return (
    <header>
      <h1 className="font-anton mb-[30px] sm:mb-0 leading-[60px] text-[#2D2C2A] sm:leading-[140px] text-[56px]">
        {header}
      </h1>
      <div className="flex flex-col gap-4 sm:flex-row items-start sm:items-center justify-between w-full">
        <div className="flex flex-row gap-[14px] items-center">
          <button className={buttonClass} onClick={handleFilterChange}>
            Filters
          </button>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <Select onValueChange={(value) => setService(value)} value={service}>
            <SelectTrigger
              className={cn(buttonClass, "w-auto gap-1 bg-[#323232]")}
            >
              <SelectValue placeholder="Service" />
            </SelectTrigger>
            <SelectContent className="bg-[#2D2C2A] text-off-white font-bricolage">
              <SelectGroup>
                <SelectLabel className="text-[12px]">Service</SelectLabel>
                <SelectItem value="yoga">Yoga</SelectItem>
                <SelectItem value="gym">Gym</SelectItem>
                <SelectItem value="crossfit">CrossFit</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Select
            onValueChange={(value) => setLocation(value)}
            value={location}
          >
            <SelectTrigger
              className={cn(buttonClass, "w-auto gap-1 bg-[#323232]")}
            >
              <SelectValue placeholder="Location" />
            </SelectTrigger>
            <SelectContent className="bg-[#2D2C2A] text-off-white font-bricolage">
              <SelectGroup>
                <SelectLabel className="text-[12px]">Location</SelectLabel>
                <SelectItem value="new-york">New York</SelectItem>
                <SelectItem value="los-angeles">Los Angeles</SelectItem>
                <SelectItem value="chicago">Chicago</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <input
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-4 w-full max-w-[300px] bg-[#FAFAFA] border-0 focus:outline-black rounded-[10px] py-1"
          />
        </div>
      </div>
    </header>
  );
};
