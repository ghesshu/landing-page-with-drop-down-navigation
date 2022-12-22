import React from 'react'
import { useState } from 'react'
import Header from '../Components/Header'
import Hero from '../Components/Hero'
import HamburgerMenu from '../Components/HamburgerMenu'
import hamburgeropen from '../Assets/Hamburger icon.svg'
import hamburgerclose from '../Assets/hamburger-close.svg'




const Home = () => {

    const [heroClass, setHeroClass] = useState('flex')
    const [hamOpenClass, setHamOpenClass] = useState('flex')
    const [hamCloseClass, setHamCloseClass] = useState('hidden')
    const [hamMenuClass, setHamMenuClass] = useState('hidden')



    // Click Functions
    const hamOpen = () => {
        setHamOpenClass('hidden')
        setHamCloseClass('flex')
        setHeroClass('hidden')
        setHamMenuClass('')
        
    }

    const hamClose = () => {
        setHamCloseClass('hidden')
        setHamOpenClass('flex')
        setHeroClass('flex')
        setHamMenuClass('hidden')
    }




  return (
    <div className="h-screen w-screen">
      <Header hamburgeropen={hamburgeropen} hamburgerclose={hamburgerclose}
    //   OnClick Actions
    hamClose={hamClose} hamOpen={hamOpen}

    // Classes
    hamOpenClass={hamOpenClass} hamCloseClass={hamCloseClass}
      />
      <Hero heroClass={heroClass} />
      <HamburgerMenu hamMenuClass={hamMenuClass} />

    </div>
  )
}

export default Home
