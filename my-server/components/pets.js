const express = require('express')
const router = express.Router()

const Pets = require('../store/pets_DB')

router.get('/:pet', (req, res) => {
  const pet = req.params.pet
  res.json(Pets[pet])
})

module.exports = router
