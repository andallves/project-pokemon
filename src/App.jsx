import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './layout/Header'

function App() {

  return (
    <main>
      <Header />
      <div>
        <h3>Select your Pokémon</h3>
        <input type='text' className='searchPokemon' placeholder='Search name or code'/>
      </div>
    </main>
  )
}

export default App
