import React from 'react'
import heroDesktop from '../Assets/image-hero-desktop.png'
import heroMobile from '../Assets/image-hero-mobile.png'

const RightHero = () => {
  return (
    <div className='object-contain max-w-lg'>
      <img src={heroDesktop} alt="" className='hidden lg:flex' />
      <img src={heroMobile} alt="" className='lg:hidden' />
    </div>
  )
}

export default RightHero
