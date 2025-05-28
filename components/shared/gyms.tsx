"use client";
import { cn } from "@/lib/utils";
import type { TGyms } from "@/types";
import { type HTMLAttributes } from "react";
import { getGyms } from "@/actions/gyms";
import { GymItem } from "./gymItem";
import { usePathname } from "next/navigation";
import { PageHeader } from "./page-header";
import { PaginationComponent } from "./pagination-component";
import { usePaginatedData } from "@/hooks/usePaginatedData";
import { GymSkeletonLoader } from "./gym-skeleton";

const pageURL: string = "/gym";
interface IProps extends HTMLAttributes<HTMLUListElement> {
  showAll?: boolean;
  gym?: TGyms;
}

export const Gyms = ({ showAll = false }: IProps) => {
  const pathname = usePathname();

  const {
    dataList,
    totalPages,
    currentPage,
    handlePageChange,
    handleFilterChange,
    isLoading,
  } = usePaginatedData<TGyms>("/gym", getGyms);

  const pagePathnameUrl = pathname === pageURL;
  return (
    <>
      {pagePathnameUrl && (
        <PageHeader
          header="Gyms AND STUDIOS"
          onFilterChange={handleFilterChange}
        />
      )}

      {/* {isLoading && <GymSkeletonLoader showAll={showAll} />} */}

      {!isLoading && (
        <ul
          className={cn(
            "grid grid-cols-auto-fit-three gap-8",
            showAll && "grid-cols-auto-fit-gym-four"
          )}
        >
          {dataList.map((gym, index) => {
            if (!showAll && index >= 6) return null;
            return (
              <GymItem
                gym={gym}
                showAll={showAll}
                className={cn(showAll && "h-[181px]")}
                key={index}
              />
            );
          })}
        </ul>
      )}

      {pagePathnameUrl && totalPages > 1 && (
        <PaginationComponent
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      )}
    </>
  );
};
