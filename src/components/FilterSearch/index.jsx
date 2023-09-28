import './styles.css'
import PropTypes from 'prop-types'
import { getPokemonTypeImage } from '../../utils/get-type-image'
import { capitalizeFirstLetter } from '../../utils/captitaliza-first-letter'

export const FilterSearch = ({
  typeName = '',
  handleClick,
}) => {
  const typeImg = getPokemonTypeImage(typeName)
  return (
    <>
      <div className='container-types desktop'>
        <button
          type='button'
          onClick={() => handleClick(typeName)}
        >
          <img src={typeImg} />
          {capitalizeFirstLetter(typeName)}
        </button>
      </div>

    </>
  )
}

FilterSearch.propTypes = {
  typeName: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
}