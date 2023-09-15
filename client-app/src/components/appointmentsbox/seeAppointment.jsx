import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Appbox, BoxContainer, CreateBox, Heading, AppointmentsTable, AppointmentInfo, CancelButton, AppointmentDBInfo, ButtonBox, Button, Margin, MarginBig } from './common'
import { FiSettings } from 'react-icons/fi'

function SeeAppointment() {
  const navigate = useNavigate()
  const [appointments, setAppointments] = useState([])

  useEffect(() => {
    axios.get('http://localhost:5000/api/appointments')
    .then(result => setAppointments(result.data))
    .catch(err => console.log(err))
  }, [])

  const handleDelete = (id) => {
    axios.delete('http://localhost:5000/api/appointments/' + id )
    .then(res => {console.log(res)
      window.location.reload()
    })
    .catch(err => console.log(err))
  }

  return (
    <Appbox>
        <BoxContainer>
          <CreateBox>
            <Heading>Appointments</Heading>
              <AppointmentsTable>
                <thead>
                  <tr style={{gap: '2rem'}}>
                    <AppointmentInfo>AppointmentTicketNo</AppointmentInfo>
                    <AppointmentInfo>FullName</AppointmentInfo>
                    <AppointmentInfo>PhoneNo</AppointmentInfo>
                    <AppointmentInfo>Doctor</AppointmentInfo>
                    <AppointmentInfo>AppointmentTime</AppointmentInfo>
                    <AppointmentInfo>AppointmentDate</AppointmentInfo>
                    <AppointmentInfo>Services</AppointmentInfo>
                    <AppointmentInfo><FiSettings/></AppointmentInfo>
                  </tr>
                </thead>
                <tbody>
                  {
                    appointments.map((appointments) => (
                      <tr>
                        <AppointmentDBInfo>{appointments.AppointmentTicketNo}</AppointmentDBInfo>
                        <AppointmentDBInfo>{appointments.FullName}</AppointmentDBInfo>
                        <AppointmentDBInfo>{appointments.PhoneNo}</AppointmentDBInfo>
                        <AppointmentDBInfo>{appointments.Doctor}</AppointmentDBInfo>
                        <AppointmentDBInfo>{appointments.AppointmentTime}</AppointmentDBInfo>
                        <AppointmentDBInfo>{appointments.AppointmentDate}</AppointmentDBInfo>
                        <AppointmentDBInfo>{appointments.Services}</AppointmentDBInfo>
                        <AppointmentDBInfo>
                          <CancelButton onClick={(e) => handleDelete(appointments.AppointmentID)}>Cancel</CancelButton>
                        </AppointmentDBInfo>
                      </tr>
                    ))
                  }
                </tbody>
            </AppointmentsTable>
            <Margin/>
            <MarginBig/>
            <ButtonBox>
                <Button style={{color: 'green '}} onClick={() => {navigate("/create-appointments")}}>
                Create an Appointment
                </Button>
              </ButtonBox>
          </CreateBox>
        </BoxContainer>
    </Appbox>
  )
}

export default SeeAppointment