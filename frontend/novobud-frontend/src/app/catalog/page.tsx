'use client'


import { ChangeEvent, useState } from "react";
import CatalogFilters from "@/components/Catalog/CatalogFilters";
import CatalogGrid from "@/components/Catalog/CatalogGrid";
import Property from "@/types/property";

export default function CatalogPage(){
  const [filters, setFilters] = useState({
    type: '',
    minPrice: 0,
    maxPrice: 0,
  });

  const handleFilterChange = (e : ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const properties = [
    // Дані про об'єкти нерухомості
    { id: 1, type: 'Квартира', price: 150000, area: 900 } as Property,
    { id: 2, type: 'Будинок', price: 300000, area: 1500 } as Property,
    { id: 3, type: 'Таунхаус', price: 220000, area: 1200 } as Property,
  ];

  const filteredProperties = properties.filter((property) => {
    return (
      (filters.type === '' || property.type === filters.type) &&
      (filters.minPrice === 0 || property.price >= filters.minPrice) &&
      (filters.maxPrice === 0 || property.price <= filters.maxPrice)
    );
  });

  return (
    <div className="bg-white">
      <main>
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold mb-4">Каталог нерухомості</h1>
            <CatalogFilters filters={filters} onChange={handleFilterChange} />
            <CatalogGrid properties={filteredProperties} />
          </div>
        </section>
      </main>
    </div>
  );
};