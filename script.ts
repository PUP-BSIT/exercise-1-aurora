enum  Brand{
    SAMSUNG = "Samsung",
    SONY = "Sony",
    LG = "LG",
    TCL = "TCL",
    PANASONIC = "Panasonic",
}

type Item = {
    brand: Brand;
    color: string;
    quantity: number;
    price: number;
    print(): void;
};

const tablet: Item = {
    brand: Brand.SAMSUNG,
    color: "Silver",
    quantity: 2,
    price: 15000,
    print() {
        console.log(`I wanna buy a ${this.brand}, since it is 
        a known local brand. \n
        I want it to be ${this.color}, since I like a cool and 
        aesthetic look. \n
        I want ${this.quantity} of this item. My budget is around 
        ${this.price}. `);
    },
};

const cellphone: Item = {
    brand: Brand.SONY,
    color: "Black",
    quantity: 5,
    price: 20000,
    print() {
        console.log(`I wanna buy a ${this.brand}, since it is
        a known local brand. \n
        I want it to be ${this.color}, since I like a cool 
        and aesthetic look.\n
        I want ${this.quantity} of this item . My budget is around 
        ${this.price}. `);
    },
};

const laptop: Item = {
    brand: Brand.LG,
    color: "Grey",
    quantity: 7,
    price:  60000,
    print() {
        console.log (`I wanna buy a ${this.brand}, since it is 
        a known local brand. \n
        I want it to be ${this.color}, since I like a cool and aesthetic
        look. \n
        I want ${this.quantity} of this item. My budget is around
        ${this.price}. `);
    }
};

const television: Item = {
    brand: Brand.TCL,
    color: "Black",
    quantity: 4,
    price: 30000,
    print() {
        console.log(`I wanna buy a ${this.brand}, since it is
        a know local brand. \n
        I want it to be ${this.color}, since I like a cool and aesthetic 
        look. \n
        I want ${this.quantity} of this item. My budget is around 
        ${this.price}. `);
    },     
};

const fan: Item = {
    brand: Brand.PANASONIC,
    color: "White",
    quantity: 6,
    price: 5000,
    print() {
        console.log(`I wanna buy a ${this.brand}, since it is
        a know local brand. \n
        I want it to be ${this.color} color, since I like a cool and 
        aesthetic look. \n
        I want ${this.quantity} of this item. My budget is around 
        ${this.price}. `);
    },
};

tablet.print();
cellphone.print();
laptop.print();
television.print();
fan.print();