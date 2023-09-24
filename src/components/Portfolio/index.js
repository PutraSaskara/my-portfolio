import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import project1 from '../../assets/images/project1.jpg'
import { Link } from 'react-router-dom'

const Portfolio = () => { 
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    return (
        <>
            <div className="container portfolio-page">
                <h1 className="page-title">
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={"Portfolio".split("")}
                        idx={15}
                    />
                </h1>
                <div className='images-container'>
                    <div className='image-box'>
                        <img className='img-card' src={project1} alt="project1"/>
                        <div>
                            <h3 className='h3-card'>Ecommerce</h3>
                            <p>This website create with reactJs, tailwind css and expressJS. A website ecommerce with simple feature like login, cart and filter product</p>
                            <Link to='/' className='flat-button'>More Detail</Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Loader type="pacman" /> */}
            <Loader type="ball-beat"/>
        </>
    );
}

export default Portfolio;