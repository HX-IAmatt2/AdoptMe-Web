const express = require('express')
const router = express.Router()

const Eggs = require('../store/eggs')

router.get('/:egg', (req, res) => {
  const egg = req.params.egg
  res.json(Eggs[egg])
})

module.exports = router
