const express = require('express')
const router = express.Router()
const EggsController = require('./eggsController')

router.get('/:eggName', (req, res) => {
  const paramName = req.params.eggName.toLowerCase()

  if (paramName === 'all') {
    if (req.query.rarity) {
      const queryRarity = req.query.rarity.toLowerCase()
      res.json(EggsController.byRarity(queryRarity))
    } else {
      res.json(EggsController.all())
    }
  } else res.json(EggsController.byName(paramName))
})

module.exports = router
