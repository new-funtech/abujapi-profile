import {
  ComplaintFormData,
  ApiResponse,
  BujpPaginatedResponse,
} from "../types/interface";

/**
 * Submit a complaint
 * @param data - complaint form data
 */
export async function submitComplaint(
  data: ComplaintFormData
): Promise<ApiResponse> {
  const formData = new FormData();

  for (const [key, value] of Object.entries(data)) {
    if (key === "evidence_document" && Array.isArray(value)) {
      value.forEach((file) => {
        formData.append("evidence_document[]", file);
      });
    } else if (typeof value === "string") {
      formData.append(key, value);
    }
  }

  const apiUrl = "https://api.gada86.id/api/complaints";
  // const apiUrl = "http://127.0.0.1:8000/api/complaints"; // Local testing

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formData,
    });

    const result: ApiResponse = await response.json();

    if (!response.ok) {
      const errorMessage =
        result.errors?.evidence_document?.join(", ") ||
        result.message ||
        "Failed to submit complaint. Please try again.";
      throw new Error(errorMessage);
    }

    return result;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message || "Error submitting complaint.");
    }
    throw new Error("Unexpected error submitting complaint.");
  }
}

/**
 * Fetch paginated BUJP data
 * @param page - page number (default: 1)
 * @param perPage - items per page (default: 10)
 * @param search - search keyword (optional)
 */
export async function fetchBujps(
  page: number = 1,
  perPage: number = 10,
  search: string = ""
): Promise<BujpPaginatedResponse> {
  const searchParam = search ? `&search=${encodeURIComponent(search)}` : "";
  // const apiUrl = `http://127.0.0.1:8000/api/bujps?page=${page}&per_page=${perPage}${searchParam}`;
  const apiUrl = `https://api.gada86.id/api/bujps?page=${page}&per_page=${perPage}${searchParam}`;

  try {
    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(
        `Failed to fetch BUJP data: ${response.status} ${response.statusText}`
      );
    }

    const result = await response.json();
    return result.data; // Extract the 'data' object from the response
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message || "Error fetching BUJP data.");
    }
    throw new Error("Unexpected error fetching BUJP data.");
  }
}
