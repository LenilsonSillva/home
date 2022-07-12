import React from 'react'
import NavBar from './Home/NavBar';
import FNote from './Home/FNote';
import Routes from '../Routes';
import { BrowserRouter } from 'react-router-dom';

export default function Pages() {
  return (
      <div style={{ backgroundColor: 'black'}}>
          <NavBar/>
            <Routes/>
          <FNote/>
      </div>
  )
}
