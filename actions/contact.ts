import { baseURL } from "@/lib/utils";

export interface ContactFormData {
  fullname: string;
  email: string;
  subject: string;
  message: string;
}

export async function sendContactMessage(
  data: ContactFormData
): Promise<{ success: boolean; message: string }> {
  try {
    const res = await fetch(`${baseURL}/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(err.message || "Failed to send contact message");
    }

    return res.json();
  } catch (error: any) {
    console.error("Contact request failed:", error);
    return {
      success: false,
      message: error.message || "Unknown error occurred",
    };
  }
}
