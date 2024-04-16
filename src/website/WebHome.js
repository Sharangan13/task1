import React from 'react'
import Home from '../components/Home'
import Page1 from '../components/Page1'
import Header from '../components/Header'

export default function WebHome() {
  return (
    <div>
    <div className='homeBgImg'>
      <Header/>
        <Home/>
        </div>
        <Page1/>
    </div>
    
  )
}
