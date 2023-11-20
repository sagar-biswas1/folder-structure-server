const { createAuthCookie, logout } = require('../../../api/v1/authentication')

const router = require('express').Router()


router.post('/jwt',createAuthCookie)
router.post('/logout',logout)

module.exports = router