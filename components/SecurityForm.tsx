import { useDropzone } from "react-dropzone";
import { ChangeEvent } from "react";
import {
  FaTimes,
  FaPaperclip,
  FaUser,
  FaBuilding,
  FaMapMarkerAlt,
  FaFileAlt,
} from "react-icons/fa";

// Interfaces
interface FormData {
  complaint_content: string;
  reported_personnel_name: string;
  location: string;
  related_company: string;
  evidence_document: File[];
}

interface Errors {
  complaint_content?: string;
  reported_personnel_name?: string;
  location?: string;
  related_company?: string;
  evidence_document?: string;
}

interface SecurityFormProps {
  formData: FormData;
  handleChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleFileChange: (files: File[]) => void;
  handleRemoveFile: (index: number) => void;
  errors: Errors;
  complaintType: string;
}

export default function SecurityForm({
  formData,
  handleChange,
  handleFileChange,
  handleRemoveFile,
  errors,
  complaintType,
}: SecurityFormProps) {
  const isSecurityPersonnel = complaintType === "SECURITY_PERSONNEL";

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      "image/jpeg": [".jpg", ".jpeg"],
      "image/png": [".png"],
      "application/pdf": [".pdf"],
    },
    maxFiles: 5,
    onDrop: (acceptedFiles) => {
      console.log(
        "Selected files:",
        acceptedFiles.map((file) => ({
          name: file.name,
          type: file.type,
          size: `${(file.size / 1024).toFixed(2)} KB`,
        }))
      );
      handleFileChange(acceptedFiles);
    },
  });

  const RequiredStar = () => <span className="text-red-500 ml-1">*</span>;

  return (
    <div className="space-y-4">
      <div className="space-y-3">
        {/* Isi Pengaduan */}
        <div>
          <label
            htmlFor="complaint_content"
            className="font-medium text-gray-700 mb-1 flex items-center text-xs md:text-sm"
          >
            <FaFileAlt className="mr-2 text-green-600" />
            Isi Pengaduan <RequiredStar />
          </label>
          <textarea
            id="complaint_content"
            name="complaint_content"
            value={formData.complaint_content}
            onChange={handleChange}
            className="w-full p-2 md:p-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-gray-400 focus:border-gray-400 h-28 md:h-32 text-xs md:text-sm text-black"
            required
          />
          {errors.complaint_content && (
            <p className="text-red-500 text-xs mt-1">
              {errors.complaint_content}
            </p>
          )}
        </div>

        {/* Nama / Badan Usaha & Lokasi */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="reported_personnel_name"
              className="font-medium text-gray-700 mb-1 flex items-center text-xs md:text-sm"
            >
              <FaUser className="mr-2 text-green-600" />
              {isSecurityPersonnel
                ? "Nama Satuan Pengamanan"
                : "Nama Badan Usaha"}{" "}
              <RequiredStar />
            </label>
            <input
              id="reported_personnel_name"
              type="text"
              name="reported_personnel_name"
              value={formData.reported_personnel_name}
              onChange={handleChange}
              className="w-full p-2 md:p-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-gray-400 focus:border-gray-400 text-xs md:text-sm text-black"
              required
            />
            {errors.reported_personnel_name && (
              <p className="text-red-500 text-xs mt-1">
                {errors.reported_personnel_name}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="location"
              className="font-medium text-gray-700 mb-1 flex items-center text-xs md:text-sm"
            >
              <FaMapMarkerAlt className="mr-2 text-green-600" /> Lokasi{" "}
              <RequiredStar />
            </label>
            <input
              id="location"
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full p-2 md:p-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-gray-400 focus:border-gray-400 text-xs md:text-sm text-black"
              required
            />
            {errors.location && (
              <p className="text-red-500 text-xs mt-1">{errors.location}</p>
            )}
          </div>
        </div>

        {/* Badan Usaha */}
        <div>
          <label
            htmlFor="related_company"
            className="font-medium text-gray-700 mb-1 flex items-center text-xs md:text-sm"
          >
            <FaBuilding className="mr-2 text-green-600" /> Badan Usaha yang
            Bersangkutan Bekerja <RequiredStar />
          </label>
          <input
            id="related_company"
            type="text"
            name="related_company"
            value={formData.related_company}
            onChange={handleChange}
            className="w-full p-2 md:p-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-gray-400 focus:border-gray-400 text-xs md:text-sm text-black"
            required
          />
          {errors.related_company && (
            <p className="text-red-500 text-xs mt-1">
              {errors.related_company}
            </p>
          )}
        </div>

        {/* Upload Dokumen */}
        <div>
          <label className="font-medium text-gray-700 mb-1 flex items-center text-xs md:text-sm">
            <FaPaperclip className="mr-2 text-green-600" /> Upload Dokumen Bukti
            Aduan <RequiredStar />
          </label>
          <p className="text-xs md:text-sm text-gray-600 mb-2">
            Foto (JPG, JPEG, PNG) atau Dokumen (PDF), maksimum 5 file, total
            ukuran 5MB
          </p>
          <div
            {...getRootProps()}
            className={`border-dashed border-2 ${
              isDragActive ? "border-green-500 bg-green-50" : "border-gray-300"
            } p-3 md:p-4 rounded-lg text-center cursor-pointer hover:border-gray-400 transition-all duration-200`}
          >
            <input {...getInputProps()} />
            <p
              className={`text-xs md:text-sm flex items-center justify-center ${
                isDragActive ? "text-green-600 font-semibold" : "text-gray-600"
              }`}
            >
              <FaPaperclip className="mr-2" />
              {isDragActive
                ? "Lepaskan file di sini"
                : "Klik atau seret file ke sini"}
            </p>
          </div>

          {formData.evidence_document.length > 0 && (
            <ul className="mt-2 space-y-1">
              {formData.evidence_document.map((file, index) => (
                <li
                  key={index}
                  className="flex items-center justify-between text-xs md:text-sm text-gray-700 bg-gray-100 p-2 rounded"
                >
                  <span>{file.name}</span>
                  <button
                    aria-label="Hapus File"
                    type="button"
                    onClick={() => {
                      console.log(`Removing file: ${file.name}`);
                      handleRemoveFile(index);
                    }}
                    className="text-red-500 hover:text-red-700"
                  >
                    <FaTimes />
                  </button>
                </li>
              ))}
            </ul>
          )}

          {errors.evidence_document && (
            <p className="text-red-500 text-xs mt-1">
              {errors.evidence_document}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
