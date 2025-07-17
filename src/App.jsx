import { Routes, Route } from 'react-router'

import Home from './pages/Home'
import About from './pages/About'
import Header from './components/Header'
import HeaderTopBar from './components/HeaderTopBar'
import Footer from './components/Footer'
import Login from './pages/Login'
import Register from './pages/Register'

const App = () => {
  return (
    <>
    {/* <HeaderTopBar/> */}
    <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
