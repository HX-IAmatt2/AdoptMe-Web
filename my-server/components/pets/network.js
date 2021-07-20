const express = require('express')
const router = express.Router()

router.get('/:pet', (req, res) => {
  console.log(req.params.pet)
  res.send(`aca va un ${req.params.pet}`)
})

module.exports = router
