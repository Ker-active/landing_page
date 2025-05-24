"use client";
import { cn } from "@/lib/utils";
import type { TTrainer } from "@/types";
import { usePathname } from "next/navigation";
import { getTrainers } from "@/actions/trainers";
import { PageHeader } from "./page-header";
import { PaginationComponent } from "./pagination-component";
import { TrainerItem } from "./trainerItem";
import { usePaginatedData } from "@/hooks/usePaginatedData";
import { TrainerSkeletonLoader } from "./trainer-skeleton";

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

      {/* <TrainerSkeletonLoader /> */}

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
//     const data = await getTrainers({
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

// const DataList: TTrainer[] = mainData?.data || [];
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
