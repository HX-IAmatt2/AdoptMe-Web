const express = require('express')
const morgan = require('morgan')
const { port, host } = require('./config')
const routesNetwork = require('./network/routes')
const cors = require('cors')

require('colors')

const server = express()

server.use(morgan('dev'))
server.use(cors())
server.use(express.json())

routesNetwork(server)

server.listen(port, host, () => {
  console.log('AdoptMe! Web '.magenta + 'Server ' + 'running'.green, 'on', host.cyan + ':' + port.cyan)
})
