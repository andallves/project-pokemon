import pokeballRed from '../../assets/img/pokeball-red.png'
import pokeballBlue from '../../assets/img/pokeball-blue.png'

import './styles.css'
import { Navbar } from '../Navbar'
import { Heading } from '../../components/Heading'
import { useState } from 'react'

export const Header = () => {
    const [toggle, setToggle] = useState(false)
    setTimeout(() => {
        setToggle(!toggle)
    }, 10000)

    return (
        <header>
            <div className={`container-header ${toggle ? "bg-red" : "bg-blue"}`}>
                <Navbar />
                {toggle ? (
                    <Heading
                        title={'Who is that Pokémon?'}
                        subtitle={'The perfect guide for those who want to hunt Pokémons around the world'}
                    />
                ) : (
                    <Heading
                        title={'Catch the all!'}
                        subtitle={'The perfect guide for those who want to hunt Pokémons around the world'}
                    />
                )}
                
                {toggle ? (
                    <img className='pokeball' src={pokeballRed} alt='pokeball-red'/>
                ) : (
                    <img className='pokeball blue' src={pokeballBlue} alt='pokeball-blue'/>
                )}
            </div>
        </header>
    )
}