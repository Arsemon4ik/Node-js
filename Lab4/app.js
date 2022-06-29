const express = require('express')
const clientRouter = require('./routes/client.routes')
const tourRouter = require('./routes/tour.routes')
const bookingRouter = require('./routes/book.routes')

const app = express()

app.use(express.json())
app.use('/api', clientRouter)
app.use('/api', tourRouter)
app.use('/api', bookingRouter)

app.listen(8080, () => console.log('SERVER STARTED AT PORT 8080!'))




// const {Booking} = require('./models/book');
// const {Client} = require('./models/client');
// const {Tour} = require('./models/tour');
// const {MainController} = require('./controllers/MainController');
// const clients = new MainController();
// const tours = new MainController();
// const bookings = new MainController();
//
// const client1 = new Client('Сашко', 'Коваленко', '098 323 2221');
// const client2 = new Client('Степан', 'Якімченко', '068 542 1245');
// const client3 = new Client('Сергій', 'Галайчук', '066 234 4532');
// const client4 = new Client('Андрій', 'Нога', '098 234 2345');
// clients.push(client1, client2, client3, client4);
//
// const tour1 = new Tour(
//     'Ukraine',
//     2800,
//     new Date('2022-06-21'),
//     new Date('2022-06-28')
// );
// const tour2 = new Tour(
//     'Poland',
//     3200,
//     new Date('2022-07-01'),
//     new Date('2022-07-05')
// );
// const tour3 = new Tour(
//     'Tokio',
//     4500,
//     new Date('2022-08-15'),
//     new Date('2022-08-27')
// );
// const tour4 = new Tour(
//     'Egypt',
//     3700,
//     new Date('2022-08-14'),
//     new Date('2022-08-18')
// );
// const tour5 = new Tour(
//     'German',
//     3700,
//     new Date('2022-08-14'),
//     new Date('2022-08-18')
// );
// tours.push(tour1, tour2, tour3, tour4);
//
// booking = new Booking(client4, tour5, 2)
// bookings.push(new Booking(client1, tour2, 2));
// bookings.push(new Booking(client2, tour1, 1));
// bookings.push(new Booking(client3, tour4, 1));
// bookings.push(new Booking(client3, tour1, 1));
// bookings.push(new Booking(client4, tour3, 5));
// bookings.push(booking);
//
//
// console.log(`list clients (${clients.count})`);
// clients.print();
// console.log('--------');
// console.log(`list tours (${tours.count})`);
// tours.print();
// console.log('--------');
// console.log(`list booking (${bookings.count})`);
// bookings.print();
// console.log('--------');
// console.log('search by clients:');
// clients.search('Сашко').print();
// console.log('--------');
// console.log('search by clients:');
// tours.search('Ukraine').print();
// console.log('-------');
// console.log('delete booking');
//
// bookings.remove(booking);
//
// bookings.print();