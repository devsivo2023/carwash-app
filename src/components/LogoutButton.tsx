"use client";

import { supabase } from "@/lib/supabase";

export default function LogoutButton() {
  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error("Error logging out:", error.message);
      alert("Error logging out. Please try again.");
    } else {
      alert("You have been logged out successfully.");
      window.location.href = "/"; // Redirect to home or login page
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
    >
      Logout
    </button>
  );
}
