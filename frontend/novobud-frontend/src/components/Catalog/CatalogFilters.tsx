import React, { ChangeEvent } from 'react';

// Тип для фільтрів
interface Filters {
  type: string;
  minPrice: number | string;
  maxPrice: number | string;
}

// Пропси для компонента
interface CatalogFiltersProps {
  filters: Filters;
  onChange: (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

const CatalogFilters: React.FC<CatalogFiltersProps> = ({ filters, onChange }) => {
  return (
    <div className="flex mb-8">
      {/* Тип нерухомості */}
      <div className="flex-1 mr-4">
        <label htmlFor="type" className="block font-medium mb-2">
          Тип нерухомості
        </label>
        <select
          id="type"
          name="type"
          value={filters.type}
          onChange={onChange}
          className="w-full px-4 py-2 rounded border border-gray-300"
        >
          <option value="">Всі</option>
          <option value="Квартира">Квартира</option>
          <option value="Будинок">Будинок</option>
          <option value="Таунхаус">Таунхаус</option>
        </select>
      </div>

      {/* Мінімальна ціна */}
      <div className="flex-1 mr-4">
        <label htmlFor="minPrice" className="block font-medium mb-2">
          Мінімальна ціна
        </label>
        <input
          id="minPrice"
          name="minPrice"
          type="number"
          value={filters.minPrice}
          onChange={onChange}
          className="w-full px-4 py-2 rounded border border-gray-300"
        />
      </div>

      {/* Максимальна ціна */}
      <div className="flex-1">
        <label htmlFor="maxPrice" className="block font-medium mb-2">
          Максимальна ціна
        </label>
        <input
          id="maxPrice"
          name="maxPrice"
          type="number"
          value={filters.maxPrice}
          onChange={onChange}
          className="w-full px-4 py-2 rounded border border-gray-300"
        />
      </div>
    </div>
  );
};

export default CatalogFilters;
