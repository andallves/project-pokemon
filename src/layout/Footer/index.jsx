import codeboost from '../../assets/img/codeboost.svg'
import './styles.css'
export const Footer = () => {
    return (
        <footer className='footer-container'>
            <div className='footer-text'>
                <h2>
                    Módulo JavaScript
                </h2>
                <p>
                    Consumindo e exibindo dados de um API
                </p>
            </div>
            <div className='footer-logo'>
                <img src={codeboost} alt="" />
            </div>
        </footer>
    )
}