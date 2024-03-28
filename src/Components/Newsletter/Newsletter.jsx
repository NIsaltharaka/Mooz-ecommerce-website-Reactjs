import React from 'react'
import './Newsletter.css'

const Newsletter = () => {
  return (
    <div className='newsletter'>
      <h1>Get exclusive offer's on your email</h1>
      <p>subscribe to our newsletter and stay update</p>
      <div>
        <input type="email" name="email" id="email" placeholder='enter your email' />
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default Newsletter
