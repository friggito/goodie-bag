const {Candy} = require('../db/models/Candy')
const router = require('./index')


//get all candy from database
router.get('/', (req, res, next) => {
    try {
      const allCandy = Candy.findAll()
      res.send(allCandy)
    } catch (err) {
      next(err)
    }
  })

module.exports = router
