import PropTypes from 'prop-types'
import './styles.css'

export const SearchPokemon = ({ textLabel, handleChange, searchValue, placeholder }) => {
    return (
        <div className='container-input-search'>
            <label className='label-search-pokemon' htmlFor='input-search'>
                {textLabel}
            </label>
            <input 
                className='input-search-pokemon' 
                onChange={handleChange}
                type='search' 
                value={searchValue}
                placeholder={placeholder}
                name='input-search'
            />
        </div>
    )
}

SearchPokemon.propTypes = {
    textLabel: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    searchValue: PropTypes.string.isRequired,
}
