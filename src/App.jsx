import { useEffect } from 'react';
import './App.css'
import { Header } from './layout/Header'
import { useState } from 'react';
import { CardPokemon } from './components/CardPokemon'
import { SearchPokemon } from './components/SearchPokemon'
import { Footer } from './layout/Footer';
import { FilterSearch } from './components/FilterSearch';
import { SearchAnswer } from './components/SearchAnswer';
import { LoadMoreCards } from './components/LoadMoreCards';

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [pokemonType, setPokemonType] = useState([])
  const [searchValue, setSearchValue] = useState('')

  // puxar types da api
   
  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon')
      .then((response) => response.json())
      .then((data) => {
        const { results } = data;
        setPokemons(results)
        console.log(results)
      })
      .catch((err) => {
        console.log("Error: ", err) 
      })
  
  }, [])

  useEffect(() => {
    const typeLoad = async () => {
      try {
        const dataType = await fetch('https://pokeapi.co/api/v2/type')
        const jsonType = await dataType.json()
        setPokemonType(jsonType.results)
        console.log(jsonType.results)
      } catch (err) {
        throw new Error('Error: ', err)
      }
    }
    typeLoad()
  }, [])

  const handleChangeSearchValue = (e) => {
    const { value } = e.target
    setSearchValue(value)
  }

  return (
    <main>
      <Header />
      <SearchPokemon 
        textLabel='Select your Pokemon'
        placeholder='Search name or code'
        handleChange={() => handleChangeSearchValue()}
        searchValue={searchValue}
      />
      <div className='container-section'>
        <div className='container-filter'>
          {pokemonType.length > 0 &&
            pokemonType.map((type) => (
            <FilterSearch key={type.url} titleType={type?.name}/>
          ))}
        </div>

        <div className='container-pokemons'>
          <SearchAnswer cardTitle={'Pokemon'} />
          <div className='container-pokemons-card'>
            {pokemons.length > 0  &&
              pokemons.map((pokemon) => (
              <CardPokemon
                key={pokemon.url} 
                urlPokemon={pokemon.url}
              />  
            ))}
          </div>

          <LoadMoreCards buttonText='Load more Pokémons' />
        </div>
      </div>

      <Footer />
    </main>
  )
}

export default App
