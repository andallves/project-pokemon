import './styles.css'

export const SearchPokemon = () => {
    return (
        <div>
            <label>Select your Pokémon</label>
            <input type='text' className='searchPokemon' placeholder='Search name or code'/>
        </div>
    )
}