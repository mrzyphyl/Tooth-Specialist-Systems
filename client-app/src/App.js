import { Route, Routes } from "react-router-dom";
import LoginPage from './pages/loginpage/loginPage'
import SignupPage from './pages/signuppage/signupPage'
import CreateAppointments from './pages/appointmentspage/createAppointmentPage'
import Appointmens from './pages/appointmentspage/seeAppointmentPage'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' exact element={<LoginPage/>} />
        <Route path='/sign-up' exact element={<SignupPage/>} />
        <Route path='/create-appointments' exact element={<CreateAppointments/>} />
        <Route path='/appointments' exact element={<Appointmens/>} />
      </Routes>
    </>
  );
}

export default App;
