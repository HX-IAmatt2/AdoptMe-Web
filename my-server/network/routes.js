const eggsNetwork = require('../components/eggs/eggsNetwork.js')
const petsNetwork = require('../components/pets/petsNetwork.js')
const login = require('../components/login/loginNetwork.js')

const routes = (server) => {
  server.use('/eggs', eggsNetwork)
  server.use('/pets', petsNetwork)
  server.use('/login', login)

  server.use('/', (req, res) => {
    res
      .status(400)
      .send('la ruta no existe')
  })
}

module.exports = routes
