import grass from '../assets/img/icon-types/grass.svg'
import ground from '../assets/img/icon-types/ground.svg'
import ice from '../assets/img/icon-types/ice.svg'
import normal from '../assets/img/icon-types/normal.svg'
import poison from '../assets/img/icon-types/poison.svg'
import psychic from '../assets/img/icon-types/psychic.svg'
import rock from '../assets/img/icon-types/rock.svg'
import steel from '../assets/img/icon-types/steel.svg'
import water from '../assets/img/icon-types/water.svg'
import bug from '../assets/img/icon-types/bug.svg'
import dark from '../assets/img/icon-types/dark.svg'
import dragon from '../assets/img/icon-types/dragon.svg'
import electric from '../assets/img/icon-types/electric.svg'
import fairy from '../assets/img/icon-types/fairy.svg'
import fighting from '../assets/img/icon-types/fighting.svg'
import fire from '../assets/img/icon-types/fire.svg'
import flying from '../assets/img/icon-types/flying.svg'
import ghost from '../assets/img/icon-types/ghost.svg'
import all from '../assets/img/icon-types/icon-all.svg'

export const getPokemonTypeImage = (pokemonType) => {
    switch(pokemonType) {
        case "grass": 
            return grass;
        case "ground":
            return ground;
        case "ice": 
            return ice;
        case "normal":
            return normal;
        case "poison":
            return poison;
        case "pyschic":
            return psychic;
        case "rock":
            return rock;
        case "steel":
            return steel;
        case "water":
            return water;
        case "bug":
            return bug;
        case "dark":
            return dark;
        case "dragon":
            return dragon;
        case "electric":
            return electric;
        case "fairy": 
            return fairy;
        case "fighting": 
            return fighting;
        case "fire": 
            return fire;
        case "flying": 
            return flying;
        case "ghost":
            return ghost;
        case "all":
            return all;
    }       
}