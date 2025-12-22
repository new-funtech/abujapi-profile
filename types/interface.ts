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

export interface Documentation {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  published_at: string;
  status: string;
  created_by: number;
  deleted_at: string | null;
  created_at: string;
  updated_at: string;
}

export interface DocumentationPaginatedResponse {
  success: boolean;
  message: string;
  data: {
    current_page: number;
    data: Documentation[];
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    next_page_url: string | null;
    path: string;
    per_page: number;
    prev_page_url: string | null;
    to: number;
    total: number;
  };
}

export interface Bujp {
  id: number;
  no_kta?: string;
  tgl_daftar?: string;
  tgl_expired?: string;
  bujp: string;
  alamat?: string;
  kelurahan?: string;
  kecamatan?: string;
  kabupaten_kota?: string;
  provinsi?: string;
  kode_pos?: string;
  penanggung_jawab?: string;
  jabatan?: string;
  created_at?: string;
  updated_at?: string;
}


export interface BujpPaginatedResponse {
  success: boolean;
  message: string;
  data: {
    current_page: number;
    data: Bujp[];
    first_page_url?: string;
    from?: number;
    last_page?: number;
    last_page_url?: string;
    next_page_url?: string | null;
    path?: string;
    per_page?: number;
    prev_page_url?: string | null;
    to?: number;
    total?: number;
  };
}

export interface BujpPaginationData {
  current_page: number;
  data: Bujp[];
  first_page_url?: string;
  from?: number;
  last_page?: number;
  last_page_url?: string;
  next_page_url?: string | null;
  path?: string;
  per_page?: number;
  prev_page_url?: string | null;
  to?: number;
  total?: number;
}

export interface Author {
  id: number;
  name: string;
  email: string;
  avatar?: string | null;
}

export interface AuthorData {
  id: number;
  name: string;
  email: string;
  email_verified_at?: string | null;
  role?: string;
  deleted_at?: string | null;
  created_at?: string;
  updated_at?: string;
}

export interface NewsTag {
  id: string;
  name: string;
  slug: string;
}

export interface News {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  published_at: string;
  status: string;
  created_by: number;
  meta_title?: string;
  meta_description?: string;
  meta_keywords?: string;
  tags: string[];
  deleted_at?: string | null;
  created_at: string;
  updated_at: string;
  author_data: Author;
  formatted_tags: NewsTag[];
  author: AuthorData;
}

export interface NewsPaginatedResponse {
  success: boolean;
  message: string;
  data: {
    current_page: number;
    data: News[];
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    next_page_url: string | null;
    path: string;
    per_page: number;
    prev_page_url: string | null;
    to: number;
    total: number;
  };
}