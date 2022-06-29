const Router = require('express')

const router = new Router()
const BookController = require('../controllers/book.controller')


router.post('/bookings', BookController.createBooking)
router.get('/bookings', BookController.getBookings)
router.get('/bookings/:id', BookController.getOneBooking)
router.delete('/bookings/:id', BookController.deleteBooking)

module.exports = router