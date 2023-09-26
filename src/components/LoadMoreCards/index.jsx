import PropTypes from 'prop-types'
import './styles.css'

export const LoadMoreCards = ({ buttonText = "Load more", handleClickLoadMore, disabled = false }) => {
  return (
    <div className='btn-loadmore-container'>
        <button 
            className='btn-loadmore'
            onClick={handleClickLoadMore}
            disabled={disabled}
        > 
            {buttonText}
        </button>
    </div>
  )
}

LoadMoreCards.propTypes = {
  buttonText: PropTypes.string,
  handleClickLoadMore: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
}