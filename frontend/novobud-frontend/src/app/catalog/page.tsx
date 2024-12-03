'use client'

import { ChangeEvent, useState } from "react";
import CatalogFilters, { Filters } from "@/components/Catalog/CatalogFilters";
import CatalogGrid from "@/components/Catalog/CatalogGrid";
import Property from "@/types/property";

export default function CatalogPage() {
  const [filters, setFilters] = useState<Filters>({
    type: '',
    location: '',
    minPrice: 0,
    maxPrice: 0,
  });

  const handleFilter = (filters: Filters) => {
    setFilters(filters);
  }

  const properties = [
    {
      id: 1,
      type: 'Квартира',
      price: 45000,
      area: 45,
      location: 'Харків, Шевченківський район',
      address: 'пр. Перемоги, 75',
      rooms: 2,
      imgUrl: 'https://plus.unsplash.com/premium_photo-1661877303180-19a028c21048?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmVhdXRpZnVsJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D',
      description: '2 кімнатна квартира з ремонтом, технікою та меблями.',
    },
    // Додати більше нерухомості...
  ] as Property[];

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
          <div className="w-1/3 bg-gray-100 p-6 rounded-lg shadow">
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
