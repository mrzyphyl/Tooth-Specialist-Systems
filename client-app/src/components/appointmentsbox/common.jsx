import { styled } from "styled-components";

export const Appbox = styled.div `
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const BoxContainer = styled.div `
    height: 100%;
    width: 93%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 19px;
    background-color: #fff;
    box-shadow: 0 2px 2px 2px rgba(15, 15, 15, 0.28);
`

export const CreateBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  height: 100%;
  margin-top: 5px;
`

export const Heading = styled.h1`
  font-size: 30px;
`

export const ButtonBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const Button = styled.button`
  color: black;
  font-size: 20px;
  width: 150px;
  height: 60px;
`

export const FormBox = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  height: 90%;
`

export const Input = styled.input`
  width: 60%;
  height: 30px;
`

export const Margin = styled.div`
  height: 3px;
`

export const MarginBig = styled.div`
  height: 20px;
`

export const SubjectBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  margin-bottom: 5px; 
`

export const AppointmentsTable = styled.table`
  width: 100%
`

export const AppointmentInfo = styled.th`
  font-size: 20px;
  color: black;
`

export const AppointmentDBInfo = styled.td`
  font-size: 20px;
  color: black;
`

export const TDButton = styled.button`
  color: white;
  background-color: #4ba160;
  font-size: 20px;
  width: 70px;
  height: 25px;
`

export const CancelButton = styled.button`
  color: white;
  background-color: #df2e2e;
  font-size: 20px;
  width: 80px;
  height: 25px;
`