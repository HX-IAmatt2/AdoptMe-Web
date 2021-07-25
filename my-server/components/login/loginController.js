const Users = require('../../store/users_DB')

const LoginController = {

  checkMail: (mail) => {
    return Users.hasOwnProperty(mail)
  },

  checkPass: (mail, pass) => {
    return Users[mail].password === pass
  },

  getUserInfo: (mail) => {
    return {
      name: Users[mail].name,
      gender: Users[mail].gender
    }
  }
}

module.exports = LoginController
