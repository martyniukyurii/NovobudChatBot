'use client'

import React, { useEffect, useState } from "react";
import Property from "@/types/property";
import PropertyCard from "./PropertyCard";
import { fetchItems } from "@/utils/api_handler";
import PropertyCardSkeleton from "./PropertyCardSkeleton";

const RecommendedSection: React.FC = () => {
  const [recommendedProperties, setProperties] = useState<Property[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadProperties = async () => {
      try {
        setIsLoading(true);
        const items = await fetchItems({ page: 1, limit: 3 });
        console.log(items);
        setProperties(items);
      } catch (error) {
        console.error("Failed to fetch properties:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadProperties();
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">
          Рекомендовані пропозиції
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {isLoading ? (
            Array.from({ length: 3 }).map((_, index) => (
              <PropertyCardSkeleton key={index}/>
            ))
          ) : (
            recommendedProperties.map((property) => (
              <PropertyCard key={property.id} property={property}/>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default RecommendedSection;
