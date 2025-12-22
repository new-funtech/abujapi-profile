'use client'

import ComplaintPage from "@/components/ComplaintPage";
import { useRouter } from "next/navigation";

export default function PengaduanPage() {
  const router = useRouter();

  return (
    <ComplaintPage
      isOpen={true}
      onClose={() => {
        router.push("/"); 
      }}
    />
  );
}
