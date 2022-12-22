import React from 'react'
import Brands from '../tools/Brands'

const LeftHero = () => {
  return (
    <div className='flex flex-col space-y-10 text-center lg:text-left lg:pr-4'>
    <h1 className="text-5xl font-bold">
        Make <br /> remote work
    </h1>

    <p className='md:px-44 lg:px-0'>
    Get your team in sync, no matter your location. Streamline processes, 
    create team rituals, and watch productivity soar.
    </p>

    <div className="">
    <button className='border-2 px-4 py-2 rounded-md text-slate-600'>Learn more</button>
    </div>

    <Brands />

    </div>
  )
}

export default LeftHero
