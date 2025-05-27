"use client"

import { useState, useEffect, useTransition } from "react"
import { useRouter, usePathname } from "next/navigation"
import { PageHeader } from "./page-header"
import { PaginationComponent } from "./pagination-component"
import type { TFetchParams, TPaginationResponse } from "@/types"

interface PaginatedListProps<T> {
  initialData: T[]
  totalPages: number
  currentPage: number
  pageURL: string
  onFilterChange: (filters: TFetchParams) => Promise<TPaginationResponse<T>>
  renderItem: (item: T, index: number) => React.ReactNode
  header: string
  showAll?: boolean
}

export function PaginatedList<T>({
  initialData,
  totalPages: initialTotalPages,
  currentPage: initialCurrentPage,
  pageURL,
  onFilterChange,
  renderItem,
  header,
  showAll = false,
}: PaginatedListProps<T>) {
  const [data, setData] = useState(initialData)
  const [currentPage, setCurrentPage] = useState(initialCurrentPage)
  const [totalPages, setTotalPages] = useState(initialTotalPages)
  const [isPending, startTransition] = useTransition()
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    if (pathname === pageURL) {
      const queryParams: Record<string, string> = {
        page: currentPage.toString(),
      }
      const queryString = new URLSearchParams(queryParams).toString()
      router.push(`${pathname}?${queryString}`)
    }
  }, [currentPage, pathname, router, pageURL])

  const handlePageChange = (page: number) => {
    startTransition(async () => {
      const newData = await onFilterChange({ page })
      setData(newData.data)
      setTotalPages(newData.totalPages)
      setCurrentPage(page)
    })
  }

  const handleFilterChange = (newFilters: TFetchParams) => {
    startTransition(async () => {
      const newData = await onFilterChange({ ...newFilters, page: 1 })
      setData(newData.data)
      setTotalPages(newData.totalPages)
      setCurrentPage(1)
    })
  }

  return (
    <>
      {pathname === pageURL && <PageHeader header={header} onFilterChange={handleFilterChange} />}
      <ul className="grid grid-cols-auto-fit-four gap-x-[89px] gap-y-8 sm:gap-y-[100px]">
        {data.map((item, index) => {
          if (!showAll && index >= 4) return null
          return renderItem(item, index)
        })}
      </ul>
      {isPending && <div>Loading...</div>}
      {pathname === pageURL && totalPages > 1 && (
        <PaginationComponent totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange} />
      )}
    </>
  )
}

