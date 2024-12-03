import Property from '@/types/property';
import React from 'react';

interface CatalogGridProps {
    properties: Property[];
}

const CatalogGrid = ({ properties }: CatalogGridProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {properties.map((property) => (
        <div key={property.id} className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
          <h3 className="text-xl font-bold mb-2">{property.type}</h3>
          <p className="text-gray-700 mb-2">${property.price.toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
};

export default CatalogGrid;
