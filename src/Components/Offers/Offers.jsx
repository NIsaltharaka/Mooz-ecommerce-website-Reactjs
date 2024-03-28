import React from 'react'
import './Offers.css'
import exclusive_image from '../Assets/exclusive-offer.png'

const Offers = () => {
    return (
        <div className='offers'>
            <div className="offer_left">
                <h1>EXCLUSIVE</h1>
                <p>OFFER FOR YOU</p>
                <button className="check-offers-btn">
                    Check Offers <span role="img" aria-label="right-arrow">→</span>
                </button>
            </div>
            <div className="offer-right">
                <img src={exclusive_image} alt="" />
            </div>
        </div>
    )
}

export default Offers
