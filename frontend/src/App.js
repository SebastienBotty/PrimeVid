import React, {useEffect,useState} from 'react'
import {Routes, Route} from 'react-router-dom'

import Slider from './components/Slider/Slider';
import Slider2 from './components/Slider2/Slider2'
import Navbar from './components/Navbar/Navbar';

import Series from './Routes/Series';
import Films from './Routes/Films'
import Genres from './Routes/Genres/Genres';


import './App.css';

function App() {
 

  return (
   
    <div className="App">
      <Routes>
        <Route path='/' element={<Films/>}/>
        <Route path='/Series' element={<Series/>}/>
        <Route path='/Films' element={<Films/>}/>
        <Route path='/Genres' element={<Genres/>}></Route>
        <Route path='/Genres/:genre' element={<Genres/>}></Route>
      </Routes>
    
    </div>
  );
}

export default App;
