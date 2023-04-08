import React from 'react'

const Hero = (props) => {
  return (
    <div className='hero'>
      <img src="Image/hero2.webp" alt="banner"/>
      <h3>{props.title}</h3>
      <div className='offer'>
      <button>Reward</button>
      <button>Offer</button>

      </div>
    </div>
  )
}

export default Hero
