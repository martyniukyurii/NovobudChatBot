import Property from '@/types/property';

async function fetchItems(): Promise<Property[]> {
  try {
    const response = await fetch('/api/catalog');
    const data = await response.json();
    return data.commerce! as Property[];
  } catch (error) {
    console.error(error);
    return [];
  }
}

export default fetchItems;