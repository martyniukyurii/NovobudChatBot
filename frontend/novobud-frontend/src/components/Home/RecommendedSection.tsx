import React from "react";
import Property from "@/types/property";
import PropertyCard from "./PropertyCard";

const recommendedProperties: Property[] = [
  new Property(
    1,
    "Квартира",
    45000,
    45,
    "Харків, Шевченківський район",
    "проспект Перемоги, 75",
    2,
    "https://cdn.riastatic.com/photosnewr/dom/photo/realty__305923670-1850x1040x90.webp",
    "Продається 2-кімнатна квартира з ремонтом та меблями."
  ),
  new Property(
    2,
    "Будинок",
    120000,
    150,
    "Львів, Сихівський район",
    "вулиця Сихівська, 12",
    4,
    "https://cdn.riastatic.com/photosnew/dom/photo/prodaja-dom-shkurintsi-blagodatnyy-massiv__309434639xl.jpg",
    "Просторий будинок з садом у спокійному районі."
  ),
  new Property(
    3,
    "Таунхаус",
    85000,
    95,
    "Київ, Оболонський район",
    "вулиця Героїв Дніпра, 22",
    3,
    "https://cdn.riastatic.com/photos/dom/photo/27821/2782165/278216501/278216501xl.webp",
    "Сучасний таунхаус у новому житловому комплексі."
  ),
];

const RecommendedSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">
          Рекомендовані пропозиції
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {recommendedProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecommendedSection;
