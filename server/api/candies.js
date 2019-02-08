const Candy = require('../db/models/Candy')
const router = require('express').Router()


//get all candy from database
router.get('/', async (req, res, next) => {
    try {
      const allCandy = await Candy.findAll()
      res.send(allCandy)
    } catch (err) {
      next(err)
    }
  })

module.exports = router
