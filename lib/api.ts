export interface ComplaintFormData {
  reporter_name: string;
  reporter_company: string;
  reporter_phone: string;
  reporter_address: string;
  complaint_type: string;
  complaint_content: string;
  reported_personnel_name: string;
  location: string;
  related_company: string;
  evidence_document: File[];
}

export interface ApiResponse {
  message?: string;
  errors?: Record<string, string[]>;
  [key: string]: unknown; 
}

export async function submitComplaint(data: ComplaintFormData): Promise<ApiResponse> {
  const formDataToSend = new FormData();

  Object.entries(data).forEach(([key, value]) => {
    if (key === "evidence_document" && Array.isArray(value)) {
      value.forEach((file) => formDataToSend.append("evidence_document", file));
    } else if (typeof value === "string") {
      formDataToSend.append(key, value);
    }
  });

  try {
    const response = await fetch("https://api.gada86.id/api/complaints", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formDataToSend,
    });

    const result: ApiResponse = await response.json();

    if (!response.ok) {
      const errorMessage =
        result.errors?.evidence_document?.join(", ") ||
        result.message ||
        "Gagal mengirim pengaduan. Silakan coba lagi.";
      throw new Error(errorMessage);
    }

    return result;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message || "Terjadi kesalahan saat mengirim pengaduan.");
    }
    throw new Error("Terjadi kesalahan tak terduga saat mengirim pengaduan.");
  }
}
