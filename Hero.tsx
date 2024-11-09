import React from 'react'

const Hero = () => {
  return (
    <div><section className="text-gray-600 body-font">
    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
        <img className="object-cover object-center rounded  w-[400px] h-[400p]" alt="hero" src="https://photosnow.org/wp-content/uploads/2024/04/cute-hijab-girl-dp_10.jpg"/>
      </div>
      <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
        <h1 className="title-font sm:text-7xl text-5xl mb-4 font-medium text-black bg-blue-400">Hi I'm
          <br className="hidden lg:inline-block"/>Basma Khan
        </h1>
        <p className="mb-8 leading-relaxed text-7xl bg-blue-400 text-black sm:text-7xl">FRONT-END DEVELOPER </p>
        <div className="flex justify-center">
          
        </div>
      </div>
    </div>
  </section>
      
    </div>
  )
}

export default Hero
