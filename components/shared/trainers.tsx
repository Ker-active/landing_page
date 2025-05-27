"use client";
import { cn } from "@/lib/utils";
import type { TTrainer } from "@/types";
import { usePathname } from "next/navigation";
import { getTrainers } from "@/actions/trainers";
import { PageHeader } from "./page-header";
import { PaginationComponent } from "./pagination-component";
import { TrainerItem } from "./trainerItem";
import { usePaginatedData } from "@/hooks/usePaginatedData";
import { useCallback } from "react";

const pageURL: string = "/trainers";

interface IProps {
  showAll?: boolean;
  trainer?: TTrainer;
}

export const Trainers = ({ showAll = false }: IProps) => {
  const pathname = usePathname();

  const stableGetTrainers = useCallback(getTrainers, []);

  const {
    dataList,
    totalPages,
    currentPage,
    handlePageChange,
    handleFilterChange,
    isLoading,
    isFetching,
  } = usePaginatedData<TTrainer>("/trainers", stableGetTrainers);
  return (
    <>
      {pathname === pageURL && (
        <PageHeader
          header="TRAINERS AND COACHES"
          onFilterChange={handleFilterChange}
        />
      )}
      <ul className="grid grid-cols-auto-fit-four gap-x-[89px] gap-y-8 sm:gap-y-[100px]">
        {/* {(isLoading || isFetching) && (
          <div className="absolute inset-0 bg-white/50 flex items-center justify-center z-10">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
          </div>
        )} */}

        {dataList.map((trainer, index) => {
          if (!showAll && index >= 4) return null;
          return (
            <TrainerItem
              trainer={trainer}
              showAll={showAll}
              className={cn(showAll && "h-[181px]")}
              key={index}
            />
          );
        })}
      </ul>
      {pathname === pageURL && totalPages > 1 && (
        <PaginationComponent
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      )}
    </>
  );
};
