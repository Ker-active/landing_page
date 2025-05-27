import { baseURL } from "@/lib/utils";

interface IServiceResponse {
  success: boolean;
  data: IService[];
  message: string;
}

export interface IService {
  _id: string;
  ServiceName: string;
  __v: number;
}

export async function getServicesList(): Promise<IServiceResponse> {
  try {
    const res = await fetch(`${baseURL}/services`, {
      cache: "force-cache",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch services");
    }

    return res.json();
  } catch (error) {
    console.error("Error fetching services:", error);
    throw error;
  }
}

export async function getLocationList(): Promise<IServiceResponse> {
  try {
    const res = await fetch(`${baseURL}/location`, {
      cache: "force-cache",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch location");
    }

    return res.json();
  } catch (error) {
    console.error("Error fetching location:", error);
    throw error;
  }
}
