const express = require('express')
const router = express.Router()
const LoginController = require('./authController')

require('colors')

router.post('/login', (req, res) => {
  const mail = req.body.mail
  const pass = req.body.pass
  console.log('Mail:'.inverse.yellow, LoginController.checkMail(mail))

  if (LoginController.checkMail(mail)) {
    console.log('Password:'.inverse.red, LoginController.checkPass(mail, pass))
    if (LoginController.checkPass(mail, pass)) {
      res.send(LoginController.getUserInfo(mail))
    } else {
      res.status(400).send('Password incorrecto')
    }
  } else {
    res.status(400).send('Cuenta inexistente')
  }
})

router.post('/register', (req, res) => {
  const name = req.body.name
  const gender = req.body.gender
  const mail = req.body.mail
  const pass = req.body.pass

  if (LoginController.checkMail(mail)) {
    res.status(400).send('Ese email ya está registrado')
  } else {
    LoginController.addUser(name, gender, mail, pass)
    res.status(201).send('Registro correcto!')
  }
})

module.exports = router
