import React from 'react'
import beauty from '../img/home/beauty.jpg'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { transition1 } from '../transitions'

//import icons

import {
  ImFacebook,
  ImTwitter,
  ImInstagram,
  ImWhatsapp,
  ImMail,
  ImPhone,
  ImCamera,
  ImLocation,
  ImArrowRight,
  
} from 'react-icons/im'


import { FaArrowRight } from 'react-icons/fa6'

const Home = () => {
  return (
    <section className='section'>
    <div className='container mx-auto h-full relative 
    lg:pt-36 pt-16 grid justify-center'>
    <div className='grid grid-col items-center lg:flex-row h-full gap-x-24 text-center lg:text-left 
    '>
    {/*text */}
    <div className='flex flex-col lg:items-start pt-8'>
    <h1 className='h1 font-partial text-4xl flex justify-center
    '>PHOTOGRAPHY & FILM MAKING</h1>
    <p className='pt-4 font-primary font-semibold text-xl'>Nairobi, Kenya
    </p>

    <p className='pt-5 font-semibold text-lime-700'> Find Us Through:</p>

    <div className='  xl:flex flex justify-center pt-7'>
    
    <ul className='flex gap-5' >

    <li className='hover:scale-95'><a href='http://www.facebook.com' target='_blank'>
    <ImFacebook />
    </a>
    </li>

    <li className='hover:scale-105'><a href='http://www.twitter.com' target='_blank'>
    <ImTwitter />
    </a>
    </li>

    <li className='hover:scale-95'><a href='http://www.instagram.com' target='_blank'>
    <ImInstagram />
    </a>
    </li>

    <li className='hover:scale-105'><a href='http://www.whatsapp.com' target='_blank'>
    <ImWhatsapp />
    </a>
    </li>

    <li className='hover:scale-95'><a href='mailto:http://www.nyagaedward23.gmail.com' target='_blank'>
    <ImMail />
    </a>
    </li>

    <li className='hover:scale-105'><a href='tel:0722175068' target='_blank'>
    <ImPhone />
    </a>
    </li>

    <li className='hover:scale-95'><a href='http://www.instagram.com' target='_blank'>
    <ImCamera />
    </a>
    </li>

    <li className='hover:scale-105'><a href='http://www.googlemaps.com' target='_blank'>
    <ImLocation />
    </a>
    </li>
    
    </ul>
    
    </div>
    
    </div>

    <div className='grid '>
    <div className='  flex hover:scale-90 duration-500'>
    <Link to={'/About'} className='  font-tertiary
    mb-[30px] mx-auto lg:mx-0 font-semibold flex items-center gap-5
    '> About Us <FaArrowRight className='pt-1' /> </Link>
    </div>

    <div className=' flex hover:scale-90 duration-500'>
    <Link to={'/Portfolio'} className='  font-tertiary
    mb-[30px] mx-auto lg:mx-0 font-semibold flex items-center gap-5
    '> portfolio <FaArrowRight className='pt-1' /> </Link>
    </div>
    
    <div className='flex hover:scale-90 duration-500'>
    <Link to={'/Contact'} className='  font-tertiary
    mb-[30px] mx-auto lg:mx-0 font-semibold flex items-center gap-5
    '> Book Now <FaArrowRight className='pt-1' /> </Link>
    </div>
    </div>

    </div>   
    </div>
    
    <div className='flex justify-end hidden xl:flex '>    
    <Link to={'/About'} className='btn w-[30px] h-[10px]
    mb-[30px] mx-auto lg:mx-0 bg-slate-50 text-yellow-800
    '> next </Link>
    </div>

    </section>
    
  )
}



export default Home;