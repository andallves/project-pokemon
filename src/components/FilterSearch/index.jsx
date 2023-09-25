import PropTypes from 'prop-types'
import './styles.css'

export const FilterSearch = ({ titleType }) => {
  return (
    <div className='container-types'>
      <button type='button'>
        <img src={`../../assets/img/icon-types/${titleType}.svg`} />
        {titleType}
      </button>
    </div>
  )
}

FilterSearch.propTypes = {
  titleType: PropTypes.string.isRequired,
}