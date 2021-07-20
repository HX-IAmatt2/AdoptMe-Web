const express = require('express')
const morgan = require('morgan')
const { port, host } = require('./config')
const routesNetwork = require('./network/routes')

require('colors')

const server = express()

server.use(morgan('dev'))
server.use(express.json())

routesNetwork(server)

server.listen(port, host, () => {
  console.log('Server running'.inverse.green, 'on', host.blue + ':' + port.blue)
})
