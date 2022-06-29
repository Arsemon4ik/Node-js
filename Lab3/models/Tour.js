class Tour {
    constructor(name, price, startDate, endDate) {
        this.name = name;
        this.price = price;
        this.startDate = startDate;
        this.endDate = endDate;
    }
    toString() {
        return `Тур ${this.name}. Початок - ${this.startDate.toLocaleDateString()}, 
        кінець - ${this.endDate.toLocaleDateString()}. 
        Ціна за квиток: ${this.price} грн.`;
    }
}
module.exports = { Tour };