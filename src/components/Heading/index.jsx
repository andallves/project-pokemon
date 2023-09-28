import PropTypes from 'prop-types'
import bagred from '../../assets/img/bag-red.svg'
import './styles.css'

export const Heading = ({ title, subtitle }) => {
    return (
        <div className='heading'>
            <button className='tag-head'>
                <img className='bag-red' src={bagred} alt="bag red" />
                <p className='text-pokedex'>pokédex</p>
            </button>
            <div className='tile-container'>
                <h1 className='title-text'>
                    {title}
                </h1>
                <p className='subtitle'>
                    {subtitle}
                </p>
            </div>
        </div>
    )
}

Heading.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
}