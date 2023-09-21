import {Link, NavLink} from 'react-router-dom'
import './index.scss'
import logoS from '../../assets/images/logo-s.png'
import mylogo from '../../assets/images/Untitled1.png'
import logoSubtitle from '../../assets/images/logo_sub.png'
import mynamelogo from '../../assets/images/myname1.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope, faHome, faUser} from '@fortawesome/free-solid-svg-icons'
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => {
    return (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={mylogo} alt='logo'/>
            <img className='sub-logo' src={mynamelogo} alt='saskara'/>
        </Link>
        <nav>
            <NavLink exact="true" activecclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
            </NavLink>
            <NavLink exact="true" activecclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
            </NavLink>
            <NavLink exact="true" activecclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
            </NavLink>
        </nav>

        <ul>
            <li>
                <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/saskaraputra/'>
                    <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e'/>
                </a>
            </li>
            <li>
                <a target='_blank' rel='noreferrer' href='https://github.com/PutraSaskara'>
                    <FontAwesomeIcon icon={faGithub} color='#4d4d4e'/>
                </a>
            </li>
        </ul>
    </div>
    )
}

export default Sidebar