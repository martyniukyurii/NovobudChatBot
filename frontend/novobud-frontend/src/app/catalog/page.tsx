'use client'
import { useEffect, useState } from "react";
import CatalogFilters, { Filters } from "@/components/Catalog/CatalogFilters";
import CatalogGrid from "@/components/Catalog/CatalogGrid";
import Property from "@/types/property";
import {fetchItems, fetchFilteredItems} from '@/utils/api_handler';
import CatalogGridSkeleton from "@/components/Catalog/CatalogGridSkeleton";

export default function CatalogPage() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadProperties = async () => {
      try {
        setIsLoading(true);
        const items = await fetchItems();
        console.log(items);
        setProperties(items);
      } catch (error) {
        console.error('Failed to fetch properties:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadProperties();
  }, []);

  const handleFilter = (filters: Filters) => {
    const loadFilteredProperties = async () => {
      try {
        setIsLoading(true);
        const items = await fetchFilteredItems(filters);
        console.log(items);
        setProperties(items);
      } catch (error) {
        console.error('Failed to fetch properties:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadFilteredProperties();
  }

  return (
    <div className="bg-white min-h-screen text-gray-800">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold mb-6">Продаж нерухомості</h1>
        <div className="flex gap-8">
          <CatalogFilters onFilter={handleFilter}/>
          <div className="flex-1">
            {isLoading ? (
              <CatalogGridSkeleton />
            ) : (
              <CatalogGrid properties={properties} />
            )}
          </div>
        </div>
      </main>
    </div>
  );
}