import React from 'react'
import LocationSvg from '../assets/icons/LocationSvg'
import PhoneSvg from '../assets/icons/PhoneSvg'
import MailSvg from '../assets/icons/MailSvg'

const Contact = () => {
  return (
    <div>
      <section className='about experts max-w-screen h-[600px] relative z-10'>
      <div className='container flex justify-center'>
        <div className='max-w-screen flex flex-col justify-center about-header-content absolute z-20 pt-72 gap-3'>
          <h1 className='text-center text-white font-extrabold text-5xl tracking-wider'>Contacts</h1>
        </div>
      </div>
      <div className='about-bg-wrapper'>
        <div className='about-bg'>
        </div>
      </div>
    </section>
    <section className='contact'>
        <div className='container'>
          <h1 className='text-center text-[56px] font-bold border-b-2 border-[#F44749] py-4'>Contact Mahorat & Management</h1>
          <div className='flex py-16'>
            <div className='w-4/12 flex flex-col justify-center items-center'>
              <div className='border rounded-full bg-[#2553B8] px-4 py-4'>
              <LocationSvg/>
              </div>
              <p className='text-center font-light text-[19px]'><b className='font-semibold'>Address:</b> Safdosh Street, 10
                Tashkent, Uzbekistan 100003</p>
            </div>
            <div className='w-4/12 flex flex-col justify-center items-center'>
              <div className='border rounded-full bg-[#2553B8] px-4 py-4'>
              <PhoneSvg/>
              </div>
              <p className='text-center  text-[19px] font-semibold'>Phone: <a href="tel://998951950055" className='font-light text-[#2553B8] hover:underline'>+998 95 195-00-55</a> </p>
            </div>
            <div className='w-4/12 flex flex-col justify-center items-center'>
              <div className='border rounded-full bg-[#2553B8] px-4 py-4'>
              <MailSvg/>
              </div>
              <p className='text-center  text-[19px] font-semibold'>Email: <a type='email' href="mailto:info@mahorat.org" className='font-light text-[#2553B8] hover:underline'>info@mahorat.org</a> </p>
            </div>
          </div>
          <div className='flex items-center justify-between'>
            <div className='bg-[#E8EDF0]'>
              <form action="">
                <h2>Contact Us</h2>
                <div>
                  <label htmlFor="">FULL NAME</label>
                  <input type="text" placeholder='FULL NAME'/>
                </div>
              </form>
            </div>
              <div className='contact-img w-6/12 h-[500px]'></div>
          </div>
        </div>
    </section>
    </div>
    
  )
}

export default Contact