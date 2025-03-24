import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import MyAppointment from './pages/MyAppointments'
import Appointment from './pages/Appointment'
import Navbar from './components/Navbar'
import Doctors from './pages/Doctors'
import Login from './pages/Login'
import About from './pages/About'
import { ContainerWithChildren } from 'postcss/lib/container'
import MyProfile from './pages/MyProfile'
import contact from './pages/contact'
import Contact from './pages/contact'
import Footer from './components/Footer'
import MyAppointments from './pages/MyAppointments'

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar/>
  
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/doctors' element={<Doctors/>} />
        <Route path='/doctors/:speciality' element={<Doctors/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/my-profile' element={<MyProfile/>} />
        <Route path='/my-appointments' element={<MyAppointments/>}/>
        <Route path='/appointment' element={<Appointment/>} />
        <Route path='/appointment/:docId' element={<Appointment/>}/>

      </Routes>
      <Footer/>
    </div>
  )
}

export default App