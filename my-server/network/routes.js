const componentsPets = require('../components/pets.js')
const componentsEggs = require('../components/eggs.js')

const routes = (server) => {
  server.use('/pets/', componentsPets)
  server.use('/eggs/', componentsEggs)
  server.use('/', (req, res) => { res.send('Aca no hay nada') })
}

module.exports = routes
