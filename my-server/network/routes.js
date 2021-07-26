const eggsNetwork = require('../components/eggs/eggsNetwork.js')
const petsNetwork = require('../components/pets/petsNetwork.js')
const auth = require('../components/auth/authNetwork.js')

const routes = (server) => {
  server.use('/eggs', eggsNetwork)
  server.use('/pets', petsNetwork)
  server.use('/auth', auth)

  server.use('/', (req, res) => {
    res
      .status(400)
      .send('Hola Henry, soy el backend de AdoptMe! Web')
  })
}

module.exports = routes
