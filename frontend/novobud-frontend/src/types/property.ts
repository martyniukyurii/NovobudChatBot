export default class Property {
    id: number;
    type: string;
    price: number;
    area: number;
    constructor (id: number, type: string, price: number, area: number) {
        this.id = id;
        this.type = type;
        this.price = price;
        this.area = area;
    }

}