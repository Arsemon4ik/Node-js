const Router = require('express')

const router = new Router()
const ClientController = require('../controllers/client.controller')


router.post('/clients', ClientController.createClient)
router.get('/clients', ClientController.getClients)
router.get('/clients/:id', ClientController.getOneClient)
router.delete('/clients/:id', ClientController.deleteClient)

module.exports = router