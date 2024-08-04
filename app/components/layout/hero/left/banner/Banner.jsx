import React from 'react'

const Banner = () => {
  return (
    <div className='md:w-[60%] flex flex-col justify-center items-start pl:[150px] xl:pl-[200px] text-white md:p-0 p-2'>
        <div className='font-bold text-[20px] md:text-[35px] '>KonfHub Frontend Evaluation </div>
        <div className='md:text-[20px] text-[14px] opacity-80'>Event Live Link : Open streaming website</div>
        <div className='md:text-[20px] text-[14px] opacity-80'>Date: Jul 31st, 2034 6:00 AM - Aug 31st, 2034 6:00 PM IST</div>
    </div>
  )
}

export default Banner