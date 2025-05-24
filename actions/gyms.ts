import { baseURL } from "@/lib/utils";
import { TFetchParams, TPaginationResponse } from "@/types";

export async function getGyms<T>({
  page = 1,
  limit = 12,
  service,
  location,
  search,
}: TFetchParams = {}): Promise<TPaginationResponse<T>> {
  try {
    const params = new URLSearchParams({
      page: page.toString(),
      limit: limit.toString(),
    });

    if (service) params.append("service", service);
    if (location) params.append("location", location);
    if (search) params.append("location", search);

    const res = await fetch(`${baseURL}/user/gyms?${params.toString()}`, {
      cache: "force-cache",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch gyms");
    }

    return res.json();
  } catch (error) {
    console.error("Error fetching gyms:", error);
    throw error;
  }
}
