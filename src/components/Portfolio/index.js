import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import project1 from '../../assets/images/project1.jpg'

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
            <div className="images-container">
                <div className="image-box">
                    <img 
                        src={project1}
                        className="portfolio-image"
                        alt="portfolio" />
                        <div className="content">
                            <p className="title">Ecommerce</p>
                            <h4 className="description">This website create with reactJs, tailwind css and expressJS. A website ecommerce with simple feature like login, cart and filter product</h4>
                            <button
                                className="btn"
                                onClick={() => window.open('http://ecom.saskaraputra.com/')}
                                >View</button>
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