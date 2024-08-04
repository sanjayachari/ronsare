import React from 'react'

const ChildrenNavbar = () => {
  return (
    <nav className="flex justify-between gap-3 text-black my-2 border-opacity-50 border-b border-black w-[360px] md:w-full overflow-x-scroll scroll-auto">
    <div className="p-2 border-b border-black whitespace-nowrap">About</div>
    <div className="p-2 whitespace-nowrap">Tickets</div>
    <div className="p-2 whitespace-nowrap">speakers section</div>
    <div className="p-2 whitespace-nowrap">workshop section</div>
    <div className="p-2 whitespace-nowrap">event sponsors</div>
  </nav>  )
}

export default ChildrenNavbar