import PropTypes from 'prop-types'
import './styles.css'

export const CardPokemon = ({ srcImg, pokemonName, pokemonId, pokemonType, srcImgType }) => {
    return (
       <div className="card-pokemon">
            <div className="container-image">
                <img   
                    className="pokemon-image" 
                    src={srcImg} 
                    alt={pokemonName} 
                />
            </div>
            <div className="container-title">
                <div className="pokemon-title">
                    <span>{pokemonId}</span>
                    <h3>{pokemonName}</h3>
                </div>
                <div className="pokemon-type">
                    <img src={srcImgType} alt="" />
                </div>
            </div>
       </div> 
    )
}

CardPokemon.propTypes = {
    srcImg: PropTypes.string.isRequired, 
    pokemonName: PropTypes.string.isRequired, 
    pokemonId: PropTypes.string.isRequired, 
    pokemonType: PropTypes.string.isRequired, 
    srcImgType: PropTypes.string.isRequired,
}