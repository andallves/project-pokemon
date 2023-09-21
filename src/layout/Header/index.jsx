import pokeball from '../../assets/img/pokeball-red.png'

import './styles.css'
import { Navbar } from '../Navbar'
import { Heading } from '../../components/Heading'

export const Header = () => {
    return (
        <header>
            <div className='container'>
                <Navbar />

                <Heading
                    title={'Who is that Pokémon?'}
                    subtitle={'The perfect guide for those who want to hunt Pokémons around the world'}
                />

                <img className='pokeball' src={pokeball} alt='pokeball-red'/>
            </div>
        </header>
    )
}