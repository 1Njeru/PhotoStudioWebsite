import React from 'react'
import soul from '../img/about/soul.jpg'

import {
 FaCamera,
 FaTree
} from 'react-icons/fa'

import{
  ImFilePicture,
  ImHome,
} from 'react-icons/im'


//import link
import { Link } from 'react-router-dom'


const About = () => {
  return (
    <section className='section '>
    <div className=' container mx-auto h-full relative 
    lg:pt-48 pt-16 grid justify-center '>
    {/*text wrapper and img */}
   

    {/*text */}

    <div className=' grid justify-center'>
    <div className='flex justify-center'>
    <p className='h1 mb-4 max-w-sm  text-4xl'>
    Who Are We?</p>
    </div>

    <p>At Soul we aspire to provide an enjoyable experience in front of the camera <br />
    as well as timeless photographs that you will treasure for a lifetime</p>


    <div className='flex justify-center pt-8'>
    <p className='h1 mb-4 max-w-sm  text-4xl'>
    Our Services</p>
    </div>

    <div className='grid items-start mx-auto'>
    <span> ~  Photoshoots & Studio Photograhy.   </span>
    <span> ~  Event Photography.  </span>
    <span> ~  Street Photography.  </span>
    <span> ~  Product Photograhy.  </span>
    <span> ~  Photo and Video Editing.  </span>
    <span> ~  Advertising & Commercial Photography.   </span>
    </div>
    </div>



    <div className='grid gird-col lg:pl-14 pt-8 justify-center hover-2xl 
     lg:pt-8'> 
    <Link to={'/portfolio'} className='btn w-[250px] h-[20px] bg-lime-700 '> View Our Work </Link>
    </div>
    
    </div>
  


    <div className=' justify-between hidden xl:flex '>
   
    <Link to={'/'} className='btn w-[30px] h-[10px] 
    mb-[30px] mx-auto lg:mx-0 bg-slate-50 text-yellow-800
    '> back </Link>
   
    <Link to={'/Portfolio'} className='btn w-[30px] h-[10px]
    mb-[30px] mx-auto lg:mx-0 bg-slate-50 text-yellow-800
    '> next </Link>
    </div>
  
    </section>
  )
}

export default About;
