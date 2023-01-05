import React from 'react'

const Banner = () => {
  return (
    <div className=' text-center lg:px-[150px] md:px-20 px-10 py-1'>
      <div>
        <h1 className=' text-[36px] lg:text-[57px] md:text-[45px] '>GaMinth Blog</h1>
        <h2 className='mt-1 md:mt-0 lg:mt-2 lg:text-[22px] md:text-[16px] text-[14px]'>Tout sur la création d'asset de jeux video de manière à ce que tous puissent en profiter !</h2>
      </div>
      <div className="text-center flex border-b border-[#ffedd2] mt-2"></div>
    </div>
  )
}

export default Banner