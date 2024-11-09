import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <main>
      <title>Basma khan Portfolio</title>
     <header className="text-gray-600 body-font bg-black">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-blue-900 mb-4 md:mb-0">
      <svg xmlns="http://www.w3.org/2000svg/" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-blue-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span className="ml-3 text-xl">Basma Khan</span>
    </a>
    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-blue-900	flex flex-wrap items-center text-base justify-center">
      <a className=" mr-5 text-blue-400 hover:text-red-900" >Home</a>
   <a className="mr-5  text-blue-400 hover:text-green-900" >About Us</a> 
       <a className="mr-5  text-blue-400 hover:text-pink-900">Contact Us</a> 
     
    </nav>
    
  </div>
</header>
    
    </main>
  )
}

export default Navbar