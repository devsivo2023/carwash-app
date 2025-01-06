"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { Session } from "@supabase/supabase-js";

export default function Dashboard() {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    const fetchSession = async () => {
      const { data } = await supabase.auth.getSession();
      if (!data?.session) {
        window.location.href = "/login"; // Redirect to login if not authenticated
      } else {
        setSession(data.session);
      }
    };

    fetchSession();
  }, []);

  if (!session) {
    return <div>Loading...</div>; // Show loading state while checking session
  }

  return (
    <div>
      <h1>Welcome to the Dashboard</h1>
      {/* Dashboard content here */}
    </div>
  );
}
