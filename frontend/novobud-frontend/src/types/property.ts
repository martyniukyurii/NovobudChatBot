export default class Property {
  id: number;
  type: string;
  price: number;
  area: number;
  location: string;
  address: string;
  rooms: number;
  imgUrl: string;
  description: string;
  dateOfPublication: Date;
  dateOfLastChange: Date;
  contactName: string;
  phoneNumbers: string[];
  constructor (id: number, type: string, price: number, area: number, location: string, address: string, rooms: number,
              imgUrl: string, description: string, contactName: string, phoneNumbers: string[]) {
    this.id = id;
    this.type = type;
    this.price = price;
    this.area = area;
    this.location = location;
    this.address=address;
    this.rooms=rooms;
    this.imgUrl=imgUrl;
    this.description=description;
    this.dateOfPublication= new Date();
    this.dateOfLastChange=new Date();
    this.contactName=contactName;
    this.phoneNumbers=phoneNumbers;
  }

}