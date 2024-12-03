import Property from '@/types/property';
import React from 'react';
import CatalogItem from './CatalogItem';

interface CatalogGridProps {
  properties: Property[];
}

const CatalogGrid: React.FC<CatalogGridProps> = ({ properties }) => {
  return (
    <div className="space-y-6">
      {properties.map((property) => (
        <CatalogItem key={property.id} property={property} />
      ))}
    </div>
  );
};

export default CatalogGrid;
