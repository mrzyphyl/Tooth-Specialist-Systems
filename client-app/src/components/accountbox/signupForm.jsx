import React, { useState } from 'react'
import { Appbox, Button, ButtonBox, CreateBox, FormBox, Heading, Input, Margin, MarginBig } from './common'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'

function SignupForm() {
  const [UserFName, setFName] = useState()
  const [UserLName, setLName] = useState()
  const [Birthday, setBDay] = useState()
  const [Age, setAge] = useState()
  const [UserEmail, setEmail] = useState()
  const [UserPassword, setPassword] = useState()



  const navigate = useNavigate()

  const onSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/users', { UserFName, UserLName, Birthday, Age, UserEmail, UserPassword })
    .then(result => console.log(result))
    .catch(err => console.log(err))
    navigate("/appointments")
  }

  return (
    <ContentBox>
      <Appbox>
          <BoxContainer>
            <CreateBox>
              <Heading>Sign Up</Heading>
              <FormBox onSubmit={onSubmit}>
                <Input 
                type='text' 
                id='First Name'
                name='First Name' 
                value={UserFName}
                placeholder='First Name'
                onChange={(e) => setFName(e.target.value)}/>
                <Margin/>
                <Input 
                type='text' 
                id='Last Name'
                name='Last Name' 
                value={UserLName}
                placeholder='Last Name'
                onChange={(e) => setLName(e.target.value)}/>
                <Margin/>
                <Input 
                type='text' 
                id='Birthday'
                name='Birthday' 
                value={Birthday}
                placeholder='Birthday yy-mm-dd'
                onChange={(e) => setBDay(e.target.value)}/>
                <Margin/>
                <Input 
                type='text' 
                id='Age'
                name='Age' 
                value={Age}
                placeholder='Age'
                onChange={(e) => setAge(e.target.value)}/>
                <Margin/>
                <Input 
                type='text' 
                id='Email'
                name='Email' 
                value={UserEmail}
                placeholder='Email'
                onChange={(e) => setEmail(e.target.value)}/>
                <Margin/>
                <Input 
                type='text' 
                id='Password'
                name='Password' 
                value={UserPassword}
                placeholder='Password'
                onChange={(e) => setPassword(e.target.value)}/>
                <Margin/>
                <MarginBig/>
                <ButtonBox>
                  <Button>
                  Create User
                  </Button>
                  <Button style={{color: 'red'}} onClick={() => {navigate("/")}}>
                  Cancel
                  </Button>
                </ButtonBox>
              </FormBox>
            </CreateBox>
          </BoxContainer>
      </Appbox>
    </ContentBox>
  )
}

const ContentBox = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const BoxContainer = styled.div `
    height: 90%;
    width: 93%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 19px;
    background-color: #fff;
    box-shadow: 0 2px 2px 2px rgba(15, 15, 15, 0.28);
`

export default SignupForm