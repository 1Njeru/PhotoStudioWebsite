import React from 'react'
import soul from '../img/home/soul.jpg'
const Home = () => {

    

  return (
    <section className='mx-auto'>
    <div className="w-[100vw] h-[100vw] relative" data-carousel>
    <button class="absolute z-2 font-2xl pt-[50%] cursor-pointer
    radius-2xl " data-carousel-button="prev">&#8656;</button>
    <button class="absolute flex justify-end z-2 font-2xl pt-[50%] cursor-pointer
    radius-2xl" data-carousel-button="next">&#8658;</button>
    <ul className='flex justify-center h-full'>
      <li class="">
        <img className='pb-10 h-fit cover
         items-center-justify center' src={soul} alt="" />
      
        </li>
      <li class="">
        <img src={''} alt="" />
      </li>
      <li class="">
        <img  src={''} alt="" />
      </li>
    </ul>

 
  </div>

    </section>
  )
}

export default Home;