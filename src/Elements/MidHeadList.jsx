import React from 'react'
import { useState } from 'react'
import DropDown from '../tools/dropDown'
import todo from '../Assets/icon-todo.svg'
import calender from '../Assets/icon-calendar.svg'
import reminders from '../Assets/icon-reminders.svg'
import planning from '../Assets/icon-planning.svg'
import arrowUp from '../Assets/icon-arrow-up.svg'
import arrowDown from '../Assets/icon-arrow-down.svg'

const MidHeadList = (props) => {

  const [dropDown, setDropDown] = useState('hidden')
  const [compDropDown, setCompDropDown] = useState('hidden')
  const [arrow, setArrow] = useState(arrowDown)

  const displayList = () => {
    setDropDown('flex')
    setArrow(arrowUp)
  }

  const hideList = () => {
    setDropDown('hidden')
    setCompDropDown('hidden')
    setArrow(arrowDown)
  }

  const compDisplayList = () => {
    setCompDropDown('flex')
    setArrow(arrowUp)
  }

  return (
    <div className='hidden md:flex space-x-4 items-center'>
    {/* CODE */}
    
    {/* Features */}
    <DropDown onClick={displayList} onMouseLeave={hideList} text='Features' list1='Todo list' list2='Calender' list3='Reminders' list4='Planning' ddClass={dropDown} Classes='-ml-14' arrowDown={arrow}
    
    // Images
    img1={todo} img2={calender} img3={reminders} img4={planning}
    />

    {/* Company */}
    <DropDown onClick={compDisplayList} onMouseLeave={hideList} text='Company' list1='History' list2='Our Team' list3='Blog' ddClass={compDropDown} arrowDown={arrow}/>

    <button>Carrers</button>
    <button>About</button>


    {/* CODE */}
    </div>
  )
}

export default MidHeadList
