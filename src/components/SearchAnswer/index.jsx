import PropTypes from 'prop-types'
import pokeballIcon from '../../assets/img/icon-pokeball.svg'
import './styles.css'

export const SearchAnswer = ({ filter = false, length = 0, type = '' }) => {
    return (
        <>
            {filter ? (
                <div className='container-title'>
                    <img src={pokeballIcon} alt='pokeball' className='filtered' />
                    <h3 className='cards-title'>Search results</h3>
                    <p>Showing {length} results for: {type}</p>
                </div> 
            ) : (
                <div className='container-title'>
                    <img src={pokeballIcon} alt='pokeball'  />
                    <h3 className='cards-title'>{length} Pokémons</h3>
                </div>
            )}
        </>
  )
}

SearchAnswer.propTypes = {
    filter: PropTypes.bool,
    length: PropTypes.number,
    type: PropTypes.string,
}