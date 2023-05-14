export class Producto {
    _id?: number;
    name: string;
    category: string;
    locate: string;
    price: number;

    constructor (name: string, category: string, locate: string, price: number){
        this.name = name;
        this.category = category;
        this.locate = locate;
        this.price = price;
    }
}