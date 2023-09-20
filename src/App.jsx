import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './layout/Header'
import { SearchPokemon } from './components/SearchPokemon'

function App() {

  return (
    <main>
      <Header />
      <SearchPokemon />
    </main>
  )
}

export default App
