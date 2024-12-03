'use client'

import { ChangeEvent, useEffect, useState } from "react";
import CatalogFilters, { Filters } from "@/components/Catalog/CatalogFilters";
import CatalogGrid from "@/components/Catalog/CatalogGrid";
import Property from "@/types/property";



export default function CatalogPage() {
  // const fetcher = () => fetch('http://localhost:3000/api/catalog').then((res) => res.json());
  const [properties, setProperties] = useState<Property[]>([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/catalog')
      .then((res) => res.json())
      .then((data) => {
        setProperties(data.properties);
      })
    }, []);

  const [filters, setFilters] = useState<Filters>({
    type: '',
    location: '',
    minPrice: 0,
    maxPrice: 0,
  });

  const handleFilter = (filters: Filters) => {
    setFilters(filters);
  }

  const filteredProperties = properties.filter((property) => {
    return (
      (filters.type === '' || property.type === filters.type) &&
      (filters.location === '' || property.location.toLowerCase().includes(filters.location.toLowerCase())) &&
      (filters.minPrice === 0 || property.price >= filters.minPrice) &&
      (filters.maxPrice === 0 || property.price <= filters.maxPrice)
    );
  });

  return (
    <div className="bg-white min-h-screen text-gray-800">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold mb-6">Продаж нерухомості</h1>
        <div className="flex gap-8">
          {/* Секція фільтрів */}
          <div className="w-1/3 bg-gray-100 p-6 rounded-lg shadow h-fit">
            <CatalogFilters onFilter={handleFilter}/>
          </div>

          {/* Секція каталогу */}
          <div className="flex-1">
            <CatalogGrid properties={filteredProperties} />
          </div>
        </div>
      </main>
    </div>
  );
}
