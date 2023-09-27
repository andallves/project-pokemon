import './styles.css'
import PropTypes from 'prop-types'
import closeIcon from '../../assets/img/close.svg'
import { getPokemonTypeImage } from "../../utils/get-type-image"
import { capitalizeFirstLetter } from '../../utils/captitaliza-first-letter'

export const ModalDetails = ({ pokemonData, isOpen, btnClose }) => {

  const typeImg = getPokemonTypeImage(pokemonData.type)


  return (
    <>
      {isOpen ? console.log('open') : console.log('closed')}
      {isOpen && (
        <div className={`modal-container ${pokemonData.type}`}>
          <div className={isOpen ? "overlay" : ""}></div>
          <div className='box'>
            <button
              className='btn-close'
              onClick={btnClose}
            >
              <img src={closeIcon} alt="close button" />
            </button>
            <div className={`image-modal ${pokemonData.type}`}>
              <div className='icon'>
                <img src={typeImg} alt={pokemonData.type} />
              </div>
              <div className='pokemon-image'>
                <img src={pokemonData.image} alt={pokemonData.name} />
              </div>
            </div>
            <div className="info-modal">
              <div className='name'>
                <h2>{capitalizeFirstLetter(pokemonData.name)}</h2>
                <span>{`#0${pokemonData.code}`}</span>
              </div>
              <ul className="type">
                {pokemonData.types.map((type) => (
                  <li key={Math.random() + type.name}>
                    <span className={`tag-type ${type.type.name}`}>{capitalizeFirstLetter(type.type.name)}</span>
                  </li>

                ))}
              </ul>
              <ul className="about">
                <li>
                  <span>Height</span>
                  <strong>{`${pokemonData.height}m`}</strong>
                </li>
                <li>
                  <span>Weight</span>
                  <strong>{`${pokemonData.weight}kg`}</strong>
                </li>
                <li>
                  <span>Abilities</span>
                  <strong>{capitalizeFirstLetter(pokemonData.abilities)}</strong>
                </li>
              </ul>
              {/* Tirar hardcode do codigo */}
              <div className="weak">
                <h4>Weaknesses</h4>
                <ul className='area-weak'>
                  {pokemonData.weak.map((weak) => (
                    <li
                      key={weak.name + weak.url + Math.random()}
                      className={`tag-type ${weak.name}`}
                    >
                      <span>{capitalizeFirstLetter(weak.name)}</span>
                    </li>

                  ))}
                </ul>
              </div>
              <div className="stats">
                <h5>Stats</h5>
                <div className='all'>
                  {pokemonData.stats.map((item, index) => (
                    <div className='item' key={`${index} ${item.stat.name}`}>
                      <span>{capitalizeFirstLetter(item.stat.name)}</span>
                      <div className='bar-status'>
                        <div className='bar'></div>
                        <ul className='separator'>
                          <li></li>
                          <li></li>
                          <li></li>
                          <li></li>
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

ModalDetails.propTypes = {
  pokemonData: PropTypes.shape({
    abilities: PropTypes.string,
    height: PropTypes.number,
    name: PropTypes.string,
    code: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    stats: PropTypes.array.isRequired,
    weak: PropTypes.array,
    type: PropTypes.string.isRequired,
    types: PropTypes.array,
    weight: PropTypes.number.isRequired,
  }).isRequired,
  isOpen: PropTypes.bool.isRequired,
  btnClose: PropTypes.func.isRequired,
}