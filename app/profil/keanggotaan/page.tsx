"use client";

import { useEffect, useMemo, useState } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import { BsBookmarksFill } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import Link from "next/link";
import { Bujp, BujpPaginatedResponse } from "@/types/interface";
import { fetchBujps } from "@/lib/api";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  ColumnDef,
} from "@tanstack/react-table";
import { format, parseISO } from "date-fns";

export default function Keanggotaan() {
  const [bujps, setBujps] = useState<Bujp[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [pageIndex, setPageIndex] = useState(0);
  const pageSize = 10;
  const [totalItems, setTotalItems] = useState(0);

  const parseDate = (dateString?: string | null) => {
    if (!dateString) return "";
    try {
      return format(parseISO(dateString), "dd-MM-yyyy");
    } catch {
      return "";
    }
  };

  useEffect(() => {
    let isMounted = true;

    const loadBujps = async () => {
      setLoading(true);
      setError(null);

      try {
        const data: BujpPaginatedResponse = await fetchBujps(
          pageIndex + 1,
          pageSize
        );

        await new Promise((resolve) => setTimeout(resolve, 500));

        if (!isMounted) return;

        const formattedData = data.data.map((item) => ({
          ...item,
          tgl_daftar: parseDate(item.tgl_daftar),
          tgl_expired: parseDate(item.tgl_expired),
        }));

        setBujps(formattedData);
        setTotalItems(data.total);
      } catch (err) {
        if (isMounted) {
          setError(err instanceof Error ? err.message : "Terjadi kesalahan.");
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    loadBujps();

    return () => {
      isMounted = false;
    };
  }, [pageIndex, pageSize]);

  const columns = useMemo<ColumnDef<Bujp>[]>(
    () => [
      { header: "No", cell: ({ row }) => pageIndex * pageSize + row.index + 1 },
      { header: "Nama BUJP", accessorKey: "bujp" },
      { header: "Alamat", accessorKey: "alamat" },
      { header: "Kelurahan", accessorKey: "kelurahan" },
      { header: "Kecamatan", accessorKey: "kecamatan" },
      { header: "Kabupaten/Kota", accessorKey: "kabupaten_kota" },
      { header: "Tgl Daftar", accessorKey: "tgl_daftar" },
      { header: "Tgl Expired", accessorKey: "tgl_expired" },
      { header: "Status BUJP", accessorKey: "status_bujp" },
      { header: "Status Pendaftaran", accessorKey: "status_pendaftaran" },
    ],
    [pageIndex, pageSize]
  );

  const table = useReactTable({
    data: bujps,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const totalPages = Math.ceil(totalItems / pageSize);

  return (
    <main className="bg-gray-50 min-h-screen flex flex-col">
      <Header />
      <Navbar />

      {/* Breadcrumb */}
      <section className="bg-gray-100 py-3 shadow-sm">
        <div className="max-w-screen-2xl mx-auto px-6">
          <nav className="text-sm text-gray-700 font-medium flex items-center mx-22">
            <BsBookmarksFill className="w-4 h-4 mr-2 text-gray-500" />
            <ol className="flex items-center space-x-2">
              <li>
                <Link
                  href="/"
                  className="hover:text-green-600 transition-colors"
                >
                  Beranda
                </Link>
              </li>
              <li className="text-gray-400">/</li>
              <li>
                <Link
                  href="/profil"
                  className="hover:text-green-600 transition-colors"
                >
                  Profil
                </Link>
              </li>
              <li className="text-gray-400">/</li>
              <li className="text-gray-900 font-semibold">Keanggotaan</li>
            </ol>
          </nav>
        </div>
      </section>

      {/* BUJP Table */}
      <section className="flex flex-col items-center justify-center px-6 py-10">
        <div className="max-w-7xl w-full bg-white rounded-xl shadow-md p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6 border-b pb-4">
            <div className="flex items-center space-x-3">
              <FiUsers className="w-7 h-7 text-green-600" />
              <h1 className="text-xl font-semibold text-gray-800">
                Keanggotaan BUJP
              </h1>
            </div>
          </div>

          {/* Loading Spinner */}
          {loading && (
            <div className="flex justify-center items-center py-10">
              <div className="w-10 h-10 border-4 border-green-600 border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}

          {error && <p className="text-red-500">{error}</p>}
          {!loading && !error && bujps.length === 0 && (
            <p className="text-gray-500">Tidak ada data BUJP.</p>
          )}

          {!loading && !error && bujps.length > 0 && (
            <>
              <p className="text-gray-400 text-xs italic mb-2">
                *Geser tabel ke kanan atau kiri untuk melihat semua kolom.
              </p>

              <div className="overflow-x-auto border rounded-xl">
                <table className="min-w-[1000px] text-sm text-gray-700">
                  <thead className="bg-gray-200 text-gray-700">
                    {table.getHeaderGroups().map((headerGroup) => (
                      <tr key={headerGroup.id}>
                        {headerGroup.headers.map((header) => (
                          <th
                            key={header.id}
                            className="px-4 py-3 text-left font-medium"
                          >
                            {flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                          </th>
                        ))}
                      </tr>
                    ))}
                  </thead>
                  <tbody className="divide-y divide-gray-100 bg-white">
                    {table.getRowModel().rows.map((row) => (
                      <tr
                        key={row.id}
                        className="hover:bg-gray-50 transition-colors duration-150"
                      >
                        {row.getVisibleCells().map((cell) => (
                          <td
                            key={cell.id}
                            className="px-4 py-2 whitespace-nowrap"
                          >
                            {flexRender(
                              cell.column.columnDef.cell,
                              cell.getContext()
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              <div className="flex justify-between mt-4 items-center text-sm">
                <span className="text-gray-600">
                  Page {pageIndex + 1} of {totalPages}
                  <span className="text-sm text-gray-500 ml-4">
                    Total Items: {totalItems}
                  </span>
                </span>

                <div className="space-x-2">
                  <button
                    onClick={() => setPageIndex((old) => Math.max(old - 1, 0))}
                    disabled={pageIndex === 0 || loading}
                    className="px-4 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 disabled:opacity-50"
                  >
                    Prev
                  </button>
                  <button
                    onClick={() =>
                      setPageIndex((old) => Math.min(old + 1, totalPages - 1))
                    }
                    disabled={pageIndex >= totalPages - 1 || loading}
                    className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50"
                  >
                    Next
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
