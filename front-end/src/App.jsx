import './App.css'
import Login from './pages/login/LogIn';
import SignUp from './pages/signup/SignUp'
import Home from './pages/home/Home';
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div className='p-4 h-screen flex items-center justify-center text-white'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </div>
  )
}

export default App
