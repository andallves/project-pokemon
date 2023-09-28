import './App.css'
import { useState, useCallback, useEffect } from 'react';
import { ScaleLoader } from 'react-spinners'
import { Header } from './layout/Header'
import { Footer } from './layout/Footer';
import { CardPokemon } from './components/CardPokemon'
import { SearchPokemon } from './components/SearchPokemon'
import { FilterSearch } from './components/FilterSearch';
import { SearchAnswer } from './components/SearchAnswer';
import { LoadMoreCards } from './components/LoadMoreCards';
import { loadPokemonsTypes } from './utils/load-types';
import { loadPokemons } from './utils/load-pokemon';

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [allPokemons, setAllPokemons] = useState([])
  const [page, setPage] = useState(0)
  const [pokemonsPerPage] = useState(9)
  const [pokemonType, setPokemonType] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [filter, setFilter] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleLoadPokemons = useCallback(async (page, pokemonsPerPage) => {
    setIsLoading(true)
    const pokemonsWithTypes = await loadPokemons()
    const pokemonTypeResponse = await loadPokemonsTypes()
    setPokemons(pokemonsWithTypes.slice(page, pokemonsPerPage))
    setPokemonType(pokemonTypeResponse)
    setAllPokemons(pokemonsWithTypes)
    setIsLoading(false)
  }, [])

  useEffect(() => {
    handleLoadPokemons(0, pokemonsPerPage)
  }, [handleLoadPokemons, pokemonsPerPage])

  const LoadMorePokemons = () => {
    setIsLoading(true)
    const nextPage = page + pokemonsPerPage
    const nextCards = allPokemons.slice(nextPage, nextPage + pokemonsPerPage)
    pokemons.push(...nextCards)
    setPokemons(pokemons)
    setPage(nextPage)
    setIsLoading(false)
  }

  const handleChangeSearchValue = (e) => {
    e.preventDefault()
    setIsLoading(true)
    const { value } = e.target
    setSearchValue(value)
    setIsLoading(false)
  }

  const noMorePokemons = page + pokemonsPerPage >= allPokemons.length
  const searchedPokemons = searchValue ? allPokemons.filter((pokemon) => {
    return pokemon.name.toLowerCase().includes(
      searchValue.toLowerCase()
    )
  })
    : pokemons


  const filteredPokemonByType = (typeName, all = true) => {
    setIsLoading(true)
    const filteredPokemon = all ? 
      allPokemons.filter((pokemon) => {
        return pokemon.type.toLowerCase().includes(
          typeName.toLowerCase()
        )
      }) 
    : allPokemons.splice(0, pokemonsPerPage)
    setFilter(true)
    setPokemons(filteredPokemon)
    setIsLoading(false)
  }

  return (
    <main className="main">
      <Header />

      <SearchPokemon
        textLabel='Select your Pokemon'
        placeholder='Search name or code'
        handleChange={handleChangeSearchValue}
        searchValue={searchValue}
      />
      <div className='container-section'>
        <div className='container-filter'>

          <FilterSearch
            typeName={'all'}
            page={0}
            pokemonsPerPage={9}
            handleClickFilter={handleLoadPokemons}
            all={false}
          />

          {pokemonType.length > 0 &&
            pokemonType.map((type) => (
              <FilterSearch
                key={type.url}
                typeName={type.name}
                handleClick={filteredPokemonByType}
              />
            ))}
        </div>

        <div className='container-pokemons'>
          {filter ? (
            <SearchAnswer
              filter={filter}
              length={searchedPokemons.length}
              type={pokemons.type}
            />
          ) : (
            <SearchAnswer
              length={allPokemons.length}
            />
          )}
          <div className='container-pokemons-card' id='cards'>

            {searchedPokemons.length > 0 &&
              searchedPokemons.map((pokemon) => (
                <CardPokemon
                  key={pokemon.url + pokemon.name}
                  urlPokemon={pokemon.url}
                />
              ))}
          </div>

          {isLoading ? (
            <div className='spinners'>
              <ScaleLoader color="#c41111" width={7} />
            </div>
          ) : (
            <LoadMoreCards
              buttonText='Load more Pokémons'
              handleClickLoadMore={LoadMorePokemons}
              disabled={noMorePokemons}
            />
          )}

        </div>
      </div>

      <Footer />
    </main>
  )
}

export default App
