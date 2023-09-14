const asyncHandler = require('express-async-handler')
const service = require('../services/AppointmentServices')


//Get All Appointments
//@access Public
const getAppointments = asyncHandler (async (req, res) => {
    const appointments = await service.getAllAppointments()
    res.status(200).json(appointments)
})

//Get Appointments by ID
//@access Public
const getAppointmentsId = asyncHandler (async (req, res) => {
    const appointments = await service.getAppointmentsById(req.params.id)
    if (appointments == undefined)
        res.status(404).json('no record with given id : ' + req.params.id)
    else
        res.send(appointments)
})

//Delete Appointments
//@access Public
const deleteAppointments = asyncHandler(async (req, res) => {
    const affectedRows = await service.deleteAppointmentsById(req.params.id)
    if (affectedRows == 0)
        res.status(404).json('no record with given id : ' + req.params.id)
    else
        res.send('deleted successfully.')
})

//Add Appointments
//@access Public
const addAppointments = asyncHandler(async (req, res) => {
    await service.addOrEditAppointments(req.body)
    res.status(201).send('created successfully.')
})

//Edit Appointments
//@access Public
const editAppointments = asyncHandler(async (req, res) => {
    const affectedRows = await service.addOrEditAppointments(req.body, req.params.id)
    if (affectedRows == 0)
        res.status(404).json('no record with given id : ' + req.params.id)
    else
        res.send('updated successfully.')
})


module.exports = {
    getAppointments,
    getAppointmentsId,
    deleteAppointments,
    addAppointments,
    editAppointments
}