import { Logo } from '../../components/Logo'
import './styles.css'

export const Navbar = () => {
    return (
      <div className='navbar-container'>
        <div className='navbar'>
            <Logo />
            
            <p className='codeboost'>Case Study → code<span className='boost'>Boost</span></p>
        </div>
      </div>
    )
}