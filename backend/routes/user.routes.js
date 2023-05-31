const Router = require('express')
const router = new Router()
const userController = require('./../controller/user.controller')

router.get('/user/:id', userController.getUser)
router.post('/registration', userController.createUser)
router.post('/authorization', userController.authUser)
router.get('/authCookie', userController.authWithCookie)
router.get('/clear-cookie', userController.deleteSession)


module.exports = router