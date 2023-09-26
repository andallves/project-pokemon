import './styles.css'
import PropTypes from 'prop-types'
import closeIcon from '../../assets/img/close.svg'
import { getPokemonTypeImage } from "../../utils/get-type-image"

export const ModalDetails = ({ pokemonData, isOpen, btnClose }) => {

    const typeImg = getPokemonTypeImage(pokemonData.type)

    return (
        <>
            {isOpen && (
                <div className="modal-container">
                    <button 
                        className='btn-close'
                        onClick={btnClose}
                    >
                        <img src={closeIcon} alt="close button" />
                    </button>
                    <div className={`image ${pokemonData.type}`}>
                        <div className='type'>
                            <img className='type' src={typeImg} alt={pokemonData.type}/>
                        </div>
                        <div className='pokemon-image'>
                            <img src={pokemonData.image} alt="" />
                        </div>
                    </div>
                    <div className="info">
                        <div>
                            <h1>PokemonName</h1>
                            <span>#001</span>
                        </div>
                        <div className="types">
                            <span>Grass</span>
                        </div>
                        <div className="abilities">
                            <div>
                                <h3>Height</h3>
                                <span>0.7m</span>
                            </div>
                            <div>
                                <h3>Weight</h3>
                                <span>6.9kg</span>
                            </div>
                            <div>
                                <h3>Abilities</h3>
                                <span>Overgrow</span>
                            </div>
                        </div>
                        <div className="weak">

                        </div>
                        <div className="stats">

                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

ModalDetails.propTypes = {
    pokemonData: PropTypes.shape({
        abilities: PropTypes.string.isRequired,
        height: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        code: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        stats: PropTypes.array.isRequired,
        type: PropTypes.string.isRequired,
        weight: PropTypes.number.isRequired,
    }).isRequired,
    isOpen: PropTypes.bool.isRequired,
    btnClose: PropTypes.func.isRequired,
}