
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SingUp from './components/SingUp/SingUp'
import Login from './components/Login/Login'

function App() {


  return (
    <>

      <Routes>
        <Route path='/' element={<SingUp/>}></Route>
        <Route path='/singup' element={<SingUp/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
      </Routes>


     </>
  )
}

export default App
