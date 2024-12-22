type PriceModel = {
  original_price: number;
  original_currency: string;
  converted_price: number;
  converted_currency: string;
};

type SquareAreaModel = {
  amount: number;
  unit: string;
};

type ContactModel = {
  contact_name: string;
  phone_number: string;
};

class Property {
  id?: string;
  title: string;
  price: PriceModel;
  phone_number?: string;
  link: string;
  date: string;
  images: string[];
  square_area: SquareAreaModel;
  floor?: number;
  type: string;
  ownership: string;
  contact?: ContactModel;
  description: string;
  street: string;

  constructor(
    title: string,
    price: PriceModel,
    link: string,
    date: string,
    images: string[],
    square_area: SquareAreaModel,
    type: string,
    description: string,
    street: string,
    ownership: string,
    contact?: ContactModel,
    phone_number?: string,
    floor?: number,
  ) {
    this.title = title;
    this.price = price;
    this.link = link;
    this.date = date;
    this.images = images;
    this.square_area = square_area;
    this.type = type;
    this.contact = contact;
    this.ownership = ownership;
    this.phone_number = phone_number;
    this.floor = floor;
    this.description = description;
    this.street = street;
  }
}

export default Property;
