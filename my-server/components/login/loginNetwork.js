const express = require('express')
const router = express.Router()
const LoginController = require('./loginController')

require('colors')

router.post('/', (req, res) => {
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

module.exports = router
