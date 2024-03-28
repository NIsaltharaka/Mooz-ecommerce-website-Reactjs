import React from 'react'
import './Hero.css'
import hero_image from '../Assets/hero-image.png'

const Hero = () => {
    return (
        <div className='hero'>
            <div className="hero-left">
                <div className="hero-hand-icon">
                    <p>New collection for everyone</p>
                </div>
                <div className="hero-latest-btn">
                    <div>Shop now</div>
                </div>
            </div>

            <div className="hero-right">
                    <img src={hero_image} alt="" />
            </div>
        </div>
    )
}

export default Hero
