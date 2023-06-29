import React from 'react'
import Socials from './Socials'
import MobileNav from './MobileNav'

//import link
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className=' fixed w-full px-[20px]
    lg:px-[100px] z-30 h-[70px] lg:h-[90px] flex
     items-center text-white'>
     <div className='flex flex-col lg:flex-row lg:items-center
     w-full justify-between'>
     
     {/* logo */}
     <p className='max-w-[300px] pl-6 pt-4 text-3xl'>SOUL STUDIO</p>

     {/*nav initially hidden - show on desktop mode */}
     <nav className='hidden lg:flex gap-x-12 font-semibold text-white'>

     <Link to={'/'} className=' hover:text-primary
     transition'>Home</Link>  
    
     <Link to={'/about'} className=' hover:text-primary
     transition'>About</Link>
     
     <Link to={'/portfolio'} className=' hover:text-primary
     transition'>Portfolio</Link>
     
     <Link to={'/contact'} className=' hover:text-primary
     transition'>Contact</Link>
     </nav>

    

     </div>

       {/*socials */}
       <Socials />


     {/*mobile nav */}
     <MobileNav />

    
     </header>
  )
}

export default Header;