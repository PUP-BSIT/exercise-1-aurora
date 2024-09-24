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