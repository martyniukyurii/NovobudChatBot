import React from "react";
import Property from "@/types/property";

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <div className="bg-gray-50 rounded-lg shadow-lg overflow-hidden transform transition hover:scale-105 hover:shadow-2xl">
      <img
        src={property.images[0]}
        alt={property.type}
        className="w-full h-56 object-cover"
      />
      <div className="p-5">
        <h3 className="text-lg font-bold text-gray-800 mb-3">
          {property.title}
        </h3>
        <h3 className="text-lg font-bold text-gray-800 mb-3">
          {property.price.converted_price} $
        </h3>
        <p className="text-sm text-gray-600">
          <strong>Розташування:</strong> {property.street}
        </p>
        <p className="text-sm text-gray-500 mt-2">{property.description}</p>
        <button className="mt-4 px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300">
          Детальніше
        </button>
      </div>
    </div>
  );
};

export default PropertyCard;
