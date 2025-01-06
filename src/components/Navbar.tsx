"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Session } from '@supabase/supabase-js';
import { supabase } from '@/lib/supabase'; // Ensure correct import

const Navbar = () => {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    const fetchSession = async () => {
      const { data } = await supabase.auth.getSession();
      setSession(data?.session || null);
    };

    fetchSession();

    const { data: { subscription } } = supabase.auth.onAuthStateChange(() => {
      fetchSession();
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between">
        <Link href="/" className="font-bold text-lg">
          Car Wash App
        </Link>
        <div className="flex gap-4">
          <Link href="/services" className="hover:underline">
            Services
          </Link>
          {session ? (
            <>
              <Link href="/dashboard/manage-services" className="hover:underline">
                Manage Services
              </Link>
              <Link href="/logout" className="hover:underline">
                Logout
              </Link>
            </>
          ) : (
            <Link href="/login" className="hover:underline">
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
