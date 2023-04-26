const Router = require('express')
const router = new Router()
const userController = require('./../controller/user.controller')

router.get('/user/:id', userController.getUser)
router.post('/registration', userController.createUser)
router.post('/authorization', userController.authUser)
router.put('/user', userController.updateUserName)
router.delete('/user', userController.deleteUser)

router.get('/test/:first',userController.testMessage)

module.exports = router