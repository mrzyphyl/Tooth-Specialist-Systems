const express  = require('express')
const { getUser, getUserId, deleteUser, addUser, editUser } = require('../controllers/UserContoller')
const router = express.Router()

router.route('/').get(getUser).post(addUser)

router.route('/:id').get(getUserId).delete(deleteUser).put(editUser)

module.exports = router