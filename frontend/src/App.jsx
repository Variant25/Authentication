import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home'
import Topnav from './components/Topnav'
function App() {


  return (
    <>
     <div className='App'>
<BrowserRouter>
    <Topnav/>
    <div className='pages'>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </div>
</BrowserRouter>
     </div>
    </>
  )
}

export default App
