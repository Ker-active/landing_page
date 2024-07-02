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

const buttonClass =
  "w-[84px] h-[37px] bg-[#2D2C2A] border-white border text-off-white font-bricolage font-semibold text-[12px] rounded-full";

interface PageHeaderProps {
  header: string;
}

export const PageHeader = ({ header }: PageHeaderProps) => {
  return (
    <header>
      <h1 className='font-anton mb-[30px]  sm:mb-0 leading-[60px] text-[#2D2C2A] sm:leading-[140px] text-[56px]'>
        {header}
      </h1>
      <div className='flex flex-col gap-4 sm:flex-row items-start sm:items-center justify-between w-full'>
        <div className='flex flex-row gap-[14px] items-center'>
          <button className={buttonClass}>Filters</button>
          <Select>
            <SelectTrigger
              className={cn(buttonClass, "w-auto gap-1 bg-[#323232]")}
            >
              <SelectValue placeholder='Service' />
            </SelectTrigger>
            <SelectContent className='bg-[#2D2C2A] text-off-white font-bricolage'>
              <SelectGroup>
                <SelectLabel className='text-[12px]'>Service</SelectLabel>
                <SelectItem value='apple'>Apple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger
              className={cn(buttonClass, "w-auto gap-1 bg-[#323232]")}
            >
              <SelectValue placeholder='Location' />
            </SelectTrigger>
            <SelectContent className='bg-[#2D2C2A] text-off-white font-bricolage'>
              <SelectGroup>
                <SelectLabel className='text-[12px]'>Location</SelectLabel>
                <SelectItem value='apple'>Apple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <input
          placeholder='Search'
          className='px-4 w-full max-w-[300px] bg-[#FAFAFA] border-0 focus:outline-black rounded-[10px] py-1'
        />
      </div>
    </header>
  );
};
