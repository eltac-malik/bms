import React,{useState,useEffect} from 'react'
import Table from './views/components/TableUI/Table'
import './App.css';
import {useQuery} from 'react-query'
import {getAxios} from './common/axios'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Home from 'views/Home'
import Profile from 'views/Profile';
import Settings from 'views/Settings'
import Sidebar from 'views/components/Sidebar'
import Bottombar from 'views/components/Bottombar'

function App() {

  const [left,setLeft] = useState(false)
  const [bottom,setBottom] = useState(false)
  
  return (
    <div className="App">
     <Router>
      <Sidebar left={left} setLeft={setLeft}/>
      <Bottombar bottom={bottom} setBottom={setBottom}/>
      <Routes>
        <Route path='/' exact element={<Home setLeft={setLeft} setBottom={setBottom}/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/settings' element={<Settings/>}/>
      </Routes>
     </Router>
    </div>
  );
}

export default App;
