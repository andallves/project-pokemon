import PropTypes from 'prop-types'
import './styles.css'
import { useEffect, useRef, useState } from 'react'
import { getPokemonTypeImage } from '../../utils/get-type-image'
import { ModalDetails } from '../ModalDetails'

export const CardPokemon = ({ urlPokemon }) => {
    const [pokemonData, setPokemonData] = useState({})
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)
    const isMounted = useRef(true)

    useEffect(() => {
        const loadCard = async () => {
            try{
                const data = await fetch(`${urlPokemon}`)
                const json = await data.json()
                const { abilities, height, name, id, sprites, stats, types, weight } = json

                const infoCard = {
                    abilities: abilities[0].name,
                    height: height,
                    name: name,
                    code: id,
                    image: sprites.other.dream_world.front_default,
                    stats: stats,
                    type: types[0].type.name,
                    weight: weight,
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

    const typeImg = getPokemonTypeImage(pokemonData.type)

    return (
        <>
            <button 
                className={`card-pokemon ${pokemonData.type}`}
                onClick={handleOpen}
                
            >
                <div className="image">
                    <img   
                        className="thumb-img" 
                        src={pokemonData.image} 
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

            <ModalDetails pokemonData={pokemonData} isOpen={open} btnClose={handleClose} />
       </>
    )
}

CardPokemon.propTypes = {
    urlPokemon: PropTypes.string.isRequired, 
}