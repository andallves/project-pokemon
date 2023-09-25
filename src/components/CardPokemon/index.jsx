import PropTypes from 'prop-types'
import './styles.css'
import { useEffect, useRef, useState } from 'react'
import GrassType from '../../assets/img/icon-types/grass.svg'

export const CardPokemon = ({ urlPokemon }) => {
    const [pokemonData, setPokemonData] = useState({})
    const isMounted = useRef(true)

    useEffect(() => {
        const load = async () => {
            try{
                const data = await fetch(`${urlPokemon}`)
                const json = await data.json()
                setPokemonData(json)
            } catch (err) {
                setPokemonData(undefined)
                throw new Error('Erro', err)
            }
        }

        if (isMounted.current === true) {
            load()
        }

        return () =>{
            isMounted.current = false
        }
    }, [urlPokemon])


    const getPokemonType = (pokemonType) => {
        switch(pokemonType) {
            case "grass":
                return GrassType
        }
        return console.log('err')
    }

    return (
       <button className="card-pokemon">
            <div className="container-image">
                <img   
                    className="pokemon-image" 
                    src={pokemonData?.sprites?.front_default} 
                    alt={pokemonData.name} 
                />
            </div>
            <div className="container-title">
                <div className="pokemon-title">
                    <span>{`#00${pokemonData.id}`}</span>
                    <h3>{pokemonData.name}</h3>
                </div>
                <div className="pokemon-type">
                    <img src={() => getPokemonType('grass')} alt="" />
                </div> 
            </div>
       </button> 
    )
}

CardPokemon.propTypes = {
    urlPokemon: PropTypes.string.isRequired, 
}