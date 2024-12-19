import React, { ChangeEvent } from 'react';
import { FaSearch, FaMapMarkerAlt, FaRegBuilding, FaFilter } from 'react-icons/fa';
import PriceInput from './PriceInput';

export interface Filters {
  type: string;
  location: string;
  minPrice: number;
  maxPrice: number;
}

interface CatalogFiltersProps {
  onFilter: (filters: Filters) => void;
}

const CatalogFilters: React.FC<CatalogFiltersProps> = ({onFilter}) => {
  const filterFormRef = React.useRef<HTMLFormElement>(null);
  const minPriceRef = React.useRef<HTMLInputElement>(null);
  const maxPriceRef = React.useRef<HTMLInputElement>(null);

  const handleFilter = () => {
    const filters = {} as Filters;

    filters.type = filterFormRef.current?.type?.value || '';
    filters.location = filterFormRef.current?.location?.value || '';
    filters.minPrice = filterFormRef.current?.minPrice?.value || 0;
    filters.maxPrice = filterFormRef.current?.maxPrice?.value || 0;

    onFilter(filters);
  }

  const cleanForm = () => {
    filterFormRef.current?.reset();
    if (minPriceRef.current) {
      minPriceRef.current.value = '';
    }
    if (maxPriceRef.current) {
      maxPriceRef.current.value = '';
    }
  };

  return (
    <div className="w-1/3 bg-gray-100 p-6 rounded-lg shadow h-fit">
      <form ref={filterFormRef} onSubmit={e => {e.preventDefault(); handleFilter()}} >
        <div className="flex items-center">
          <h3 className="text-xl font-bold">Фільтри</h3>
          <FaFilter className="ml-3 text-xl" />

          <button
            type="button"
            className="ml-auto px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300"
            onClick={cleanForm}
          >
            Очистити
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label htmlFor="type" className="block text-sm font-medium text-gray-700 flex items-center">
              <FaRegBuilding className="mr-2" />
              Тип нерухомості
            </label>
            <select
              id="type"
              name="type"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            >
              <option value="">Всі</option>
              <option value="Квартира">Квартира</option>
              <option value="Будинок">Будинок</option>
              <option value="Таунхаус">Таунхаус</option>
            </select>
          </div>
          <div>
            <label htmlFor="location" className="block text-sm font-medium text-gray-700 flex items-center">
              <FaMapMarkerAlt className="mr-2" />
              Географія пошуку
            </label>
            <input
              id="location"
              name="location"
              type="text"

              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <div className="flex space-x-4">
            <PriceInput
              ref={minPriceRef}
              id="minPrice"
              label="Мінімальна ціна ($)"
            />
            <PriceInput
              ref={maxPriceRef}
              id="maxPrice"
              label="Максимальна ціна ($)"
            />
          </div>
          <div className="flex space-x-4">
            <div className="w-full relative">
              <label>Дата від</label>
              <input id="dateFrom" type='date' className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"/>
            </div>
            <div className="w-full relative">
              <label>Дата до</label>
              <input id="dateTo" type='date' className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"/>
            </div>
          </div>
        </div>
        <button
          className="mt-6 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition flex items-center justify-center"
          type='submit'
        >
          <FaSearch className="mr-2" />
          Застосувати
        </button>
      </form>
    </div>
  );
};

export default CatalogFilters;
