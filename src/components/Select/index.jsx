import { useState } from 'react'
import { capitalizeFirstLetter } from '../../utils/captitaliza-first-letter'
import './style.css'
import PropTypes from 'prop-types'

export const Select = ({
  name = '',
  text = '',
  options,
  filterPokemon }) => {

  const [selectType, setSelectType] = useState('')

  const handleChange = (e) => {
    e.preventDefault()
    setSelectType(e.target.value)
    filterPokemon(selectType)
  }

  return (
    <div className='select-container'>
      <label>{text}:</label>
      <select
      
        name={name}
        onChange={handleChange}
        value={selectType || ''}
      >
        <option value={'all'}>All</option>
        {options.map((type) => (
          <option key={type.url} value={type.name}>
            {capitalizeFirstLetter(type.name)}
          </option>
        ))}
      </select>
    </div>
  )
}

Select.propTypes = {
  name: PropTypes.string,
  text: PropTypes.string,
  options: PropTypes.array.isRequired,
  value: PropTypes.string,
  filterPokemon: PropTypes.func.isRequired
}
