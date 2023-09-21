import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import {MapContainer, Marker, Popup, TileLayer} from 'react-leaflet'

const Contact = () => {

    const refForm = useRef()
    const [letterClass, setLetterClass] = useState('text-animate')


    
   

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm(
                'service_en3t7yw',
                'template_hjp5so4',
                refForm.current,
                '6SHyo9BuiEgudRRAU'
            )
            .then(
                () => {
                    alert('Message succesfully sent!')
                    window.location.reload(false)
                },
                () => {
                    alert('Failed to send the message, please try again')
                }
            )
    }

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters letterClass={letterClass}  strArray={['C', 'o', 'n', 't', 'a', 'c', 't', '', 'm', 'e']} idx={15} />
                </h1>
                <p>
                I'm always welcome with every opportunity come to me. If you have some request or questions don't hesitate to contact me
                </p>
                <div className='contact-form'>
                    <form ref={refForm} onSubmit={sendEmail}>
                        <ul>
                            <li className='half'>
                                <input type='text' name='name' placeholder='Name' required></input>
                            </li>
                            <li className='half'>
                                <input type='email' name='email' placeholder='Email' required></input>
                            </li>
                            <li>
                                <input placeholder='Subject' type='text' required />
                            </li>
                            <li>
                                <textarea placeholder='Message' name='message' required></textarea>
                            </li>
                            <li>
                                <input type='submit' className='flat-button' value='SEND'/>
                            </li>
                        </ul>
                    </form>

                </div>
            </div>
            <div className='info-map'>
                Saskara Putra
                <br/>
                Indonesia
                <br/>
                Pedungan, Denpasar, Bali
                <span>putrasaskara@yahoo.com</span>
            </div>
            <div className='map-wrap'>
                <MapContainer center={[-8.706947527580812, 115.21240352720379]} zoom={13}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <Marker position={[-8.706947527580812, 115.21240352720379]}>
                        <Popup>Saskara lives here</Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
        <Loader type='pacman' />
        </>
    )
}

export default Contact