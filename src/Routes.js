import React from 'react';
import { HashRouter, Route, Routes as Rout} from 'react-router-dom';
import Home from './pages/Home/';
import Repo from './pages/Repo/';
import Contact from './pages/Contact'

export default function Routes() {
  return (
    <div>
        <Rout>
            <Route path='/' element={<Home/>}/>
            <Route path='/Repo' element={<Repo/>}/>
            <Route path='/Contato' element={<Contact/>}/>
        </Rout>
    </div>
  )
}
