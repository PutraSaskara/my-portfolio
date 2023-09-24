import './index.scss'
import project1 from '../../assets/images/project1.jpg'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'    


const Project = () => {

    const [letterClass, setLetterClass] = useState('text-animate')


    
    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <div className='div-main'>
                <h1>
                <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['M', 'y', '', 'P', 'r', 'o', 'j', 'e', 'c', 't']} idx={15}
                    />
                </h1>
                <div className='div-project'>
                <div className='div-card'>
                    <div className='card'>
                        <img className='img-card' src={project1} alt='project'/>
                        <div>
                            <h3 className='h3-card'>Ecommerce</h3>
                            <p>This website create with reactJs, tailwind css and expressJS. A website ecommerce with simple feature like login, cart and filter product</p>
                            <Link to='/' className='flat-button'>More Detail</Link>
                        </div>
                    </div>
                </div>
                </div>
            </div>
    )
}

export default Project