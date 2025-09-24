"use client";

import { useState } from "react";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import {
  FaTimes,
  FaArrowLeft,
  FaArrowRight,
  FaUser,
  FaBuilding,
  FaPhone,
  FaMapMarkerAlt,
  FaFileAlt,
  FaExclamationTriangle,
  FaShieldAlt,
} from "react-icons/fa";
import SecurityForm from "@components/SecurityForm";
import { submitComplaint } from "@/lib/api";
import { motion } from 'framer-motion';
import { BsExclamationCircleFill, BsLightningFill, BsShieldFill } from "react-icons/bs";

export default function PengaduanPage() {
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
        "Invalid files detected:",
        invalidFiles.map((file) => ({
          name: file.name,
          type: file.type,
          size: `${(file.size / 1024).toFixed(2)} KB`,
        }))
      );
      setSubmissionStatus(
        "File tidak didukung. Hanya JPG, JPEG, PNG, atau PDF yang diizinkan."
      );
      return;
    }
    if (totalSize > maxTotalSize) {
      console.log(
        "Total file size exceeds limit:",
        `${(totalSize / 1024 / 1024).toFixed(2)} MB (max: ${
          maxTotalSize / 1024 / 1024
        } MB)`
      );
      setSubmissionStatus("Total ukuran file melebihi 5MB. Harap pilih ulang.");
      return;
    }
    if (formData.evidence_document.length + filesArray.length > maxFiles) {
      console.log(
        "Too many files selected:",
        `${formData.evidence_document.length + filesArray.length} files (max: ${maxFiles})`
      );
      setSubmissionStatus(`Maksimum ${maxFiles} file diizinkan.`);
      return;
    }

    console.log(
      "Uploaded files:",
      filesArray.map((file) => ({
        name: file.name,
        type: file.type,
        size: `${(file.size / 1024).toFixed(2)} KB`,
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
    console.log(`Removing file: ${formData.evidence_document[index].name}`);
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

    try {
      await submitComplaint(formData);

      setSubmissionStatus("Pengaduan berhasil dikirim!");
      setTimeout(() => {
        setSubmissionStatus(null);
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
    } catch (error: unknown) {
      if (error instanceof Error) {
        setSubmissionStatus(error.message);
      } else {
        setSubmissionStatus("Terjadi kesalahan yang tidak terduga.");
      }
    }
  };

  const resetForm = () => {
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
    setSubmissionStatus(null);
  };

  const complaintTypeText =
    formData.complaint_type === "SECURITY_PERSONNEL"
      ? "Satuan Pengamanan"
      : formData.complaint_type === "SECURITY_COMPANY"
        ? "Badan Usaha Jasa Pengamanan"
        : "Tidak Dipilih";

  return (
    <main className="bg-gray-50 min-h-screen flex flex-col">
      <Navbar />    

        {/* Modern Hero Section - Pengaduan */}
        <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 py-16 relative overflow-hidden"
        >
        {/* Background Pattern with Blobs & SVG */}
        <div className="absolute inset-0">
            <div className="absolute top-5 left-10 w-64 h-64 bg-blue-400/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
            <div className="absolute top-10 right-10 w-64 h-64 bg-slate-400/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-32 w-64 h-64 bg-blue-400/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>

            {/* Alert/Report SVGs */}
            <svg className="absolute top-10 left-10 w-16 h-16 text-blue-400/20" fill="currentColor" viewBox="0 0 24 24">
            <path d="M1 21H23L12 2 1 21ZM12 16V14H12V16ZM12 18V20H12V18Z"/>
            </svg>

            <svg className="absolute top-20 right-20 w-12 h-12 text-slate-400/15" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 
            10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
            </svg>
        </div>

        <div className="max-w-5xl mx-auto px-6 relative z-10">
            <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-white/10 text-white border border-white/20 backdrop-blur-sm mb-6">
                <BsExclamationCircleFill className="w-4 h-4 mr-2 text-yellow-400" />
                Pengaduan
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white leading-tight">
                Layanan
                <span className="block text-white mt-1">
                Pengaduan ABUJAPI Jabar
                </span>
            </h1>

            {/* Description */}
            <p className="text-lg text-slate-200 mb-8 max-w-2xl mx-auto leading-relaxed">
                Sampaikan laporan, keluhan, atau masukan Anda kepada ABUJAPI Jawa Barat dengan cepat dan mudah.
            </p>

            {/* Features */}
            <div className="flex flex-wrap justify-center gap-6 text-slate-300">
                <div className="flex items-center space-x-2">
                <BsShieldFill className="w-4 h-4 text-blue-400" />
                <span className="text-sm">Aman & Rahasia</span>
                </div>
                <div className="flex items-center space-x-2">
                <BsLightningFill className="w-4 h-4 text-yellow-400" />
                <span className="text-sm">Tindak Lanjut Cepat</span>
                </div>
            </div>
            </div>
        </div>
        </motion.section>



      {/* Form Section */}
      <section className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Form Container */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              {/* Header */}
              <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-blue-600 to-blue-500">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold text-white flex items-center">
                    <FaFileAlt className="mr-3" />
                    Formulir Pengaduan
                  </h2>
                  <button
                    onClick={resetForm}
                    className="text-white hover:text-gray-200 hover:bg-white/10 rounded-lg p-2 transition-all duration-200"
                    title="Reset Form"
                  >
                    <FaTimes />
                  </button>
                </div>
              </div>

              {/* Body */}
              <div className="p-8 bg-gradient-to-br from-slate-50 to-blue-50/30">
                {/* Step Information */}
                {step === 1 ? (
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-100 text-blue-800 border border-blue-200 mb-4">
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                      Langkah 1 dari 2
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Data Pelapor</h3>
                    <p className="text-gray-600 text-sm leading-relaxed max-w-md mx-auto">
                      Isi informasi pribadi Anda dengan lengkap dan benar untuk mengajukan pengaduan.
                    </p>
                  </div>
                ) : (
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-green-100 text-green-800 border border-green-200 mb-4">
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Langkah 2 dari 2
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Detail Pengaduan</h3>
                    <p className="text-gray-600 text-sm">
                      Jenis Pengaduan: <span className="font-medium text-blue-600">{complaintTypeText}</span>
                    </p>
                  </div>
                )}

                {/* Progress Bar */}
                <div className="mb-8">
                  <div className="w-full bg-gray-200 h-3 rounded-full shadow-inner">
                    <div
                      className={`h-3 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-500 shadow-sm ${
                        step === 1 ? "w-1/2" : "w-full"
                      }`}
                    ></div>
                  </div>
                </div>

                {/* Status Message */}
                {submissionStatus && (
                  <div className={`text-center font-semibold text-sm mb-6 p-4 rounded-lg ${
                    submissionStatus.includes("berhasil") 
                      ? "bg-green-100 text-green-700 border border-green-200" 
                      : "bg-red-100 text-red-700 border border-red-200"
                  }`}>
                    {submissionStatus}
                  </div>
                )}

                {/* Step 1 - Reporter Data */}
                {step === 1 && (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Nama Pelapor */}
                      <div>
                        <label
                          htmlFor="reporter_name"
                          className="block font-medium text-gray-700 mb-2 flex items-center text-sm"
                        >
                          <FaUser className="mr-2 text-blue-600" />
                          Nama Pelapor <span className="text-red-500 ml-1">*</span>
                        </label>
                        <input
                          id="reporter_name"
                          type="text"
                          name="reporter_name"
                          value={formData.reporter_name}
                          onChange={handleChange}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm text-black transition-colors"
                          placeholder="Masukkan nama lengkap"
                          required
                        />
                        {errors.reporter_name && (
                          <p className="text-red-500 text-xs mt-1 flex items-center">
                            <FaExclamationTriangle className="mr-1" />
                            {errors.reporter_name}
                          </p>
                        )}
                      </div>

                      {/* Nama Perusahaan */}
                      <div>
                        <label
                          htmlFor="reporter_company"
                          className="block font-medium text-gray-700 mb-2 flex items-center text-sm"
                        >
                          <FaBuilding className="mr-2 text-blue-600" />
                          Nama Perusahaan BUJP Pelapor <span className="text-red-500 ml-1">*</span>
                        </label>
                        <input
                          id="reporter_company"
                          type="text"
                          name="reporter_company"
                          value={formData.reporter_company}
                          onChange={handleChange}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm text-black transition-colors"
                          placeholder="Masukkan nama perusahaan"
                          required
                        />
                        {errors.reporter_company && (
                          <p className="text-red-500 text-xs mt-1 flex items-center">
                            <FaExclamationTriangle className="mr-1" />
                            {errors.reporter_company}
                          </p>
                        )}
                      </div>

                      {/* Nomor HP */}
                      <div className="md:col-span-2">
                        <label
                          htmlFor="reporter_phone"
                          className="block font-medium text-gray-700 mb-2 flex items-center text-sm"
                        >
                          <FaPhone className="mr-2 text-blue-600" />
                          No HP Pelapor <span className="text-red-500 ml-1">*</span>
                        </label>
                        <input
                          id="reporter_phone"
                          type="tel"
                          name="reporter_phone"
                          value={formData.reporter_phone}
                          onChange={handleChange}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm text-black transition-colors"
                          placeholder="0812xxxxxxxx"
                          required
                          pattern="0\d*"
                        />
                        {errors.reporter_phone && (
                          <p className="text-red-500 text-xs mt-1 flex items-center">
                            <FaExclamationTriangle className="mr-1" />
                            {errors.reporter_phone}
                          </p>
                        )}
                        <p className="text-xs text-gray-500 mt-1 flex items-center">
                          <FaShieldAlt className="mr-1" />
                          Dijamin Kerahasiaannya
                        </p>
                      </div>

                      {/* Alamat */}
                      <div className="md:col-span-2">
                        <label
                          htmlFor="reporter_address"
                          className="block font-medium text-gray-700 mb-2 flex items-center text-sm"
                        >
                          <FaMapMarkerAlt className="mr-2 text-blue-600" />
                          Alamat Pelapor <span className="text-red-500 ml-1">*</span>
                        </label>
                        <textarea
                          id="reporter_address"
                          name="reporter_address"
                          value={formData.reporter_address}
                          onChange={handleChange}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 h-24 text-sm text-black transition-colors resize-none"
                          placeholder="Masukkan alamat lengkap"
                          required
                        />
                        {errors.reporter_address && (
                          <p className="text-red-500 text-xs mt-1 flex items-center">
                            <FaExclamationTriangle className="mr-1" />
                            {errors.reporter_address}
                          </p>
                        )}
                      </div>

                      {/* Jenis Pengaduan */}
                      <div className="md:col-span-2">
                        <label
                          htmlFor="complaint_type"
                          className="block font-medium text-gray-700 mb-2 flex items-center text-sm"
                        >
                          <FaFileAlt className="mr-2 text-blue-600" />
                          Jenis Pengaduan <span className="text-red-500 ml-1">*</span>
                        </label>
                        <select
                          id="complaint_type"
                          name="complaint_type"
                          value={formData.complaint_type}
                          onChange={handleChange}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm text-black transition-colors"
                          required
                        >
                          <option value="">Pilih Jenis Pengaduan</option>
                          <option value="SECURITY_PERSONNEL">Satuan Pengamanan</option>
                          <option value="SECURITY_COMPANY">Badan Usaha Jasa Pengamanan</option>
                        </select>
                        {errors.complaint_type && (
                          <p className="text-red-500 text-xs mt-1 flex items-center">
                            <FaExclamationTriangle className="mr-1" />
                            {errors.complaint_type}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 2 - Security Form */}
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

            {/* Footer */}
                <div className="p-6 border-t border-gray-200 bg-gray-50">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                    {/* Progress Text */}
                    <span className="text-gray-700 text-sm font-medium flex items-center justify-center sm:justify-start">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path
                        fillRule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 
                        2v10a2 2 0 002 2h12a2 2 0 
                        002-2V6a2 2 0 00-2-2h-1V3a1 1 
                        0 10-2 0v1H7V3a1 1 0 00-1-1zm0 
                        5a1 1 0 000 2h8a1 1 0 
                        100-2H6z"
                        clipRule="evenodd"
                        />
                    </svg>
                    Langkah {step} dari 2
                    </span>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row sm:space-x-3 gap-3 sm:gap-0">
                    {step > 1 && (
                        <button
                        type="button"
                        onClick={prevStep}
                        className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-lg transition-colors shadow-sm text-sm font-medium flex items-center justify-center"
                        >
                        <FaArrowLeft className="mr-2" />
                        Kembali
                        </button>
                    )}

                    {step === 1 ? (
                        <button
                        type="button"
                        onClick={nextStep}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors shadow-sm text-sm font-medium flex items-center justify-center"
                        >
                        Lanjutkan
                        <FaArrowRight className="ml-2" />
                        </button>
                    ) : (
                        <button
                        type="button"
                        onClick={handleSubmit}
                        disabled={submissionStatus === "Mengirim pengaduan..."}
                        className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white px-6 py-2 rounded-lg transition-colors shadow-sm text-sm font-medium flex items-center justify-center"
                        >
                        {submissionStatus === "Mengirim pengaduan..." ? (
                            <>
                            <svg
                                className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                                ></circle>
                                <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 
                                5.373 0 12h4zm2 5.291A7.962 7.962 
                                0 014 12H0c0 3.042 1.135 5.824 3 
                                7.938l3-2.647z"
                                ></path>
                            </svg>
                            Mengirim...
                            </>
                        ) : (
                            <>
                            Kirim Pengaduan
                            <FaArrowRight className="ml-2" />
                            </>
                        )}
                        </button>
                    )}
                    </div>
                </div>
                </div>

            </div>

            {/* Information Cards */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <div className="flex items-center mb-4">
                  <FaShieldAlt className="text-2xl text-blue-600 mr-3" />
                  <h3 className="font-semibold text-gray-800">Keamanan Data</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Semua informasi yang Anda berikan akan dijaga kerahasiaannya dan hanya digunakan untuk penanganan pengaduan.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <div className="flex items-center mb-4">
                  <FaFileAlt className="text-2xl text-green-600 mr-3" />
                  <h3 className="font-semibold text-gray-800">Proses Cepat</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Pengaduan Anda akan diproses dalam waktu maksimal 3x24 jam kerja setelah formulir dikirim.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <div className="flex items-center mb-4">
                  <FaPhone className="text-2xl text-purple-600 mr-3" />
                  <h3 className="font-semibold text-gray-800">Dukungan 24/7</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Tim kami siap membantu Anda kapan saja jika ada pertanyaan terkait pengaduan yang diajukan.
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="mt-8 bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 rounded-xl">
              <div className="text-center">
                <h3 className="text-lg font-semibold mb-2">Butuh Bantuan?</h3>
                <p className="text-blue-100 text-sm mb-4">
                  Tim dukungan kami siap membantu Anda dalam proses pengaduan
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
                  <div className="flex items-center">
                    <FaPhone className="mr-2" />
                    <span>Hotline: (021) 1234-5678</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                    </svg>
                    <span>Email: support@bpdabujapijabar.or.id</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}