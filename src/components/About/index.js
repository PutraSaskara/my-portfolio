import React from 'react'
import { useEffect, useState } from 'react'
import {
  faNode,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
  faGithub,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I'm a very ambitious front-end developer looking for a role in an
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
          </p>
          <p align="LEFT">
            I'm quiet confident, naturally curious, and perpetually working on
            improving my chops one design problem at a time.
          </p>
          <p>
            If I need to define myself in one sentence that would be a family
            person, father of a beautiful daughter, a sports fanatic,
            photography enthusiast, and tech-obsessed!!!
          </p>

          <div className='logo-skill'>
                <h1 className='text-h1'>
                <AnimatedLetters
                letterClass={letterClass}
                strArray={['M', 'y', '', 'S', 'k', 'i', 'l', 'l']} idx={15}
                />
                </h1>
                <div className='div-icon'>
                    <span>
                    <FontAwesomeIcon icon={faHtml5} color='#F06529' size='5x' />
                    </span>
                    <span>
                    <FontAwesomeIcon icon={faCss3} color='#28A4D9' size='5x' />
                    </span>
                    <span>
                    <FontAwesomeIcon icon={faJsSquare} color='#EFD81D' size='5x' />
                    </span>
                    <span>
                    <FontAwesomeIcon icon={faReact} color='#5ED4F4' size='5x' />
                    </span>
                    <span>
                    <FontAwesomeIcon icon={faNode} color='#009933' size='5x' />
                    </span>
                    <span>
                    <FontAwesomeIcon icon={faGithub} color='#EC4D28' size='5x' />
                    </span>
                </div>
            </div>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faNode} color="#009933" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      {/* <Loader type="pacman" /> */}
      <Loader type="ball-beat"/>
    </>
  )
}

export default About
