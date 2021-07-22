const express = require('express')
const router = express.Router()
const PetsController = require('./petsController')

router.get('/:petName', (req, res) => {
  const paramName = req.params.petName// .toLowerCase()

  if (paramName === 'all') {
    if (req.query.rarity) {
      const queryRarity = req.query.rarity.toLowerCase()
      res.send(PetsController.byRarity(queryRarity))
    } else {
      res.json(PetsController.all())
    }
  } else res.json(PetsController.byName(paramName))
})

module.exports = router
