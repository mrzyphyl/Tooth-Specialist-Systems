import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Appbox, BoxContainer, Button, ButtonBox, CreateBox, FormBox, Heading, Input, Margin, MarginBig } from './common'

function CreateAppointment() {
  const [AppointmentTicketNo, setAppointmentTicketNo] = useState()
  const [FullName, setFullName] = useState()
  const [PhoneNo, setPhoneNo] = useState()
  const [Doctor, setDoctor] = useState()
  const [AppointmentTime, setAppointmentTime] = useState()
  const [AppointmentDate, setAppointmentDate] = useState()
  const [Services, setServices] = useState()

  const navigate = useNavigate()

  const onSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/appointments', { AppointmentTicketNo, FullName, PhoneNo, Doctor, AppointmentTime, AppointmentDate, Services })
    .then(result => console.log(result))
    .catch(err => console.log(err))
    navigate("/appointments")
  }
  return (
    <Appbox>
      <BoxContainer>
        <CreateBox>
          <Heading>Login</Heading>
          <FormBox onSubmit={onSubmit}>
            <Input 
            type='text' 
            id='AppointmentTicketNo'
            name='AppointmentTicketNo' 
            value={AppointmentTicketNo}
            placeholder='AppointmentTicketNo'
            onChange={(e) => setAppointmentTicketNo(e.target.value)}/>
            <Margin/>
            <Input 
            type='text' 
            id='FullName'
            name='FullName' 
            value={FullName}
            placeholder='FullName'
            onChange={(e) => setFullName(e.target.value)}/>
            <Margin/>
            <Input 
            type='text' 
            id='PhoneNo'
            name='PhoneNo' 
            value={PhoneNo}
            placeholder='PhoneNo'
            onChange={(e) => setPhoneNo(e.target.value)}/>
            <Margin/>
            <Input 
            type='text' 
            id='Doctor'
            name='Doctor' 
            value={Doctor}
            placeholder='Doctor'
            onChange={(e) => setDoctor(e.target.value)}/>
            <Margin/>
            <Input 
            type='text' 
            id='AppointmentTime'
            name='AppointmentTime' 
            value={AppointmentTime}
            placeholder='AppointmentTime'
            onChange={(e) => setAppointmentTime(e.target.value)}/>
            <Margin/>
            <Input 
            type='text' 
            id='AppointmentDate'
            name='AppointmentDate' 
            value={AppointmentDate}
            placeholder='AppointmentDate'
            onChange={(e) => setAppointmentDate(e.target.value)}/>
            <Margin/>
            <Input 
            type='text' 
            id='Services'
            name='Services' 
            value={Services}
            placeholder='Services'
            onChange={(e) => setServices(e.target.value)}/>
            <Margin/>
            <MarginBig/>
            <ButtonBox>
            <Button style={{color: 'green '}}>
              Add Appointment
              </Button>
              <Button style={{color: 'red '}} onClick={() => {navigate("/appointments")}}>
              Cancel
              </Button>
            </ButtonBox>
          </FormBox>
        </CreateBox>
      </BoxContainer>
    </Appbox>
  )
}

export default CreateAppointment