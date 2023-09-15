import React, { useState } from 'react'
import axios from 'axios'
import { Appbox, BoxContainer, Button, ButtonBox, CreateBox, FormBox, Heading, Input, Margin, MarginBig } from './common'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

function LoginForm() {
  const [UserEmail, setEmail] = useState()
  const [UserPassword, setPassword] = useState()

  const navigate = useNavigate()

  const onSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/users/login', { UserEmail, UserPassword })
    .then(result => console.log(result))
    .catch(err => console.log(err))
    navigate("/appointments")
  }

  return (
    <ContentBox>
      <Appbox>
        <BoxContainer>
          <CreateBox>
            <Heading>Login</Heading>
            <FormBox onSubmit={onSubmit}>
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
                <Button onClick={() => {navigate("/sign-up")}}>
                Create User
                </Button>
                <Button style={{color: 'green '}}>
                Login
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

export default LoginForm