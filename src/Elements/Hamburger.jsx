import React from 'react'


const Hamburger = (props) => {
  return (
    <div onClick={props.hamAction} className={`${props.HamburgerClass} md:hidden`}>
      <button><img src={props.hamburger} alt="" /> </button>
    </div>
  )
}

export default Hamburger
