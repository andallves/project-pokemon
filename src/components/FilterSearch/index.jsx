import './styles.css'
import PropTypes from 'prop-types'
import { getPokemonTypeImage } from '../../utils/get-type-image'
import { capitalizeFirstLetter } from '../../utils/captitaliza-first-letter'

export const FilterSearch = ({ 
  typeName = '', 
  handleClick,
  all = true
}) => {
  const typeImg = getPokemonTypeImage(typeName)
  return (
    <div className='container-types'>
      <button
        type='button'
        onClick={() => handleClick(typeName, all)}
      >
        <img src={typeImg} />
        {capitalizeFirstLetter(typeName)}
      </button>
    </div>
  )
}

FilterSearch.propTypes = {
  typeName: PropTypes.string,
  page: PropTypes.number,
  pokemonPerPage: PropTypes.number,
  all: PropTypes.bool,
  handleClick: PropTypes.func.isRequired,
}