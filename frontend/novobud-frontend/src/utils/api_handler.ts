import { Filters } from '@/components/Catalog/CatalogFilters';
import Property from '@/types/property';

interface PaginationRequest{
  page: number,
  limit: number
}

async function fetchItems(req?: PaginationRequest): Promise<Property[]> {
  try {
    const pagination = req ? `/?page=${req.page}&limit=${req.limit}` : '';
    const response = await fetch('/api/catalog' + pagination);
    const data = await response.json();
    return data.commerce! as Property[];
  } catch (error) {
    console.error(error);
    return [];
  }
}

async function fetchFilteredItems(filters: Filters): Promise<Property[]> {
  try {
    // Create query string from filters
    const queryParams = new URLSearchParams();
    if (filters.type) queryParams.append('type', filters.type);
    if (filters.location) queryParams.append('location', filters.location);
    if (filters.minPrice !== undefined && filters.minPrice > 0) queryParams.append('min_price', filters.minPrice.toString());
    if (filters.maxPrice !== undefined && filters.maxPrice > 0) queryParams.append('max_price', filters.maxPrice.toString());
    if (filters.dateFrom) queryParams.append('date_from', filters.dateFrom.toISOString().split('T')[0]);
    if (filters.dateTo) queryParams.append('date_to', filters.dateTo.toISOString().split('T')[0]);

    const response = await fetch(`/api/catalog?${queryParams.toString()}`);
    if (!response.ok) {
      throw new Error(`Error fetching filtered items: ${response.statusText}`);
    }

    const data = await response.json();
    return data.commerce! as Property[];
  } catch (error) {
    console.error(error);
    return [];
  }
}

export { fetchItems, fetchFilteredItems };
