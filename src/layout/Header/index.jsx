import { SearchPokemon } from '../../components/SearchPokemon'
import pokeball from '../../assets/img/pokeball-red.png'

import './styles.css'

export const Header = () => {
    return (
        <header>
            <div className='container'>
                <h1 className='title'>
                    Who is that Pokémon?
                </h1>
                <p className='subtitle'>
                    The perfect guide for those who want to hunt Pokémons around the world
                </p>

                <img className='pokeball' src={pokeball} alt='pokeball-red'/>

                <SearchPokemon />
            </div>
        </header>
    )
}