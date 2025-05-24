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

      {isLoading && <GymSkeletonLoader showAll={showAll} />}

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

{
  /* {pagePathnameUrl && <GymSkeletonLoader showAll={showAll} />}

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
      </ul> */
}

// const pathname = usePathname();
// const router = useRouter();
// const params = useGetParams();

// const currentPageFromURL =
//   pathname === pageURL ? Number(params.page) || 1 : 1;

// const [mainData, setMainData] = useState<TPaginationResponse | null>(null);
// const [currentPage, setCurrentPage] = useState(currentPageFromURL);
// const [filters, setFilters] = useState({
//   service: params.service || "",
//   location: params.location || "",
//   search: params.search || "",
// });

// const fetchSeverData = useCallback(async () => {
//   try {
//     const data = await getGyms({
//       page: currentPage,
//       ...filters,
//     });
//     setMainData(data);
//   } catch (error) {
//     console.error("Failed to fetch server data:", error);
//   }
// }, [currentPage, filters]);

// useEffect(() => {
//   fetchSeverData();
// }, [fetchSeverData]);

// const DataList: TGyms[] = mainData?.data || [];
// const totalPages = mainData?.totalPages || 0;

// useEffect(() => {
//   if (pathname === pageURL) {
//     const queryParams: Record<string, string> = {
//       page: currentPage.toString(),
//     };

//     if (filters.service) queryParams.service = filters.service;
//     if (filters.location) queryParams.location = filters.location;
//     if (filters.search) queryParams.search = filters.search;

//     const queryString = new URLSearchParams(queryParams).toString();
//     router.push(`${pathname}?${queryString}`);
//   }
// }, [currentPage, filters, pathname, router, totalPages]);

// const handlePageChange = (page: number) => {
//   setCurrentPage(page);
// };

// const handleFilterChange = (newFilters: {
//   service?: string;
//   location?: string;
//   search?: string;
// }) => {
//   setFilters((prevFilters) => ({ ...prevFilters, ...newFilters }));
//   setCurrentPage(1);
// };
