"use client";
import { cn } from "@/lib/utils";
import type { TTrainer } from "@/types";
import { usePathname } from "next/navigation";
import { getTrainers } from "@/actions/trainers";
import { PageHeader } from "./page-header";
import { PaginationComponent } from "./pagination-component";
import { TrainerItem } from "./trainerItem";
import { usePaginatedData } from "@/hooks/usePaginatedData";

const pageURL: string = "/trainers";

interface IProps {
  showAll?: boolean;
  trainer?: TTrainer;
}

export const Trainers = ({ showAll = false }: IProps) => {
  const pathname = usePathname();

  const {
    dataList,
    totalPages,
    currentPage,
    handlePageChange,
    handleFilterChange,
  } = usePaginatedData<TTrainer>("/trainers", getTrainers);

  return (
    <>
      {pathname === pageURL && (
        <PageHeader
          header="TRAINERS AND COACHES"
          onFilterChange={handleFilterChange}
        />
      )}
      <ul className="grid grid-cols-auto-fit-four gap-x-[89px] gap-y-8 sm:gap-y-[100px]">
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
