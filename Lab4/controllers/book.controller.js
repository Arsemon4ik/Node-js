const db = require('../database/db')

class BookController {
    async createBooking(req,res) {
        const {client_id, tour_id, amount} = req.body
        const newTour = await db.query('INSERT INTO book (client_id, tour_id, amount) VALUES ($1,$2,$3) RETURNING *',
            [client_id, tour_id, amount])
        res.json(newTour.rows[0])
    }
    async getBookings(req,res) {
        const book = await db.query('SELECT * FROM book')
        res.json(book.rows)
    }
    async getOneBooking(req,res) {
        const id = req.params.id
        const book = await db.query('SELECT * FROM book where id = $1', [id])
        res.json(book.rows[0])
    }
    async deleteBooking(req,res) {
        const id = req.params.id
        const book = await db.query('DELETE FROM book where id = $1', [id])
        res.json(`Book ${id} deleted!`)
    }
}

module.exports = new BookController()