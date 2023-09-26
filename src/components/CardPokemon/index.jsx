import PropTypes from 'prop-types'
import './styles.css'
import { useEffect, useRef, useState } from 'react'
import { getPokemonType } from '../../utils/get-type-name'
// import GrassType from '../../assets/img/icon-types/grass.svg'

export const CardPokemon = ({ urlPokemon }) => {
    const [pokemonData, setPokemonData] = useState({})
    const isMounted = useRef(true)

    useEffect(() => {
        const loadCard = async () => {
            try{
                const data = await fetch(`${urlPokemon}`)
                const json = await data.json()
                const { name, id, sprites, types } = json

                const infoCard = {
                    name: name,
                    code: id,
                    image: sprites.other.dream_world.front_default,
                    type: types[0].type.name,
                }

                setPokemonData(infoCard)
            } catch (err) {
                setPokemonData(undefined)
                throw new Error('Erro', err)
            }
        }

        if (isMounted.current === true) {
            loadCard()
        }

        return () =>{
            isMounted.current = false
        }
    }, [urlPokemon])

    const typeImg = getPokemonType(pokemonData.type)

    return (
       <button className={`card-pokemon ${pokemonData.type}`}>
            <div className="image">
                <img   
                    className="thumb-img" 
                    src={pokemonData?.image} 
                    alt={pokemonData.name} 
                />
            </div>
            <div className="info"> 
                <div className="text">
                    <span>{`#00${pokemonData.code}`}</span>
                    <h3>{pokemonData.name}</h3>
                </div>
                <div className="icon-type">
                    <img src={typeImg} alt={pokemonData.type} />
                </div> 
            </div>
       </button> 
    )
}

CardPokemon.propTypes = {
    urlPokemon: PropTypes.string.isRequired, 
}