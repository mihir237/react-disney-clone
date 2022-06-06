import React from 'react';
import Home from './component/Home';
import Header from './component/Header';
import Details from './component/Details';
import { Routes, Route, Link } from "react-router-dom";
import './App.css';

function App() {
  return (

    <div className="text-white bg-[#030b17] overflow-x-hidden">
      <Header />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/details' element={<Details/>}/>
      </Routes>
    </div>
  );
}

export default App;
