import PropTypes from 'prop-types'
import './styles.css'
import { Search } from '@styled-icons/evil/Search'

export const SearchPokemon = ({ textLabel, handleChange, searchValue, placeholder }) => {
    return (
        <div className='container-search'>
            <label className='label-search-pokemon' htmlFor='input-search'>
                {textLabel}
            </label>
            <div className='container-input'>
                <input 
                    onChange={(e) => handleChange(e)}
                    type='search' 
                    value={searchValue}
                    placeholder={placeholder}
                    name='input-search'
                    autoFocus
                />
                <button type='submit'>
                    <Search />
                </button>
            </div>
        </div>
    )
}

SearchPokemon.propTypes = {
    textLabel: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    searchValue: PropTypes.string.isRequired,
}
