const findAll = require('../../../api/v1/services/controllers/findAll')
const verifyToken = require('../../../middlewares/verifyToken')


const router = require('express').Router()


router.get('/services',findAll)
// router.post('/logout',logout)

module.exports = router