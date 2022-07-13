import React from 'react'
import NavBar from './Home/NavBar';
import FNote from './Home/FNote';
import Routes from '../Routes';

export default function Pages() {
  return (
      <div style={{ backgroundColor: 'black'}}>
          <NavBar/>
            <Routes/>
          <FNote/>
      </div>
  )
}
