const db = require('../database/db')
class ClientController {
    async createClient(req,res) {
        const {firstName, lastName, phoneNumber} = req.body
        const newClient = await db.query('INSERT INTO Client (firstName, lastName, phoneNumber) VALUES ($1,$2,$3) RETURNING *',
            [firstName,lastName,phoneNumber])
        res.json(newClient.rows[0])
    }
    async getClients(req,res) {
        const clients = await db.query('SELECT * FROM client')
        res.json(clients.rows)
    }
    async getOneClient(req,res) {
        const id = req.params.id
        const client = await db.query('SELECT * FROM client where id = $1', [id])
        res.json(client.rows[0])
    }
    async deleteClient(req,res) {
        const id = req.params.id
        const client = await db.query('DELETE FROM client where id = $1', [id])
        res.json(`Client ${id} deleted!`)
    }
}

module.exports = new ClientController()