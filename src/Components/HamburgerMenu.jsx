import React from 'react'
import { useState } from 'react'
import todo from '../Assets/icon-todo.svg'
import calender from '../Assets/icon-calendar.svg'
import reminders from '../Assets/icon-reminders.svg'
import planning from '../Assets/icon-planning.svg'
import arrowUp from '../Assets/icon-arrow-up.svg'
import arrowDown from '../Assets/icon-arrow-down.svg'

const HamburgerMenu = (props) => {

    const [arrow, setArrow] = useState(arrowDown)
    const [fClass, setFClass] = useState('hidden')

    const featureClick = (event) => {
        setFClass('flex')

    }



    const [compClass, setCompClass] = useState('hidden')

    const companyClick = () => {
        setCompClass('flex')
    }


  return (
    <div className={` ${props.hamMenuClass} p-8 mx-auto space-y-8 `}>

      <div className="space-y-4">
        <div onClick={featureClick} className="flex space-x-3">
        <button className='text-2xl'> Features</button>
        <img className='object-contain' src={arrow} alt="" />
        </div>

        <div className={`${fClass} flex-col space-y-4 px-4`}>
        <div className="flex space-x-5 py-2 border-b-2">
        <img className='object-contain' src={todo} alt="" />
        <p>Todo list</p>
        </div>

        <div className="flex space-x-5  py-2 border-b-2">
        <img className='object-contain' src={calender} alt="" />
        <p>Calender</p>
        </div>

        <div className="flex space-x-5  py-2 border-b-2">
        <img className='object-contain' src={reminders} alt="" />
        <p>Reminders</p>
        </div>

        <div className="flex space-x-5  py-2 border-b-2">
        <img className='object-contain' src={planning} alt="" />
        <p>Planning</p>
        </div>
        </div>
      </div>

      <div className="space-y-4">


       <div onClick={companyClick} className="flex space-x-3">
       <button className='text-2xl'>Company</button>
        <img className='object-contain' src={arrow} alt="" />
       </div>


        <div className={` ${compClass} flex-col space-y-4 px-4`}>
        
        <div className="py-2 border-b-2"><button>History</button></div>
        <div className="py-2 border-b-2"> <button>Our Team</button></div>
        <div className="py-2 border-b-2"><button>Blog</button></div>
        
        </div>
      </div>
      
      <div className="">
      <button className='text-2xl'> Carrers</button>
      </div>

      <div className="">
      <button className='text-2xl'>About</button>
      </div>

      <div className="flex flex-col justify-center items-center space-y-4 mt-4">
        <div className="">
            <button className='border-b-2 px-6 py-2'>Login</button>
        </div>

        <div className="">
            <button className='border-2 px-12 py-3 rounded-lg'>Register</button>
        </div>
      </div>


    </div>
  )
}

export default HamburgerMenu
