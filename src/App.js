import React from 'react';
import Login from './pages/Login'

// import Blogs from './Blogs'
import Dashboard from '../src/pages/Dashboard'
import ListPrinting from '../src/components/ListPrinting'
import SubjectMapping from '../src/components/SubjectMapping'
import GenerateLetters from './components/GenerateLetters';
// import Home from './Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />}></Route>
        {/* <Route path='/' element={<Blogs />}></Route> */}

        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="/dashboard" element={<ListPrinting />} />
          <Route path="/dashboard/Listprinting" element={<ListPrinting />} />
          <Route path="/dashboard/SubjectMapping" element={<SubjectMapping />} />
          <Route path="/dashboard/GenerateLetters" element={<GenerateLetters/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;