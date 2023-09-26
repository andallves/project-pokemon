export const loadPokemonsTypes = async () => {
    try {
        const typeResponse = await fetch('https://pokeapi.co/api/v2/type')
        const typeJson = await typeResponse.json()
        const { results } = typeJson
        
        return results;
    } catch (err) {
        throw new Error("Erro in load types")
    }
}