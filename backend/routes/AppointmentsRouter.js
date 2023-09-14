const express  = require('express')
const { addAppointments, getAppointments, getAppointmentsId, deleteAppointments, editAppointments } = require('../controllers/AppointmentsController')
const router = express.Router()

router.route('/').get(getAppointments).post(addAppointments)

router.route('/:id').get(getAppointmentsId).delete(deleteAppointments).put(editAppointments)

module.exports = router