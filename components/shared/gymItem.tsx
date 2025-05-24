import { cn } from "@/lib/utils";
import { TGyms } from "@/types";
import { Star } from "lucide-react";

interface IProps {
  className?: any;
  showAll?: boolean;
  gym?: TGyms;
}

export const GymItem = ({ className, showAll, gym }: IProps) => {
  return (
    <li
      style={{
        background: `linear-gradient(180deg, rgba(49, 49, 49, 0) 0%, #313131 100%), url(${gym?.media[0]})`,
      }}
      className={cn(
        "w-full max-w-[387px] px-5 py-3 flex items-end  overflow-hidden rounded-[30px] h-[240px] relative",
        className
      )}
      key={gym?._id}
    >
      <div className="flex w-full flex-row justify-between items-center">
        <div className="text-off-white">
          <p
            className={cn(
              "font-inter text-3xl font-bold",
              showAll && "text-[14.5px]"
            )}
          >
            {gym?.fullname}{" "}
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
          <Star fill="#FFE142" size={showAll ? 14 : 17} color="#FFE142" />
          <p className={cn("font-inter", showAll ? "text-[10px]" : "text-sm")}>
            4.5
          </p>
        </div>
      </div>
    </li>
  );
};
// background: `linear-gradient(180deg, rgba(49, 49, 49, 0) 0%, #313131 100%), url('/images/gyms.png')`,

// useEffect(() => {
//   if (pathname === pageURL && totalPages > 1) {
//     const newParams = { ...params, page: currentPage.toString() };
//     const queryString = new URLSearchParams(newParams).toString();
//     router.push(`${pathname}?${queryString}`);
//   }
// }, [currentPage, pathname, params, router, totalPages]);
