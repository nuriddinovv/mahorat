import React from 'react'

const About = () => {
  return (
    <section className='about max-w-screen h-[600px] relative z-10'>
        <div className='container flex justify-center'>
          <div className='max-w-screen flex flex-col justify-center about-header-content absolute z-20 pt-72 gap-3'>
          <h1 className='text-center text-white font-extrabold text-5xl tracking-wider'>Who We Are?</h1>
            <p className='text-white font-bold text-lg text-center'>We are non-governmental educational organization that has been operating since 2015 in <br /> the field of adults training...
            </p>
          </div>
        </div>
      <div className='about-bg-wrapper'>
      <div className='about-bg'>
      </div>
      </div>
    </section>
  )
}

export default About