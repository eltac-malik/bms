import React,{useState,useEffect} from 'react'
import './App.css';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Home from 'views/Home'
import Profile from 'views/Profile';
import Settings from 'views/Settings'
import Employeer from 'views/Employeer'
import Sidebar from 'views/components/Sidebar'
import Bottombar from 'views/components/Bottombar'
import Navigation from 'views/components/Navigation'
import SingleEmployee from 'views/Employeer/SingleEmployee/SingleEmployee'
import Salary from 'views/Salary'

function App() {

  const [left,setLeft] = useState(false)
  const [bottom,setBottom] = useState(false)
  
  return (
    <div className="App">
     <Router>
      
      <Navigation setLeft={setLeft} setBottom={setBottom}/>
      <Sidebar left={left} setLeft={setLeft}/>
      <Bottombar bottom={bottom} setBottom={setBottom}/>

      <Routes>
        <Route path='/' exact element={<Home setLeft={setLeft} setBottom={setBottom}/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/settings' element={<Settings/>}/>
        <Route path='/employeer' element={<Employeer/>}/>
        <Route path='/employeer/:id' element={<SingleEmployee/>}/>
        <Route path='/add-salary' element={<Salary/>}/>
      </Routes>
     </Router>
    </div>
  );
}

export default App;
