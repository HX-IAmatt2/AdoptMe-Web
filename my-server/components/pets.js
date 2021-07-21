const express = require('express')
const router = express.Router()

router.get('/:pet', (req, res) => {
  // res.send(`aca va una mascota ${req.params.pet}`)
})

module.exports = router
