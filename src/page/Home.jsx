import React from 'react'
import LevelsImg from '../assets/levels-img.jpg'
const Home = () => {
 
  return (
    <div>
      <section className='news-and-events pt-[130px]'>
        <div className='container'>
          <h2 className='text-center text-4xl font-bold pb-2 border-b-2 border-[#F44749]'>News and Events</h2>
          <div className='news-cards flex w-full mt-5 gap-5'>
            <div className='card-wrapper'>
              <div className='card-one'>
                <div className='card-content flex flex-col items-start justify-end'>
                <div className='flex gap-2'>
                  <button className='bg-[#DC3545] text-white rounded px-2 py-1 text-center'>News</button>
                    <div className='bg-[#F0F8FF] px-2 py-1 rounded font-bold text-[#DC3545]'>
                    <p>December 1,2023</p>
                  </div>
                </div>
                <p className='text-2xl font-bold text-white'>LinguiSkills</p>
                </div>
              </div>
            </div>
            <div className='card-wrapper'>
              <div className='card-one card-two'>
                <div className='card-content card-content2 flex flex-col items-start justify-end'>
                <div className='flex gap-2'>
                  <button className='bg-[#DC3545] text-white rounded px-2 py-1 text-center'>News</button>
                    <div className='bg-[#F0F8FF] px-2 py-1 rounded font-bold text-[#DC3545]'>
                    <p>April 28,2023</p>
                  </div>
                </div>
                  <p className='text-2xl font-bold text-white'>Opening of the new office of "Mahorat & Management" took place in Tashkent</p>
                </div>
              </div>
            </div>
          </div>
          <div className='news-cards flex w-full mt-5 gap-5'>
            <div className='card-wrapper'>
              <div className='card-one card-three'>
                <div className='card-content card-content3 flex flex-col items-start justify-end'>
                <div className='flex gap-2'>
                  <button className='bg-[#DC3545] text-white rounded px-2 py-1 text-center'>News</button>
                    <div className='bg-[#F0F8FF] px-2 py-1 rounded font-bold text-[#DC3545]'>
                    <p>February 21,2023</p>
                  </div>
                </div>
                  <p className='text-2xl font-bold text-white'>The German organization GOPA, together with “Mahorat & Management” and other local partners, created the training program “Project GIZ”.</p>
                </div>
              </div>
            </div>
            <div className='card-wrapper'>
              <div className='card-one card-four'>
                <div className='card-content flex flex-col items-start justify-end'>
                <div className='flex gap-2'>
                  <button className='bg-[#DC3545] text-white rounded px-2 py-1 text-center'>News</button>
                    <div className='bg-[#F0F8FF] px-2 py-1 rounded font-bold text-[#DC3545]'>
                    <p>December 28,2022</p>
                  </div>
                </div>
                  <p className='text-2xl font-bold text-white'>"Golden Fund" of the students of the university</p>
                </div>
              </div>
            </div>
          </div>
          <div className='news-cards flex w-full mt-5 gap-5'>
            <div className='card-wrapper'>
              <div className=' card-five'>
              </div>
                <div className='flex flex-col items-start justify-end py-3'>
                <div className='flex gap-2'>
                  <button className='bg-[#0DCAF0] text-white rounded px-2 py-1 text-center'>Video</button>
                  <div className='bg-[#F0F8FF] px-2 py-1 rounded font-bold text-[#0DCAF0]'>
                    <p>30 April 2021</p>
                  </div>
                </div>
                <p className='text-2xl font-bold text-[#292828]'>The Role of Social Civil Organizations in Human Development Capital</p>
                </div>
            </div>
            <div className='card-wrapper'>
              <div className=' card-five card-six'>
              </div>
                <div className='flex flex-col items-start justify-end py-3'>
                <div className='flex gap-2'>
                  <button className='bg-black text-white rounded px-2 py-1 text-center'>Announcement</button>
                  <div className='bg-[#F0F8FF] px-2 py-1 rounded font-bold text-black'>
                    <p>23 March 2021</p>
                  </div>
                </div>
                <p className='text-2xl font-bold text-[#292828]'>Dear friends, today there was a great running exercise in the Botanical Garden.</p>
                </div>
            </div>
            <div className='card-wrapper'>
              <div className=' card-five card-seven'>
              </div>
                <div className='flex flex-col items-start justify-end py-3'>
                <div className='flex gap-2'>
                  <button className='bg-[#0DCAF0] text-white rounded px-2 py-1 text-center'>Meeting</button>
                  <div className='bg-[#F0F8FF] px-2 py-1 rounded font-bold text-[#0DCAF0]'>
                    <p>02 September 2021</p>
                  </div>
                </div>
                <p className='text-2xl font-bold text-[#292828]'>UzTEA invites you to a scheduled meeting: Zoom.</p>
                </div>
            </div>
           
          </div>
        </div>
      </section>
      <section className='human-capital'>
        <div className='container'>
          <h1 className='text-center text-4xl font-bold border-b-2 border-[#F44749] py-5'>We strive to advance human capital</h1>
          <p className='py-6 text-[#212529] text-2xl'>Non-governmental educational organization “Mahorat & Management” actively cooperates with state and non-state educational institutions and implements short and long term joint educational projects. It joins more than 20 experts nationwide, also 2-3 international experts which means it has capacity to act nationwide.</p>
          <img src={LevelsImg}/>
        </div>
      </section>
    </div>
  )
}

export default Home