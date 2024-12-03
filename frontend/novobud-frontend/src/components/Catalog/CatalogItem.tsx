import Property from "@/types/property"

interface CatalogItemProps {
    property: Property
}

export default function CatalogItem({property} : CatalogItemProps) {
  return (
    <div
      className="flex gap-4 bg-white rounded-lg overflow-hidden shadow-md p-4 transform transition hover:scale-105 hover:shadow-2xl"
    >
      {/* Зображення */}
      <div className="w-1/3">
        <img
          src={property.imgUrl}
          alt={property.type}
          className="w-full h-full object-cover rounded-md"
        />
      </div>

      {/* Інформація про нерухомість */}
      <div className="flex-1">
        <h2 className="text-lg font-bold">{property.type}</h2>
        <p className="text-gray-600">{property.location}, {property.address}</p>
        <p className="text-gray-500 text-sm">{property.description}</p>
        <div className="mt-4 text-gray-800">
          <p className="font-semibold">Ціна: ${property.price.toLocaleString()}</p>
          <p>Площа: {property.area} м²</p>
          <p>Кімнат: {property.rooms}</p>
        </div>
      </div>
    </div>
  )
}