import { baseURL } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface IProps {
  showAll?: boolean;
}

async function getData() {
  const res = await fetch(`${baseURL}/user/trainers`);
  console.log("status check", res.status);
  if (!res.ok) {
    throw new Error("Failed to fetch trainers");
  }
  return res.json();
}

export const Trainers = async ({ showAll = false }: IProps) => {
  const data = await getData();
  console.log(data);
  return (
    <ul className='grid grid-cols-auto-fit-four gap-x-[89px] gap-y-8 sm:gap-y-[100px]'>
      {Array.from({ length: showAll ? 16 : 4 }).map((_, i) => (
        <li key={i} className='flex items-center flex-col'>
          <div className='w-full max-w-[250px] border-[7px] overflow-hidden border-green rounded-full h-[250px] relative'>
            <Image
              fill
              src='https://avatars.githubusercontent.com/u/42998943?v=4'
              alt='Trainers'
            />
          </div>
          <p className='text-[#344054] mt-[30px] sm:mt-[40px] leading-[24px] font-inter font-semibold  text-2xl'>
            David Mark
          </p>
          <p className='text-[#667085] leading-[24px] font-inter  text-[19px]'>
            Strength training, Cardio.
          </p>
          <Link className='underline text-base text-orange-950' href='/'>
            View Profile
          </Link>
        </li>
      ))}
    </ul>
  );
};
