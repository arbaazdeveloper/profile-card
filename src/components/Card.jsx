import React from 'react'

const Card = ({firstName,lastName,gender,phoneNumber,image}) => {
  return (
    <div className='relative flex items-center justify-center'>
        <div className='absolute bg-white/25 h-[250px] w-[450px] rounded-3xl border border-white bottom-4 z-10'></div>
        <div className='bg-white/50 w-[400px] h-[250px] rounded-3xl z-20 flex items-center justify-center gap-5'>
        
        <div>
            <img className='rounded-full border-[4px] h-[100px] w-[100px] border-white' src={image} />
        </div>
        <div>
            <h1 className='text-1xl font-bold font-inter'>{firstName+"   "+lastName}</h1>
            <p className='font-semibold'>{gender}</p>
            <p className='font-semibold'>{phoneNumber}</p>
        </div>

        </div>

    </div>
  )
}

export default Card