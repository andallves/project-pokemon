import { useState } from 'react'
import { Logo } from '../../components/Logo'
import { AiOutlineMenu } from 'react-icons/ai'
import  { FiX } from 'react-icons/fi'
import './styles.css'

export const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    return (
      <>
        <button onClick={() => setShowMenu(!showMenu)}>
        {showMenu ? ( 
          <AiOutlineMenu/> 
        ) : ( 
          <FiX />
        )}
        </button>
        <div className='navbar'>
            <Logo />
            
            <span className='codeboost'>Case Study → codeBoost</span>
        </div>
        </>
    )
}