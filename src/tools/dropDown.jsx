import React from 'react'
import DropDownList from './DropDownList'

const dropDown = (props) => {
  return (
    <div  className="">
    <div onClick={props.onClick} className="hover:opacity-50 flex items-center space-x-3">
    <button>{props.text}</button>

    <img className='' src={props.arrowDown} alt="" />
    <img className='' src={props.arrowUp} alt="" />
    </div>

    {/* Hover List */}
    <DropDownList onMouseLeave={props.onMouseLeave}

    // DropDownList
    ddClass={props.ddClass} list1={props.list1} list2={props.list2} list3={props.list3} list4={props.list4} Classes={props.Classes}
    
    // DropDown Images
    img1={props.img1} img2={props.img2} img3={props.img3} img4={props.img4} 
    />

    </div>
  )
}

export default dropDown
