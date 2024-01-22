import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import SearchNav from './Components/SearchNav'
import Main from './Components/Main'
import Footer from './Components/Footer'


function App() {
  const [pokemon, setPokemon] = useState(null)

  return (
    <div className="app">
      <Header />
      <SearchNav setPokemon={setPokemon} />
      <Main pokemon={pokemon}/>
      <Footer />
    </div>
  )
}

export default App;
