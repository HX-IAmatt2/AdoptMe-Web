let Users = require('../../store/users_DB')

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
  },

  addUser: (name, gender, mail, password) => {
    Users = { ...Users, [mail]: { name, gender, password } }
  }
}

module.exports = LoginController
