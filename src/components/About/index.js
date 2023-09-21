import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngular, faCss3, faGithub, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')


    
    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])
    return (

    <div className='container about-page'>
        <div className='text-zone'>
            <h1>
                <AnimatedLetters
                letterClass={letterClass}
                strArray={['A', 'b', 'o', 'u', 't', '', 'm', 'e']} idx={15}
                />
            </h1>
            <p>Welcome to my portfolio website! I'm a passionate web developer with a knack for turning innovative ideas into visually stunning and highly functional websites.</p>
            <p>My portfolio reflects my journey as a full-stack web developer, from simple static sites to complex web applications, demonstrating my versatility and continuous growth in the field.</p>
            <p>Ready to elevate your online presence? Let's discuss how I can create a tailor-made website that aligns perfectly with your goals and vision.</p>
        </div>

        <div className='stage-cube-cont'>
            <div className='cubespinner'>
                <div className='face1'>
                    <FontAwesomeIcon icon={faAngular} color='#DD0031' />
                </div>
                <div className='face2'>
                    <FontAwesomeIcon icon={faHtml5} color='#F06529' />
                </div>
                <div className='face3'>
                    <FontAwesomeIcon icon={faCss3} color='#28A4D9' />
                </div>
                <div className='face4'>
                    <FontAwesomeIcon icon={faReact} color='#5ED4F4' />
                </div>
                <div className='face5'>
                    <FontAwesomeIcon icon={faJsSquare} color='#EFD81D' />
                </div>
                <div className='face6'>
                    <FontAwesomeIcon icon={faGithub} color='#EC4D28' />
                </div>
            </div>
        </div>
        <Loader type='pacman'/>
    </div>
    )
}

export default About