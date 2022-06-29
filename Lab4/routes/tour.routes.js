const Router = require('express')

const router = new Router()
const TourController = require('../controllers/tour.controller')


router.post('/tours', TourController.createTour)
router.get('/tours', TourController.getTours)
router.get('/tours/:id', TourController.getOneTour)
router.delete('/tours/:id', TourController.deleteTour)

module.exports = router