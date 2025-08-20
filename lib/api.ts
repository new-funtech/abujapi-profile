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

export async function submitComplaint(
  data: ComplaintFormData
): Promise<ApiResponse> {
  const formDataToSend = new FormData();

  Object.entries(data).forEach(([key, value]) => {
    if (key === "evidence_document" && Array.isArray(value)) {
      value.forEach((file, index) => {
        formDataToSend.append("evidence_document[]", file);
        console.log(`Appending file ${index + 1}:`, {
          name: file.name,
          type: file.type,
          size: `${(file.size / 1024).toFixed(2)} KB`,
        });
      });
    } else if (typeof value === "string") {
      formDataToSend.append(key, value);
    }
  });

  console.log("FormData to be sent:", {
    fields: Object.fromEntries(formDataToSend),
    files: data.evidence_document.map((file, index) => ({
      index: index + 1,
      name: file.name,
      type: file.type,
      size: `${(file.size / 1024).toFixed(2)} KB`,
    })),
  });

  try {
    // const response = await fetch("http://127.0.0.1:8000/api/complaints", {
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

    console.log("Submission successful:", result);
    return result;
  } catch (error: unknown) {
    console.error("Error during submission:", error);
    if (error instanceof Error) {
      throw new Error(
        error.message || "Terjadi kesalahan saat mengirim pengaduan."
      );
    }
    throw new Error("Terjadi kesalahan tak terduga saat mengirim pengaduan.");
  }
}
