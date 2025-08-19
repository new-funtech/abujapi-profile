"use client";

import { useState } from "react";
import {
  FaTimes,
  FaArrowLeft,
  FaArrowRight,
  FaPaperclip,
  FaUser,
  FaBuilding,
  FaPhone,
  FaMapMarkerAlt,
  FaFileAlt,
} from "react-icons/fa";
import { useDropzone } from "react-dropzone";

interface ComplaintPageProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ComplaintPage({ isOpen, onClose }: ComplaintPageProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    reporter_name: "",
    reporter_company: "",
    reporter_phone: "",
    reporter_address: "",
    complaint_type: "",
    complaint_content: "",
    reported_personnel_name: "",
    location: "",
    related_company: "",
    evidence_document: [] as File[],
  });
  const [submissionStatus, setSubmissionStatus] = useState<string | null>(null);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const allowedFileTypes = [
    "image/jpeg",
    "image/jpg",
    "image/png",
    "application/pdf",
  ];
  const maxFiles = 5;
  const maxTotalSize = 5 * 1024 * 1024; // 5MB for total files

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;

    // Validasi nomor telepon: harus diawali 0 dan hanya angka
    if (name === "reporter_phone") {
      if (!/^\d*$/.test(value)) {
        setErrors((prev) => ({
          ...prev,
          reporter_phone: "Nomor telepon hanya boleh berisi angka.",
        }));
        return;
      }
      if (value && !value.startsWith("0")) {
        setErrors((prev) => ({
          ...prev,
          reporter_phone: "Nomor telepon harus diawali dengan 0.",
        }));
        return;
      }
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
    if (value) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleFileChange = (acceptedFiles: File[]) => {
    const filesArray = acceptedFiles.slice(
      0,
      maxFiles - formData.evidence_document.length
    );
    const invalidFiles = filesArray.filter(
      (file) => !allowedFileTypes.includes(file.type)
    );

    // Calculate total size of existing and new files
    const currentTotalSize = formData.evidence_document.reduce(
      (sum, file) => sum + file.size,
      0
    );
    const newFilesSize = filesArray.reduce((sum, file) => sum + file.size, 0);
    const totalSize = currentTotalSize + newFilesSize;

    if (invalidFiles.length > 0) {
      console.log(
        "Invalid files:",
        invalidFiles.map((f) => ({ name: f.name, type: f.type }))
      );
      setSubmissionStatus(
        "File tidak didukung. Hanya JPG, JPEG, PNG, atau PDF yang diizinkan."
      );
      return;
    }
    if (totalSize > maxTotalSize) {
      console.log(
        "Total file size exceeds limit:",
        totalSize,
        "bytes (max:",
        maxTotalSize,
        "bytes)"
      );
      setSubmissionStatus("Total ukuran file melebihi 5MB. Harap pilih ulang.");
      return;
    }
    if (formData.evidence_document.length + filesArray.length > maxFiles) {
      setSubmissionStatus(`Maksimum ${maxFiles} file diizinkan.`);
      return;
    }

    console.log(
      "Uploaded files:",
      filesArray.map((file) => ({
        name: file.name,
        type: file.type,
        size: file.size,
      }))
    );

    setFormData((prev) => ({
      ...prev,
      evidence_document: [...prev.evidence_document, ...filesArray],
    }));
    setErrors((prev) => ({ ...prev, evidence_document: "" }));
    setSubmissionStatus(null);
  };

  const handleRemoveFile = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      evidence_document: prev.evidence_document.filter((_, i) => i !== index),
    }));
    if (formData.evidence_document.length === 1) {
      setErrors((prev) => ({
        ...prev,
        evidence_document: "Dokumen bukti wajib diunggah.",
      }));
    }
  };

  const validateStep1 = () => {
    const newErrors: { [key: string]: string } = {};

    // Validasi Nama Pelapor (huruf, spasi, dan tanda baca dasar, min 2 karakter, max 100)
    if (!formData.reporter_name) {
      newErrors.reporter_name = "Nama Pelapor wajib diisi.";
    } else if (!/^[a-zA-Z\s.,'-]{2,100}$/.test(formData.reporter_name)) {
      newErrors.reporter_name =
        "Nama Pelapor hanya boleh berisi huruf, spasi, atau tanda baca dasar (2-100 karakter).";
    }

    // Validasi Nama Perusahaan (huruf, angka, spasi, dan tanda baca dasar, min 2 karakter, max 100)
    if (!formData.reporter_company) {
      newErrors.reporter_company = "Nama Perusahaan BUJP Pelapor wajib diisi.";
    } else if (!/^[a-zA-Z0-9\s.,'-]{2,100}$/.test(formData.reporter_company)) {
      newErrors.reporter_company =
        "Nama Perusahaan hanya boleh berisi huruf, angka, spasi, atau tanda baca dasar (2-100 karakter).";
    }

    // Validasi Nomor Telepon (harus diawali 0, hanya angka, 8-15 karakter)
    if (!formData.reporter_phone) {
      newErrors.reporter_phone = "No HP Pelapor wajib diisi.";
    } else if (!/^0\d{7,14}$/.test(formData.reporter_phone)) {
      newErrors.reporter_phone =
        "Nomor telepon harus diawali 0 dan berisi 8-15 angka.";
    }

    // Validasi Alamat (min 5 karakter, max 200)
    if (!formData.reporter_address) {
      newErrors.reporter_address = "Alamat Pelapor wajib diisi.";
    } else if (
      formData.reporter_address.length < 5 ||
      formData.reporter_address.length > 200
    ) {
      newErrors.reporter_address = "Alamat harus berisi 5-200 karakter.";
    }

    // Validasi Jenis Pengaduan
    if (!formData.complaint_type) {
      newErrors.complaint_type = "Jenis Pengaduan wajib dipilih.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors: { [key: string]: string } = {};
    if (
      formData.complaint_type === "SECURITY_PERSONNEL" ||
      formData.complaint_type === "SECURITY_COMPANY"
    ) {
      // Validasi Isi Pengaduan (min 10 karakter, max 1000)
      if (!formData.complaint_content) {
        newErrors.complaint_content = "Isi Pengaduan wajib diisi.";
      } else if (
        formData.complaint_content.length < 10 ||
        formData.complaint_content.length > 1000
      ) {
        newErrors.complaint_content =
          "Isi Pengaduan harus berisi 10-1000 karakter.";
      }

      // Validasi Nama Satuan Pengamanan atau Badan Usaha (huruf, spasi, tanda baca dasar, min 2, max 100)
      if (!formData.reported_personnel_name) {
        newErrors.reported_personnel_name =
          formData.complaint_type === "SECURITY_PERSONNEL"
            ? "Nama Satuan Pengamanan wajib diisi."
            : "Nama Badan Usaha wajib diisi.";
      } else if (
        !/^[a-zA-Z\s.,'-]{2,100}$/.test(formData.reported_personnel_name)
      ) {
        newErrors.reported_personnel_name =
          formData.complaint_type === "SECURITY_PERSONNEL"
            ? "Nama Satuan Pengamanan hanya boleh berisi huruf, spasi, atau tanda baca dasar (2-100 karakter)."
            : "Nama Badan Usaha hanya boleh berisi huruf, spasi, atau tanda baca dasar (2-100 karakter).";
      }

      // Validasi Lokasi (min 5 karakter, max 200)
      if (!formData.location) {
        newErrors.location = "Lokasi wajib diisi.";
      } else if (
        formData.location.length < 5 ||
        formData.location.length > 200
      ) {
        newErrors.location = "Lokasi harus berisi 5-200 karakter.";
      }

      // Validasi Badan Usaha (huruf, angka, spasi, tanda baca dasar, min 2, max 100)
      if (!formData.related_company) {
        newErrors.related_company =
          "Badan Usaha yang Bersangkutan Bekerja wajib diisi.";
      } else if (!/^[a-zA-Z0-9\s.,'-]{2,100}$/.test(formData.related_company)) {
        newErrors.related_company =
          "Badan Usaha hanya boleh berisi huruf, angka, spasi, atau tanda baca dasar (2-100 karakter).";
      }

      // Validasi Dokumen Bukti
      if (formData.evidence_document.length === 0) {
        newErrors.evidence_document = "Dokumen bukti wajib diunggah.";
      }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (step === 1) {
      if (validateStep1()) {
        setStep((prev) => prev + 1);
      }
    }
  };

  const prevStep = () => {
    setStep((prev) => prev - 1);
    setErrors({});
  };

  const handleSubmit = async () => {
    if (!validateStep2()) {
      setSubmissionStatus("Harap isi semua field wajib dan unggah dokumen.");
      return;
    }

    setSubmissionStatus("Mengirim pengaduan...");

    const formDataToSend = new FormData();
    formDataToSend.append("reporter_name", formData.reporter_name);
    formDataToSend.append("reporter_company", formData.reporter_company);
    formDataToSend.append("reporter_phone", formData.reporter_phone);
    formDataToSend.append("reporter_address", formData.reporter_address);
    formDataToSend.append("complaint_type", formData.complaint_type);
    formDataToSend.append("complaint_content", formData.complaint_content);
    formDataToSend.append(
      "reported_personnel_name",
      formData.reported_personnel_name
    );
    formDataToSend.append("location", formData.location);
    formDataToSend.append("related_company", formData.related_company);

    formData.evidence_document.forEach((file) => {
      formDataToSend.append("evidence_document", file);
    });

    try {
      const response = await fetch("https://api.gada86.id/api/complaints", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formDataToSend,
      });

      const result = await response.json();
      console.log("Response status:", response.status);
      console.log("Response body:", result);

      if (response.ok) {
        setSubmissionStatus("Pengaduan berhasil dikirim!");
        setTimeout(() => {
          setSubmissionStatus(null);
          onClose();
          setFormData({
            reporter_name: "",
            reporter_company: "",
            reporter_phone: "",
            reporter_address: "",
            complaint_type: "",
            complaint_content: "",
            reported_personnel_name: "",
            location: "",
            related_company: "",
            evidence_document: [],
          });
          setStep(1);
          setErrors({});
        }, 2000);
      } else {
        const errorMessage =
          result.errors?.evidence_document?.join(", ") ||
          result.message ||
          "Gagal mengirim pengaduan. Silakan coba lagi.";
        setSubmissionStatus(errorMessage);
      }
    } catch (error) {
      console.error("Fetch error:", error);
      setSubmissionStatus("Terjadi kesalahan saat mengirim pengaduan.");
    }
  };

  const complaintTypeText =
    formData.complaint_type === "SECURITY_PERSONNEL"
      ? "Satuan Pengamanan"
      : formData.complaint_type === "SECURITY_COMPANY"
        ? "Badan Usaha Jasa Pengamanan"
        : "Tidak Dipilih";

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-white/30 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-2xl overflow-y-auto max-h-[90vh] text-sm md:text-base">
        {/* ==================== HEADER ==================== */}
        <div className="p-2 md:p-3 border-b border-gray-200 relative flex items-center bg-gradient-to-r from-green-600 to-green-500">
          <h1 className="text-sm md:text-lg font-semibold text-white text-left ml-2 flex items-center">
            <FaFileAlt className="mr-2 text-white" /> Formulir Pengaduan
          </h1>
          <button
            onClick={onClose}
            className="absolute top-0 bottom-0 right-2 my-auto p-2 md:p-3 text-white hover:text-gray-200 text-base md:text-lg"
          >
            <FaTimes />
          </button>
        </div>

        {/* ==================== BODY ==================== */}
        <div className="p-4 md:p-6 space-y-4">
          {step === 1 ? (
            <div>
              <p className="text-gray-600 text-xs md:text-sm text-center">
                Isi formulir di bawah ini untuk mengajukan pengaduan.
              </p>
              <p className="text-gray-600 text-xs md:text-sm text-center">
                Semua data dijamin kerahasiaannya.
              </p>
            </div>
          ) : (
            <p className="text-gray-600 text-xs md:text-sm text-center">
              Jenis Pengaduan : {complaintTypeText}
            </p>
          )}
          <div className="w-full bg-gray-200 h-2 rounded-full">
            <div
              className="h-2 rounded-full bg-green-600 transition-all duration-300"
              style={{ width: step === 1 ? "50%" : "100%" }}
            ></div>
          </div>
          {submissionStatus && (
            <div className="text-center text-red-600 font-semibold text-xs md:text-sm">
              {submissionStatus}
            </div>
          )}

          {/* Step 1 */}
          {step === 1 && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block font-medium text-gray-700 mb-1 flex items-center text-xs md:text-sm">
                    <FaUser className="mr-2 text-green-600" /> Nama Pelapor *
                  </label>
                  <input
                    type="text"
                    name="reporter_name"
                    value={formData.reporter_name}
                    onChange={handleChange}
                    className="w-full p-2 md:p-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-gray-400 focus:border-gray-400 text-xs md:text-sm text-black"
                    required
                  />
                  {errors.reporter_name && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.reporter_name}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block font-medium text-gray-700 mb-1 flex items-center text-xs md:text-sm">
                    <FaBuilding className="mr-2 text-green-600" /> Nama
                    Perusahaan BUJP Pelapor *
                  </label>
                  <input
                    type="text"
                    name="reporter_company"
                    value={formData.reporter_company}
                    onChange={handleChange}
                    className="w-full p-2 md:p-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-gray-400 focus:border-gray-400 text-xs md:text-sm text-black"
                    required
                  />
                  {errors.reporter_company && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.reporter_company}
                    </p>
                  )}
                </div>
                <div className="md:col-span-2">
                  <label className="block font-medium text-gray-700 mb-1 flex items-center text-xs md:text-sm">
                    <FaPhone className="mr-2 text-green-600" /> No HP Pelapor *
                  </label>
                  <input
                    type="tel"
                    name="reporter_phone"
                    value={formData.reporter_phone}
                    onChange={handleChange}
                    className="w-full p-2 md:p-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-gray-400 focus:border-gray-400 text-xs md:text-sm text-black"
                    required
                    pattern="0\d*"
                    placeholder="0xxxxxxxxxxx"
                  />
                  {errors.reporter_phone && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.reporter_phone}
                    </p>
                  )}
                  <p className="text-xs md:text-sm text-gray-500 mt-1">
                    Dijamin Kerahasiaannya
                  </p>
                </div>
                <div className="md:col-span-2">
                  <label className="block font-medium text-gray-700 mb-1 flex items-center text-xs md:text-sm">
                    <FaMapMarkerAlt className="mr-2 text-green-600" /> Alamat
                    Pelapor *
                  </label>
                  <textarea
                    name="reporter_address"
                    value={formData.reporter_address}
                    onChange={handleChange}
                    className="w-full p-2 md:p-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-gray-400 focus:border-gray-400 h-20 md:h-24 text-xs md:text-sm text-black"
                    required
                  />
                  {errors.reporter_address && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.reporter_address}
                    </p>
                  )}
                </div>
                <div className="md:col-span-2">
                  <label className="block font-medium text-gray-700 mb-1 flex items-center text-xs md:text-sm">
                    <FaFileAlt className="mr-2 text-green-600" /> Jenis
                    Pengaduan *
                  </label>
                  <select
                    name="complaint_type"
                    value={formData.complaint_type}
                    onChange={handleChange}
                    className="w-full p-2 md:p-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-gray-400 focus:border-gray-400 text-xs md:text-sm text-black"
                    required
                  >
                    <option value="">Pilih Jenis Pengaduan</option>
                    <option value="SECURITY_PERSONNEL">
                      Satuan Pengamanan
                    </option>
                    <option value="SECURITY_COMPANY">
                      Badan Usaha Jasa Pengamanan
                    </option>
                  </select>
                  {errors.complaint_type && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.complaint_type}
                    </p>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Step 2 */}
          {(formData.complaint_type === "SECURITY_PERSONNEL" ||
            formData.complaint_type === "SECURITY_COMPANY") &&
            step === 2 && (
              <SecurityForm
                formData={formData}
                handleChange={handleChange}
                handleFileChange={handleFileChange}
                handleRemoveFile={handleRemoveFile}
                errors={errors}
                complaintType={formData.complaint_type}
              />
            )}
        </div>

        {/* ==================== FOOTER ==================== */}
        <div className="p-2 md:p-3 border-t border-gray-200 bg-gray-100 flex justify-between items-center">
          <span className="text-gray-700 text-xs md:text-sm">
            Langkah {step} dari 2
          </span>
          <div className="flex space-x-2">
            {step > 1 && (
              <button
                type="button"
                onClick={prevStep}
                className="bg-gray-500 text-white px-2 md:px-3 py-1 rounded-sm hover:bg-gray-600 transition-all shadow text-xs md:text-sm flex items-center"
              >
                <FaArrowLeft className="mr-1" /> Back
              </button>
            )}
            {step === 1 ? (
              <button
                type="button"
                onClick={nextStep}
                className="bg-green-600 text-white px-2 md:px-3 py-1 rounded-sm hover:bg-green-700 transition-all shadow text-xs md:text-sm flex items-center"
              >
                Next <FaArrowRight className="ml-1" />
              </button>
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                className="bg-green-600 text-white px-2 md:px-3 py-1 rounded-sm hover:bg-green-700 transition-all shadow text-xs md:text-sm flex items-center"
              >
                Submit <FaArrowRight className="ml-1" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function SecurityForm({
  formData,
  handleChange,
  handleFileChange,
  handleRemoveFile,
  errors,
  complaintType,
}: any) {
  const isSecurityPersonnel = complaintType === "SECURITY_PERSONNEL";

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      "image/jpeg": [".jpg", ".jpeg"],
      "image/png": [".png"],
      "application/pdf": [".pdf"],
    },
    maxFiles: 5,
    onDrop: (acceptedFiles) => {
      handleFileChange(acceptedFiles);
    },
  });

  return (
    <div className="space-y-4">
      <div className="space-y-3">
        <div>
          <label className="block font-medium text-gray-700 mb-1 flex items-center text-xs md:text-sm">
            <FaFileAlt className="mr-2 text-green-600" /> Isi Pengaduan *
          </label>
          <textarea
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-medium text-gray-700 mb-1 flex items-center text-xs md:text-sm">
              <FaUser className="mr-2 text-green-600" />
              {isSecurityPersonnel
                ? "Nama Satuan Pengamanan *"
                : "Nama Badan Usaha *"}
            </label>
            <input
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
            <label className="block font-medium text-gray-700 mb-1 flex items-center text-xs md:text-sm">
              <FaMapMarkerAlt className="mr-2 text-green-600" /> Lokasi *
            </label>
            <input
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
        <div>
          <label className="block font-medium text-gray-700 mb-1 flex items-center text-xs md:text-sm">
            <FaBuilding className="mr-2 text-green-600" /> Badan Usaha yang
            Bersangkutan Bekerja *
          </label>
          <input
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
        <div>
          <label className="block font-medium text-gray-700 mb-1 flex items-center text-xs md:text-sm">
            <FaPaperclip className="mr-2 text-green-600" /> Upload Dokumen Bukti
            Aduan *
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
              {formData.evidence_document.map((file: File, index: number) => (
                <li
                  key={index}
                  className="flex items-center justify-between text-xs md:text-sm text-gray-700 bg-gray-100 p-2 rounded"
                >
                  <span>{file.name}</span>
                  <button
                    onClick={() => handleRemoveFile(index)}
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
