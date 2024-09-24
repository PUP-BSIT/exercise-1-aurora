enum  Brand{
    SAMSUNG = "Samsung",
    SONY = "Sony",
    LG = "LG",
    TCL = "TCL",
    PANASONIC = "Panasonic",
}

type Item = {
    brand: string;
    color: string;
    quantity: number;
    price: number;
    print(): void;
};

const tablet: Item = {
    brand: "Samsung",
    color: "Silver",
    quantity: 2,
    price: 35000,
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
    brand: "Sony",
    color: "Black",
    quantity: 5,
    price: 40000,
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
    brand: "LG",
    color: "Grey",
    quantity: 7,
    price:  40000,
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
    brand: "TCL",
    color: "Black",
    quantity: 4,
    price: 40000,
    print() {
        console.log(`I wanna buy a ${this.brand}, since it is
        a know local brand. \n
        I want it to be ${this.color}, since I like a cool and aesthetic look. \n
        I want ${this.quantity} of this item . My budget is around 
        ${this.price}. `);
    },
        
};

const fan: Item = {
    brand: "Panasonic",
    color: "White",
    quantity: 6,
    price: 40000,
    print() {
        console.log(`I wanna buy a ${this.brand}, since it is
        a know local brand. \n
        I want it to be ${this.color} color, since I like a cool and aesthetic look. \n
        I want ${this.quantity} of this item . My budget is around 
        ${this.price}. `);
    },
};