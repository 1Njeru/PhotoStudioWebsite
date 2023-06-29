import React from 'react'
// import images

import baby from '../img/portfolio/baby.JPG'
import familyphoto from '../img/portfolio/familyphoto.jpg'
import outdoor from '../img/portfolio/outdoor.JPG'
import tradi from '../img/portfolio/tradi.jpg'

import { Link } from 'react-router-dom'

const Portfolio = () => {
  return (
    <section className='section '>
    <div className='container mx-auto h-full relative 
    lg:pt-36 pt-16 grid justify-center '>
    <div className='grid grid-col lg:flex-row h-full items-center
    justify-center gap-x-24 text-center lg:text-left 
      pb-4'>
    {/*text */}
    <div className='grid justify-center'>
    <div className='flex flex-col justify-center
    pb-8 lg:items-center lg:pt-32'>
    <h1 className='h1 text-4xl
    '>portfolio</h1>
    </div>



    {/*img grid*/}
    <div className=' grid grid-cols-3 gap-2 pb-4 h-[60%]'>
    {/*img1 */}
    <div className='max-w-[250px] lg:max-w-[320px] h-[187px]
     lg:h-[220px] bg-accent lg:overflow-hidden'>
    <img className=' object-cover w-[132px] lg:w-[250px] h-full 
     hover:scale-110 transition-all duration-500
      lg:h-[300px]' src={baby} alt='' />
    </div>

    {/*img1 */}
    <div className='max-w-[250px] lg:max-w-[320px] h-[187px]
     lg:h-[220px] bg-accent lg:overflow-hidden'>
    <img className='w-[132px] lg:w-[250px] object-cover h-full 
     hover:scale-110 transition-all duration-500 lg:h-[300px]' src={familyphoto} alt='' />
    </div>

    {/*img1 */}
    <div className='max-w-[250px] lg:max-w-[320px] h-[187px]
     lg:h-[220px] bg-accent lg:overflow-hidden'>
    <img className=' object-cover w-[132px] lg:w-[250px] h-full 
     hover:scale-110 transition-all duration-500 lg:h-[300px]' src={tradi} alt='' />
    </div>

   



    
    </div>

    <div className=' pt-8 flex justify-center' >
    <Link to={'/contact'} className='btn w-[200px] h-[20px] 
    hover:scale-95 bg-lime-600
    mx-auto lg:mx-0 
    '> Hit Us Up! </Link>
    </div>
    </div>

    </div>
    </div>

    <div className='flex justify-between hidden xl:flex'>
   
    <Link to={'/About'} className='btn w-[30px] h-[10px] 
    mb-[30px] mx-auto lg:mx-0 bg-slate-50 text-yellow-800
    '> back </Link>
   
    <Link to={'/Contact'} className='btn w-[30px] h-[10px]
    mb-[30px] mx-auto lg:mx-0 bg-slate-50 text-yellow-800
    '> next </Link>
    </div>
    
    </section>
  )
}

export default Portfolio;