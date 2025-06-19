import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import PremiumFlights from './components/PremiumFlights'
import SearchFlights from './components/SearchFlights'

function App() {


  return (
    <>
    <Header />
      <div className=' w-full  pt-20 bg-slate-100'>
        <PremiumFlights/>
        <SearchFlights />
        
      </div>
      
    </>
  )
}

export default App
