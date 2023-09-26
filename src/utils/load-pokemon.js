export const loadPokemons = async () => {
    try {
        const pokemonsResponse = await fetch('https://pokeapi.co/api/v2/pokemon?limit=602')
        const pokemonsJson = await pokemonsResponse.json()
        const { results } = pokemonsJson

        const pokemonWithType = await Promise.all(results.map(async (pokemon) => {
            const typeResponse = await fetch(`${pokemon.url}`)
            const typeJson = await typeResponse.json()
            const { name } = typeJson.types[0].type

            return { ...pokemon, type: name }
        }))
        
        return pokemonWithType
    } catch (err) {
        throw new Error('Error: ' + err)
    }
}