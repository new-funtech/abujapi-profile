"use client";

import { useSession, signOut } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { Loader2, Users, LogOut, UserCircle } from "lucide-react";

type User = {
  id: number;
  email: string;
  name: string;
  createdAt: string;
};

export default function UserPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.replace("/auth/sign-in");
    }
  }, [status, router]);

  useEffect(() => {
    const fetchUsers = async () => {
      if (status !== "authenticated" || !session?.user?.accessToken) return;

      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/auth/users`,
          {
            headers: {
              Accept: "application/json",
              Authorization: `Bearer ${session.user.accessToken}`,
            },
          },
        );

        if (!res.ok) {
          throw new Error("Failed to fetch user data");
        }

        const data: User[] = await res.json();
        setUsers(data);
      } catch (err: unknown) {
        if (err instanceof Error) {
          toast.error(err.message || "An error occurred while fetching users");
        } else {
          toast.error("An unexpected error occurred while fetching users");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [session, status]);

  const handleLogout = () => {
    if (confirm("Are you sure you want to logout?")) {
      signOut({ callbackUrl: "/auth/sign-in" });
    }
  };

  if (status === "loading") {
    return (
      <div className="p-6 flex items-center gap-2 text-gray-600">
        <Loader2 className="animate-spin w-5 h-5" />
        Loading session...
      </div>
    );
  }

  return (
    <main className="p-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6">
        <div className="flex items-center gap-2 mb-4 sm:mb-0">
          <Users className="w-6 h-6 text-blue-600" />
          <h1 className="text-2xl font-bold text-gray-800">User List</h1>
        </div>

        <div className="flex items-center gap-4">
          {session?.user && (
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <UserCircle className="w-5 h-5 text-gray-600" />
              {session.user.name}
            </div>
          )}

          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-red-500 hover:bg-red-600 rounded-md transition"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>
      </div>

      {loading ? (
        <div className="flex items-center gap-2 text-gray-500">
          <Loader2 className="animate-spin w-5 h-5" />
          Fetching users...
        </div>
      ) : users.length > 0 ? (
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {users.map((user) => (
            <li
              key={user.id}
              className="rounded-xl bg-white shadow hover:shadow-md transition border p-4"
            >
              <p className="font-semibold text-lg text-gray-800">{user.name}</p>
              <p className="text-sm text-gray-600">{user.email}</p>
              <p className="text-xs text-gray-400 mt-1">
                Registered on:{" "}
                <span className="font-medium">
                  {new Date(user.createdAt).toLocaleString("en-US")}
                </span>
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No users found.</p>
      )}
    </main>
  );
}
