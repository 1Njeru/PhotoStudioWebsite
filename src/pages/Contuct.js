import React from 'react'

import { Link } from 'react-router-dom'
import { ImHome } from 'react-icons/im'

const Contact = () => {
  return (
    <section className='section lg:pt-24 '>
    <div className='container mx-auto lg:pt-20 h-full lg:w-[65%] pb-4 pt-20'>
    <div className='flex flex-col lg:flex-row  h-full items-center
     lg:text-left'>
    {/*bg */}
    <div className='hidden lg:flex absolute bottom-0 left-0 right-0 top-72
    z-10'></div>
    {/*text & form*/}
    <div className='lg:flex-1 pt-12 lg:pt-2 px-4 '>
    <h1 className='h1 text-4xl'> Contact Us Now </h1>
    <p className='pt-4 text-xl'> We would like to hear suppestions from you. </p>

    {/*form */}
    <form className='flex flex-col gap-y-4 pt-4'> 

    <div className='flex gap-x-10'>
    <input className=' outline-none border-b border-b-primary
     h-[60px] bg-transparent font-secondary w-full
     pl-3 placeholder:text-[#35474d]' 
     
     type='Text'
     placeholder='Your Name'
     />

     <input className=' outline-none border-b border-b-primary
     h-[60px] bg-transparent font-secondary w-full
     pl-3 placeholder:text-[#757879]' 
     
     type='Text'
     placeholder='Your Email'
     />
    </div>

    <input className=' outline-none border-b border-b-primary
    h-[60px] bg-transparent font-secondary w-full
    pl-3 placeholder:text-[#757879]' 
    
    type='Text'
    placeholder='Your Message'
    />

    <div className='p-6'>
    <button className='btn mb-[11px] mx-auto lg:mx-0 
    self-start'>
    <Link href="mailto:nyagaedward23.gmail.com"></Link>
    Send Message</button>
    
    </div>


    </form>

    <div className='lg:hidden'>
    <Link to={'/'} className='
    text-yellow-800 flex justify-center pb-8'> <ImHome /> </Link>
    </div>

    </div>
    {/*image */}
   
    </div>
    </div>

    <div className='justify-between hidden xl:flex'>
   
    <Link to={'/Portfolio'} className='btn w-[30px] h-[10px] 
    mb-[30px] mx-auto lg:mx-0 bg-slate-50 text-yellow-800
    '> back </Link>
   
    <Link to={'/'} className='btn w-[30px] h-[10px]
    mb-[30px] mx-auto lg:mx-0 bg-slate-50 text-yellow-800
    '> Home </Link>
    </div>


    </section>
  )
}

export default Contact
