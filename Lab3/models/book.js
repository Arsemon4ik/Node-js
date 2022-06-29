class Booking {
    constructor(client, tour, amount) {
        this.client = client;
        this.tour = tour;
        this.amount = amount;
    }
    toString() {
        return `Бронювання клієнта ${this.client.firstName} ${this.client.lastName} туру ${this.tour.name}. 
        Кількість квитків - ${this.amount}.`;
    }
}
module.exports = { Booking };