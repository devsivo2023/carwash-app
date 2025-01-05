"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

interface Service {
  id: number;
  name: string;
  description: string;
  price: number;
}

export default function Services() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      const { data, error } = await supabase.from("services").select("*");
      if (error) {
        console.error("Error fetching services:", error);
      } else {
        setServices(data || []);
      }
      setLoading(false);
    };

    fetchServices();
  }, []);

  if (loading) return <p>Loading services...</p>;

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Our Services</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <div key={service.id} className="bg-white p-6 shadow rounded-lg">
            <h2 className="text-xl font-bold">{service.name}</h2>
            <p className="text-gray-600 mt-2">{service.description}</p>
            <p className="text-green-600 font-bold mt-4">KES {service.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
