import React from 'react'

const DropDownList = (props) => {
  return (
    <div onMouseLeave={props.onMouseLeave} className={` ${props.ddClass} ${props.Classes} absolute flex-col my-3 p-4 px-6 space-y-4 bg-white rounded-lg drop-shadow-lg`}>

    {/* List Item 1 */}
    <button href="#">
    <div  className="flex space-x-4 hover:border-b-2">
        <img className='object-contain' src={props.img1} alt="" />
        <p>{props.list1}</p>
    </div>
    </button>

    {/* List Item 2 */}
    <button href="#">
    <div className="flex space-x-4 hover:border-b-2">
        <img className='object-contain' src={props.img2} alt="" />
        <p>{props.list2}</p>
    </div>
    </button>

    {/* List Item 3 */}
    <button href="#">
    <div className="flex space-x-4 hover:border-b-2">
        <img className='object-contain' src={props.img3} alt="" />
        <p>{props.list3}</p>
    </div>
    </button>

    {/* List Item 4 */}
    <button href="#">
    <div className="flex space-x-4 hover:border-b-2">
        <img className='object-contain' src={props.img4} alt="" />
        <p>{props.list4}</p>
    </div>
    </button>
    </div>
  )
}

export default DropDownList
