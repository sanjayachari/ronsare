import React from 'react'

const Banner = () => {
  return (
    <div className='pl-[20px] md:w-[40%] xl:w-[50%] 2xl:w-[60%] flex flex-col justify-center items-start md:pl-[100px] xl:pl-[100px] 2xl:pl-[200px] text-white'>
        <div className='font-bold text-[20px] md:text-[35px] '>KonfHub Frontend Evaluation </div>
        <div className='md:text-[20px] text-[14px] opacity-80'>Event Live Link : Open streaming website</div>
        <div className='md:text-[20px] text-[14px] opacity-80'>Date: Jul 31st, 2034 6:00 AM - Aug 31st, 2034 6:00 PM IST</div>
    </div>
  )
}

export default Banner