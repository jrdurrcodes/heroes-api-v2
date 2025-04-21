const express = require('express')
const rotuer = express.Router()

const { powerDao: dao } = require('../../daos/dao')

//localhose: 3000/api/POwer
router.get{'/', (req, res)=> {
    dao.findAll(res, dao.table)
}}

