import { cn } from "@/lib/utils";
import { Star } from "lucide-react";
import { HTMLAttributes } from "react";

interface IProps extends HTMLAttributes<HTMLUListElement> {
  showAll?: boolean;
}

const Gym = ({ className, showAll }: IProps) => {
  return (
    <li
      style={{
        background: `linear-gradient(180deg, rgba(49, 49, 49, 0) 0%, #313131 100%), url('/images/gyms.png')`,
      }}
      className={cn(
        "w-full max-w-[387px] px-5 py-3 flex items-end  overflow-hidden rounded-[30px] h-[240px] relative",
        className
      )}
      key={1}
    >
      <div className='flex w-full flex-row justify-between items-center'>
        <div className='text-off-white'>
          <p
            className={cn(
              "font-inter text-3xl font-bold",
              showAll && "text-[14.5px]"
            )}
          >
            Fitness Plus
          </p>
          <p className={cn(showAll ? "text-[10px]" : "text-sm")}>
            15 mins away
          </p>
        </div>
        <div
          style={{
            boxShadow: "0px 4.83px 29px 0px #00000033",
            background:
              "linear-gradient(142.59deg, rgba(217, 217, 217, 0.18) -18.46%, rgba(217, 217, 217, 0.23) 56.86%, rgba(217, 217, 217, 0) 122.24%)",
          }}
          className={cn(
            "w-[72.5px] flex flex-row gap-1 font-inter items-center justify-center text-sm text-off-white h-[31px] rounded-[24px]",
            showAll && "w-[54px] h-[23px]"
          )}
        >
          <Star fill='#FFE142' size={showAll ? 14 : 17} color='#FFE142' />
          <p className={cn("font-inter", showAll ? "text-[10px]" : "text-sm")}>
            4.5
          </p>
        </div>
      </div>
    </li>
  );
};

interface IProps {
  showAll?: boolean;
}

export const Gyms = ({ showAll = false }: IProps) => {
  return (
    <ul
      className={cn(
        "grid grid-cols-auto-fit-three gap-8",
        showAll && "grid-cols-auto-fit-gym-four"
      )}
    >
      {Array.from({ length: showAll ? 36 : 6 }).map((_, i) => (
        <Gym showAll={showAll} className={cn(showAll && "h-[181px]")} key={i} />
      ))}
    </ul>
  );
};
