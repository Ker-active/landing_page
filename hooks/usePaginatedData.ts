"use client";
import { useState, useCallback, useEffect } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { TPaginationResponse } from "@/types";

type FetchDataFunction<T> = (params: {
  page: number;
  service?: string;
  location?: string;
  search?: string;
}) => Promise<TPaginationResponse<T>>;

function useSafeSearchParams() {
  const searchParams = useSearchParams();

  return {
    page: searchParams?.get("page") || "1",
    service: searchParams?.get("service") || "",
    location: searchParams?.get("location") || "",
    search: searchParams?.get("search") || "",
  };
}

export function usePaginatedData<T>(
  pageURL: string,
  fetchDataFunction: FetchDataFunction<T>
) {
  const pathname = usePathname();
  const router = useRouter();
  const params = useSafeSearchParams();

  const currentPageFromURL =
    pathname === pageURL ? Number(params.page) || 1 : 1;

  const [mainData, setMainData] = useState<TPaginationResponse<T> | null>(null);
  const [currentPage, setCurrentPage] = useState(currentPageFromURL);
  const [filters, setFilters] = useState({
    service: params.service || "",
    location: params.location || "",
    search: params.search || "",
  });

  const [isLoading, setIsLoading] = useState(true);
  const [isFetching, setIsFetching] = useState(false);

  const fetchServerData = useCallback(async () => {
    setIsFetching(true);

    try {
      const data = await fetchDataFunction({
        page: currentPage,
        ...filters,
      });
      console.log(data);

      setMainData(data);
    } catch (error) {
      console.error("Failed to fetch server data:", error);
    } finally {
      setIsLoading(false);
      setIsFetching(false);
    }
  }, [currentPage, filters, fetchDataFunction]);

  useEffect(() => {
    fetchServerData();
  }, [fetchServerData]);

  const dataList: T[] = mainData?.data || [];
  const totalPages = mainData?.totalPages || 0;

  useEffect(() => {
    if (pathname === pageURL) {
      const queryParams: Record<string, string> = {
        page: currentPage.toString(),
      };

      if (filters.service) queryParams.service = filters.service;
      if (filters.location) queryParams.location = filters.location;
      if (filters.search) queryParams.search = filters.search;

      const queryString = new URLSearchParams(queryParams).toString();
      router.push(`${pathname}?${queryString}`);
    }
  }, [currentPage, filters, pathname, router, pageURL, totalPages]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    setIsFetching(true);
  };

  const handleFilterChange = (newFilters: {
    service?: string;
    location?: string;
    search?: string;
  }) => {
    setFilters((prevFilters) => ({ ...prevFilters, ...newFilters }));
    setCurrentPage(1);
    setIsFetching(true);
  };

  return {
    dataList,
    totalPages,
    currentPage,
    handlePageChange,
    handleFilterChange,
    isLoading,
    isFetching,
  };
}
