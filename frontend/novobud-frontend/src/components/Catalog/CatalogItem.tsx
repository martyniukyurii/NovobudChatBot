import Property from "@/types/property";
import { FaMapMarkerAlt, FaPhoneAlt, FaUser, FaHome } from "react-icons/fa";

interface CatalogItemProps {
  property: Property;
}

const UNKNOWN = "Не вказано";
const MAX_TEXT_LENGTH = 150; 

const checkUnknown = (value: any, fallback: any): string =>
  !value || value === "0" || value === UNKNOWN ? UNKNOWN : fallback;

const trimText = (text:string) => text.length > MAX_TEXT_LENGTH ? `${text.substring(0, MAX_TEXT_LENGTH - 1)}...` : text

export default function CatalogItem({ property }: CatalogItemProps) {
  const {
    images,
    type,
    street,
    description,
    price,
    square_area,
    floor,
    contact,
    phone_number,
  } = property;

  return (
    <div className="flex gap-4 bg-white rounded-lg overflow-hidden shadow-md p-4 transform transition hover:scale-105 hover:shadow-lg">
      {/* Image Section */}
      <div className="w-1/3">
        <img
          src={images[0]}
          style={{maxHeight: "200px"}}
          alt={type}
          className="w-full h-full object-cover rounded-md"
        />
      </div>

      {/* Info Section */}
      <div className="flex-1">
        <h2 className="text-lg font-bold flex items-center gap-2">
          <FaHome className="text-gray-800" /> {type}
        </h2>
        <p className="text-gray-600 flex items-center gap-2">
          <FaMapMarkerAlt className="text-gray-500" /> {street || UNKNOWN}
        </p>

        {/* Description */}
        {description && description !== UNKNOWN && (
          <p className="text-gray-500 text-sm" title={description} >{trimText(description)}</p>
        )}

        {/* Price, area and floor section */}
        <div className="mt-4 text-gray-800">
          <p className="font-semibold">Ціна: {price.converted_price}$</p>
          <p>
            <strong>Площа</strong>:{" "}
            {checkUnknown(
              square_area.unit,
              `${square_area.amount} ${square_area.unit}`
            )}
          </p>
          {floor && (
            <p>
              <strong>Поверх</strong>: {floor}
            </p>
          )}
        </div>

        {/* Contact details */}
        <div className="mt-4 text-gray-800">
          <p className="font-semibold flex items-center gap-2">
            <FaUser className="text-gray-800" /> Контактна інформація:
          </p>
          {contact && (
            <>
              <p className="flex items-center gap-2">
                <FaUser className="text-gray-600" /> Контактна особа:{" "}
                {contact.contact_name}
              </p>
              <p className="flex items-center gap-2">
                <FaPhoneAlt className="text-gray-500" /> Телефон:{" "}
                {contact.phone_number}
              </p>
            </>
          )}
          {phone_number && (
            <p className="flex items-center gap-2">
              <FaPhoneAlt className="text-gray-500" /> Телефон: {phone_number}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
