const express  = require('express')
const { addAppointments, getAppointments, deleteAppointments, editAppointments, getAppointmentsTicket } = require('../controllers/AppointmentsController')
const router = express.Router()

router.route('/').get(getAppointments).post(addAppointments)

router.route('/:id').delete(deleteAppointments).put(editAppointments).get(getAppointmentsTicket).get(getAppointments)

module.exports = router