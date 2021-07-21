const eggsNetwork = require('../components/eggs/eggsNetwork.js')
const petsNetwork = require('../components/pets/petsNetwork.js')

const routes = (server) => {
  server.use('/eggs', eggsNetwork)
  server.use('/pets', petsNetwork)

  server.use('/', (req, res) => {
    res
      .status(400)
      .send('ingresa en /eggs o en /pets')
  })
}

module.exports = routes
