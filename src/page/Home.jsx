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
      <section className='our-projects'>
        <div className='container'>
          <h1 className='text-center text-4xl font-bold border-b-2 border-[#F44749] py-5'>Our Projects</h1>
          <div className='flex items-start gap-8 py-10'>
            <div className='card-wrapper'>
              <div className='card-one card-eight'>
                <div className='card-content flex flex-col items-start justify-end'>
                  <div className='flex gap-2'>
                    <button className='bg-[#198754] text-white rounded px-2 py-1 text-center'>Projects</button>
                  </div>
                  <p className='text-3xl py-1 font-bold text-white'>ETF ‘Torino Process’ project</p>
                </div>
              </div>
            </div>
            <div className='card-text w-[50%]'>
              <h2 className='font-bold text-3xl '>ETF ‘Torino Process’ project</h2>
              <p className='text-[#212529] text-2xl py-3 font-normal'>Mahorat & Management has been cooperating with the European Education Foundation since May 2019 within the framework of the Torino Process project. It is known that Uzbekistan has been participating in the Torino Process since 2010 at the initiative of the European Training Foundation. The Torino process monitors political progress every two years, allowing partner countries to coordinate and assess their progress in vocational education and training reforms.</p>
            </div>
          </div>
          <div className='flex items-start gap-8 py-10 border-t-2 border-b-2'>
            <div className='card-text w-[50%]'>
              <h2 className='font-bold text-3xl '>Journal Research in Adult Learning and Education (RALED)</h2>
              <p className='text-[#212529] text-2xl py-3 font-normal'>The Adult Education and Research (RALED) journal encompasses lifelong learning, quality assurance and adult learning, in accordance with labor market requirements. This includes forms of education and upbringing aimed at ensuring the participation of adults in society. This journal of research and education is published by practitioners and researchers in Uzbekistan and can be a resource for adult learning and education management with the best practice in the world. RALED aims to provide a medium for informed discussion about the principles and practice which determine the methods of social capital in society. It also provides a forum for the exchange of information and ideas among practitioners and researchers worldwide.</p>
            </div>
            <div className='card-wrapper'>
              <div className='card-one card-eight'>
                <div className='card-content flex flex-col items-start justify-end'>
                  <div className='flex gap-2'>
                    <button className='bg-[#198754] text-white rounded px-2 py-1 text-center'>Projects</button>
                  </div>
                  <p className='text-3xl py-1 font-bold text-white'>ETF ‘Torino Process’ project</p>
                </div>
              </div>
            </div>
          </div>
          <div className='flex items-start gap-8 py-10'>
            <div className='card-wrapper'>
              <div className='card-one card-eight'>
                <div className='card-content card-content2 flex flex-col items-start justify-end'>
                  <div className='flex gap-2'>
                    <button className='bg-[#198754] text-white rounded px-2 py-1 text-center'>Projects</button>
                  </div>
                  <p className='text-3xl py-1 font-bold text-white'>Creating a regulatory framework of dual training system</p>
                </div>
              </div>
            </div>
            <div className='card-text w-[50%]'>
              <h2 className='font-bold text-3xl '>Creating a regulatory framework of dual training system</h2>
              <p className='text-[#212529] text-2xl py-3 font-normal'>The project "Creating an educational and regulatory framework and methodological support for the introduction of a dual training system in the system of vocational education" financed by grant funds from the government, which is implemented in partnership with Uzbekistan Teachers of English Association (UzTEA), Mahorat&Management and the Ministry of Higher and Secondary Specialized Education is an ongoing project.</p>
            </div>
          </div>
        </div>
      </section>
      <section className='bodysection'>
      </section>
    </div>
  )
}

export default Home