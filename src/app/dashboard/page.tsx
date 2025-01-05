"use client";

import LogoutButton from "@/components/LogoutButton";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <LogoutButton />
    </div>
  );
}
