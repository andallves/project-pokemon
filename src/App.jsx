import './App.css'
import { useCallback, useEffect, useState } from 'react';
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

    const handleLoadPokemons = useCallback(async (page, pokemonsPerPage) => {
        const pokemonsWithTypes = await loadPokemons()
        const pokemonTypeResponse = await loadPokemonsTypes()
        setPokemons(pokemonsWithTypes.slice(page, pokemonsPerPage))
        setPokemonType(pokemonTypeResponse)
        setAllPokemons(pokemonsWithTypes)
    }, [])

    useEffect(() => {
        handleLoadPokemons(0, pokemonsPerPage)
    }, [handleLoadPokemons, pokemonsPerPage])

    const LoadMorePokemons = () => {
        const nextPage = page + pokemonsPerPage
        const nextCards = allPokemons.slice(nextPage, nextPage + pokemonsPerPage)
        pokemons.push(...nextCards)
        setPokemons(pokemons)
        setPage(nextPage)
    }

    const handleChangeSearchValue = (e) => {
        e.preventDefault()
        const { value } = e.target
        setSearchValue(value)
    }

    const noMorePokemons = page + pokemonsPerPage >= allPokemons.length
    const searchedPokemons = searchValue ?
        allPokemons.filter((pokemon) => {
            return pokemon.name.toLowerCase().includes(
                searchValue.toLowerCase()
            )
        })
    : pokemons

    const filteredPokemonByType = (typeName) => {
        const filteredPokemon = allPokemons.filter((pokemon) => {
            return pokemon.type.toLowerCase().includes(
                typeName.toLowerCase()
            )
        })
        setFilter(true)
        setPokemons(filteredPokemon)
    }

    return (
        <main>
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
                        handleClickFilter={handleLoadPokemons(0, pokemonsPerPage)}
                    />
                    {pokemonType.length > 0 &&
                    pokemonType.map((type) => (
                        <FilterSearch 
                            key={type.url} 
                            typeName={type.name}
                            handleClickFilter={filteredPokemonByType}
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
                    <div className='container-pokemons-card'>
                        {searchedPokemons.length > 0 &&
                        searchedPokemons.map((pokemon) => (
                            <CardPokemon
                                key={pokemon.url + pokemon.name} 
                                urlPokemon={pokemon.url}
                            />  
                        ))}
                    </div>

                    <LoadMoreCards 
                        buttonText='Load more Pokémons' 
                        handleClickLoadMore={LoadMorePokemons} 
                        disabled={noMorePokemons}
                    />
                </div>
            </div>

            <Footer />
        </main>
    )
}

export default App
