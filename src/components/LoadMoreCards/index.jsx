import PropTypes from 'prop-types'
import './styles.css'

export const LoadMoreCards = ({ buttonText = "Load More Cards" }) => {
  return (
    <div className='btn-loadmore-container'>
      <button className='btn-loadmore'> 
        {buttonText}
      </button>
    </div>
  )
}

LoadMoreCards.propTypes = {
  buttonText: PropTypes.string,
}