import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import type { TTrainer } from "@/types";

import { getInitials } from "@/lib/utils";

interface IProps {
  className?: any;
  showAll?: boolean;
  trainer: TTrainer;
}

export const TrainerItem = ({ className, showAll, trainer }: IProps) => {
  return (
    <li key={trainer._id} className="flex items-center flex-col">
      <div className="w-full max-w-[250px] border-[7px] overflow-hidden border-green rounded-full h-[250px] relative">
        {trainer.media.length > 0 ? (
          <Image
            fill
            src={trainer.media[0]}
            alt="Trainers"
            className="object-cover"
          />
        ) : (
          <span className="text-5xl font-semibold text-black flex items-center justify-center w-full h-full">
            {getInitials(trainer.fullname)}
          </span>
        )}
      </div>
      <p className="text-[#344054] mt-[30px] sm:mt-[40px] leading-[24px] font-inter font-semibold text-2xl">
        {trainer.fullname}
      </p>
      <p className="text-[#667085] leading-[24px] font-inter text-[19px] text-center py-3">
        {trainer.services?.slice(0, 3).join(", ") || ""}
        {/* Strength training, Cardio. */}
      </p>
      <Link
        className="underline text-base text-orange-950"
        // href={`/trainers/${trainer._id}`}
        href="/"
      >
        View Profile
      </Link>
    </li>
  );
};
