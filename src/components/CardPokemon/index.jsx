import PropTypes from 'prop-types'
import './styles.css'
import { useEffect, useState } from 'react'
import { getPokemonTypeImage } from '../../utils/get-type-image'
import { ModalDetails } from '../ModalDetails'
import { capitalizeFirstLetter } from '../../utils/captitaliza-first-letter'

export const CardPokemon = ({ urlPokemon }) => {
  const [pokemonData, setPokemonData] = useState({})
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const loadCard = async () => {
      try {
        const data = await fetch(`${urlPokemon}`)
        const json = await data.json()
        const { abilities, height, id, name, sprites, stats, types, weight } = json

        const weaknessesResponse = await fetch(types[0].type.url)
        const weakJson = await weaknessesResponse.json()
        
        const { double_damage_from } = weakJson.damage_relations
        const infoCard = {
          abilities: abilities[0].ability.name,
          height: height,
          code: id,
          name: name,
          image: sprites.other.dream_world.front_default,
          stats: stats,
          weak: double_damage_from,
          types: types,
          type: types[0].type.name,
          weight: weight,
        }
        setPokemonData(infoCard)
      } catch (err) {
        setPokemonData(undefined)
        throw new Error('Erro', err)
      }
    }
    loadCard()
  }, [urlPokemon])

  const typeImg = getPokemonTypeImage(pokemonData.type)
  const handleOpenCloseModal = () => setOpen(false)

  return (
    <>
      <button
        className={`card-pokemon ${pokemonData.type}`}
        onClick={() => setOpen(true)}

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
            <h3>{capitalizeFirstLetter(pokemonData.name)}</h3>
          </div>
          <div className="icon-type">
            <img src={typeImg} alt={pokemonData.type} />
          </div>
        </div>
      </button>

      <ModalDetails 
        pokemonData={pokemonData} 
        isOpen={open} 
        btnClose={handleOpenCloseModal} 
        />
    </>
  )
}

CardPokemon.propTypes = {
  urlPokemon: PropTypes.string.isRequired,
}