class Client {
    constructor(firstName, lastName, phoneNumber) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
    }
    toString() {
        return `Клієнт ${this.firstName} ${this.lastName}. 
        Номер телефону: ${this.phoneNumber}.`;
    }
}
module.exports = { Client };