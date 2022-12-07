import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'


// COMPONENTS
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Card from './components/Card'

export default function App() { 
  return (      
    <BrowserRouter>
      <div className='App'>
        <Navbar />
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
        <Route path='/card/:user' component={Card} />
      </div>
    </BrowserRouter>
  )
}
