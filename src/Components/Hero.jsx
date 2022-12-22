import React from 'react'
import LeftHero from '../Elements/LeftHero'
import RightHero from '../Elements/RightHero'

const Hero = (props) => {
  return (
    <div className={` ${props.heroClass} flex-col lg:flex-row-reverse mt-8 p-8 lg:justify-center items-center md:justify-between xl:w-9/12 mx-auto space-y-11 lg:space-y-0`}>
      
      <RightHero />
      <LeftHero />

    </div>
  )
}

export default Hero
