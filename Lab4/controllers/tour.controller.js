const db = require('../database/db')

class TourController {
    async createTour(req,res) {
        const {name, price, startDate, endDate} = req.body
        const newTour = await db.query('INSERT INTO tour (name, price, startDate, endDate) VALUES ($1,$2,$3, $4) RETURNING *',
            [name, price, startDate, endDate])
        res.json(newTour.rows[0])
    }
    async getTours(req,res) {
        const tours = await db.query('SELECT * FROM tour')
        res.json(tours.rows)
    }
    async getOneTour(req,res) {
        const id = req.params.id
        const tour = await db.query('SELECT * FROM tour where id = $1', [id])
        res.json(tour.rows[0])
    }
    async deleteTour(req,res) {
        const id = req.params.id
        const tour = await db.query('DELETE FROM tour where id = $1', [id])
        res.json(`Tour ${id} deleted!`)
    }
}

module.exports = new TourController()