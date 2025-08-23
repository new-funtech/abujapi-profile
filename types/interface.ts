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

export interface Bujp {
  id: number;
  ex: string;
  tgl_daftar: string;
  tgl_expired: string;
  bujp: string;
  alamat: string;
  kelurahan: string;
  kecamatan: string;
  kabupaten_kota: string;
  status_bujp: string;
  status_pendaftaran: string;
  [key: string]: unknown;
}

export interface BujpPaginatedResponse {
  current_page: number;
  data: Bujp[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  next_page_url: string | null;
  prev_page_url: string | null;
  per_page: number;
  total: number;
  [key: string]: unknown;
}
