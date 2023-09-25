import PropTypes from 'prop-types'
import './styles.css'

export const SearchAnswer = ({ cardTitle }) => {
  return (
    <div className='container-title'>
            <h3 className='cards-title'>{cardTitle}</h3>
    </div>
  )
}

SearchAnswer.propTypes = {
  cardTitle: PropTypes.string.isRequired,
}