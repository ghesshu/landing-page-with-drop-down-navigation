import React from 'react'
import Logo from '../Elements/Logo'
import MidHeadList from '../Elements/MidHeadList'
import EndHeadList from '../Elements/EndHeadList'
import Hamburger from '../Elements/Hamburger'


const Header = (props) => {
  return (
    <div>
    
    {/* CODE */}

    <div className="flex justify-between items-center p-8 xl:w-9/12 mx-auto">

        {/* LOGO */}
        <Logo />

        {/* HEADER LIST MIDDLE */}
        <MidHeadList />

        {/* HEADER LIST End */}
        <EndHeadList />

        {/* Humburger Icon */}
        {/* <Hamburger hamburger={hamburger} /> */}
        <Hamburger hamburger={props.hamburgeropen} HamburgerClass={props.hamOpenClass} hamAction={props.hamOpen} />
        <Hamburger hamburger={props.hamburgerclose} HamburgerClass={props.hamCloseClass} hamAction={props.hamClose}/>
    </div>

    {/* CODE */}

    </div>
  )
}

export default Header
