import React from 'react'
import WeWork from '../weWork/WeWork'

const Ecosystem = () => {
  return (
    
    <div className="w-full bg-[#BCC5F2]">
      <div className=" rounded-t-2xl w-full px-4 sm:px-6 md:px-12 xl:px-10 xxl:px-20 max-w-screen-xxxl mx-auto flex items-center pt-10 md:pt-60 pb-10">
      <div className="flex flex-col items-start justify-center">
        <h1 className="text-3xl sm:text-4xl xl:text-5xl font-semibold text-[#0732EF] my-8">
          How we can help
        </h1>
        <h3 className="text-xl sm:text-xl xl:text-2xl font-semibold text-[#0732EF] max-w-[900px]">
          Together, we work with clients across the digital ecosystem to meet their business challenges.
        </h3>
        <WeWork />
      </div>
    </div>
  </div>
  )
}

export default Ecosystem
