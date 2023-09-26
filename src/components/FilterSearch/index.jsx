import './styles.css'
import PropTypes from 'prop-types'
import { getPokemonTypeImage } from '../../utils/get-type-image'

export const FilterSearch = ({ typeName, handleClickFilter }) => {
    const typeImg = getPokemonTypeImage(typeName)

    return (
        <div className='container-types'>
        <button 
            type='button'
            onClick={() => handleClickFilter(typeName)}
        >
            <img src={typeImg} />
            {typeName}
        </button>
        </div>
    )
}

FilterSearch.propTypes = {
  typeName: PropTypes.string.isRequired,
  handleClickFilter: PropTypes.func.isRequired
}