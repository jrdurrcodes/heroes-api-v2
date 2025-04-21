const express = require('express')
const router = express.Router()
const { heroDao: dao } = require('../../daos/dao')

// localhost: 3000/api/hero
router.get('/', (req, res)=> {
    dao.findHeroes
})

module.exports = router
