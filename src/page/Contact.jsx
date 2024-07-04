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
          <div className='flex py-16 items-start'>
            <div className='w-4/12 flex flex-col justify-center items-center'>
              <div className='border rounded-full bg-[#2553B8] px-4 py-4'>
              <LocationSvg/>
              </div>
              <p className='text-center font-light text-[19px] py-3'><b className='font-semibold'>Address:</b> Safdosh Street, 10
                Tashkent, Uzbekistan 100003</p>
            </div>
            <div className='w-4/12 flex flex-col justify-center items-center'>
              <div className='border rounded-full bg-[#2553B8] px-4 py-4'>
              <PhoneSvg/>
              </div>
              <p className='text-center  text-[19px] font-semibold py-3'>Phone: <a href="tel://998951950055" className='font-light text-[#2553B8] hover:underline'>+998 95 195-00-55</a> </p>
            </div>
            <div className='w-4/12 flex flex-col justify-center items-center'>
              <div className='border rounded-full bg-[#2553B8] px-4 py-4'>
              <MailSvg/>
              </div>
              <p className='text-center  text-[19px] font-semibold py-3'>Email: <a type='email' href="mailto:info@mahorat.org" className='font-light text-[#2553B8] hover:underline'>info@mahorat.org</a> </p>
            </div>
          </div>
          <div className='flex items-center gap-4'>
            <div className='bg-[#E8EDF0] py-5 px-5 w-7/12'>
              <form action="">
                <h2 className='text-[42px] font-semibold pb-4'>Contact Us</h2>
                <div className='flex gap-4 items-center'>
                  <div>
                  <label htmlFor="fullName" className='text-[12px] font-semibold'>FULL NAME</label> <br />
                  <input type="text" className='rounded px-4 py-2 outline-none' id='fullName' name='fullName' placeholder='Full Name'/>
                  </div>
                  <div className='pt-1.5'>
                    <label htmlFor="fullName" className='text-[12px] font-semibold'>EMAIL ADDRESS</label> <br />
                    <input type="text" className='rounded px-4 py-2 outline-none' id='fullName' name='fullName' placeholder='Email Address'/>
                  </div>
                </div>
                <div className='py-2.5'>
                  <label htmlFor="subject" className='text-[12px] font-semibold'>SUBJECT</label> <br />
                  <input type="text" id='subject' name='subject' placeholder='Subject' className='w-full rounded px-4 py-2 outline-none' />
                </div>
                <div>
                  <label className=' text-[12px] font-semibold' htmlFor="MESSAGE">MESSAGE</label> <br />
                  <textarea placeholder='Message' className='w-full outline-none rounded px-4 py-2'/>
                </div>
                <div className='py-3'>
                  <button className='bg-[#2553B8] text-white px-[16px] py-[12px] rounded text-[14px] font-normal hover:bg-[#5785E8] duration-300'>
                    Send Message
                  </button>
                </div>
              </form>
            </div>
              <div className='contact-img w-5/12 h-[500px]'></div>
          </div>
        </div>
          <div className='w-screen max-w-full pt-20'>
            <iframe style={{width:'100%'}} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5762.635391208315!2d69.240903!3d41.277431!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8a8a65339a47%3A0x7be3a713adadc47b!2sSafdosh%20St%2C%20Tashkent%2C%20Uzbekistan!5e1!3m2!1sen!2sus!4v1720086303462!5m2!1sen!2sus" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
    </section>
    </div>
    
  )
}

export default Contact