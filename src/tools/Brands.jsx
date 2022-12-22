import React from 'react'
import brand1 from '../Assets/client-databiz.svg'
import brand2 from '../Assets/client-audiophile.svg'
import brand3 from '../Assets/client-meet.svg'
import brand4 from '../Assets/client-maker.svg'

const Brands = () => {
  return (
    <div className='flex object-contain justify-between space-x-4 flex-wrap'>
    <img className='w-16 md:w-24 h-full' src={brand1} alt="" />
    <img className='w-16 md:w-24 h-full' src={brand2} alt="" />
    <img className='w-16 md:w-24 h-full' src={brand3} alt="" />
    <img className='w-16 md:w-24 h-full' src={brand4} alt="" />

    </div>
  )
}

export default Brands