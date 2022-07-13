import React from 'react';
import { HashRouter, Route, Routes as Rout} from 'react-router-dom';
import Home from './pages/Home/';
import Repo from './pages/Repo/';
import Contact from './pages/Contact'

export default function Routes() {
  return (
    <div>
        <Rout>
            <Route path='/home' element={<Home/>} index/>
            <Route path='/repo' element={<Repo/>}/>
            <Route path='/contato' element={<Contact/>}/>
        </Rout>
    </div>
  )
}
