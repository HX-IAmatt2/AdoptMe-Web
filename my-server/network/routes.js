const networkPets = require('../components/pets/network.js')

const routes = (server) => server.use('/pets/', networkPets)

module.exports = routes
