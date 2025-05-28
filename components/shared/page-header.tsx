"use client";
import { IService, getServicesList, getLocationList } from "@/actions/services";
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
import { useEffect, useState } from "react";

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
  const [services, setServices] = useState<IService[]>([]);
  const [locations, setLocations] = useState<IService[]>([]);

  const [service, setService] = useState("");
  const [location, setLocation] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await getServicesList();
        setServices(res.data);
      } catch (error) {
        console.error("Failed to fetch services:", error);
      }
    };

    fetchServices();
  }, []);

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const res = await getLocationList();
        setLocations(res.data);
      } catch (error) {
        console.error("Failed to fetch locations:", error);
      }
    };

    fetchLocations();
  }, []);

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

          {(service || location || search) && (
            <button
              className={cn(buttonClass, "bg-[#4A4A4A]")}
              onClick={() => {
                setService("");
                setLocation("");
                setSearch("");
                onFilterChange({ service: "", location: "", search: "" });
              }}
            >
              Reset
            </button>
          )}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <Select onValueChange={setService} value={service}>
            <SelectTrigger
              className={cn(buttonClass, "w-auto gap-1 bg-[#323232]")}
            >
              <SelectValue placeholder="Service" />
            </SelectTrigger>
            <SelectContent className="bg-[#2D2C2A] text-off-white font-bricolage">
              <SelectGroup>
                <SelectLabel className="text-[12px]">Service</SelectLabel>
                {services.map((s) => (
                  <SelectItem key={s._id} value={s.ServiceName}>
                    {s.ServiceName}
                  </SelectItem>
                ))}
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
                {locations.map((loc) => (
                  <SelectItem key={loc._id} value={loc.ServiceName}>
                    {loc.ServiceName}
                  </SelectItem>
                ))}
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
