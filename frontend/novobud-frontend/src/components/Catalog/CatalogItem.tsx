import Property from "@/types/property"
import { FaMapMarkerAlt, FaPhoneAlt, FaUser, FaHome } from "react-icons/fa";

interface CatalogItemProps {
    property: Property
}

export default function CatalogItem({ property }: CatalogItemProps) {
  return (
    <div
      className="flex gap-4 bg-white rounded-lg overflow-hidden shadow-md p-4 transform transition hover:scale-105 hover:shadow-lg"
    >
      <div className="w-1/3">
        <img
          src={property.images[0]}
          alt={property.type}
          className="w-full h-full object-cover rounded-md"
        />
      </div>

      <div className="flex-1">
        <h2 className="text-lg font-bold flex items-center gap-2">
          <FaHome className="text-gray-800" /> {property.type}
        </h2>
        <p className="text-gray-600 flex items-center gap-2">
          <FaMapMarkerAlt className="text-gray-500" /> {property.street}
        </p>
        <p className="text-gray-500 text-sm">{property.description}</p>
        <div className="mt-4 text-gray-800">
          <p className="font-semibold">Ціна: ${property.price.converted_currency}</p>
          <p>Площа: {property.square_area.amount} {property.square_area.unit}</p>
          <p>Кімнат: {property.floor}</p>
        </div>
        <div className="mt-4 text-gray-800">
          <p className="font-semibold flex items-center gap-2">
            <FaUser className="text-gray-800" /> Контактна інформація:
          </p>
          <p className="flex items-center gap-2">
            <FaUser className="text-gray-600" /> Контактна особа: {property.contact.contact_name}
          </p>
          <p className="flex items-center gap-2">
            <FaPhoneAlt className="text-gray-500" /> Телефон: {property.contact.phone_number}
          </p>
        </div>
      </div>
    </div>
  )
}
