import React from 'react'
import Experts1 from '../assets/experts1.jpg';
import Experts2 from '../assets/experts2.jpg'
import Experts3 from '../assets/experts3.jpg'
import Mail2Svg from '../assets/icons/Mail2Svg'
const Experts = () => {
  return (
    <div>
      <section className='about experts max-w-screen h-[600px] relative z-10'>
        <div className='container flex justify-center'>
          <div className='max-w-screen flex flex-col justify-center about-header-content absolute z-20 pt-72 gap-3'>
            <h1 className='text-center text-white font-extrabold text-5xl tracking-wider'>Experts</h1>
          </div>
        </div>
        <div className='about-bg-wrapper'>
          <div className='about-bg'>
          </div>
        </div>
      </section>
      <div className='container'>
        <h1 className='text-center text-[56px] font-bold border-b-2 border-[#F44749] py-4'>Our Experts</h1>
        <div className='flex items-start py-5 gap-20'>
          <div className='flex flex-col w-4/12 items-center'>
            <div className='border-[3px] rounded-full p-3 border-[#246E89]'>
              <div className='box p-2'>
                <img width={230} src={Experts1} alt='mahorat experts one' />
              </div>
            </div>
            <div>
              <h3 className='text-center border-b-2 border-[#287088] py-3 text-[#287088] font-bold text-[20px]'>Khudaynazar <br /> Kurbanov</h3>
              <p className='font-bold text-center py-2'>Founder/CEO <br /> Mahorat & Management</p>
              <p className='text-center text-[#212529]'>Researcher (in the field of vocational education). Specialist with international experience in the fields of NQF, ISCED (UNESCO), Quality Assurance in Education. Content developer. Project manager. Co-founder of “Management & Management” organization. Has 18+ years of consulting experience in international and national projects.</p>
              <div className='flex items-center justify-center gap-2 py-2'>
                <div className='border rounded-full px-3 text-[#3B5998] font-bold py-1 text-[20px] border-[#3B5998] hover:cursor-pointer border-css'>f</div>
                <div className='border rounded-full px-2.5 text-[#D34836] font-bold py-1 text-[20px] border-[#D34836]'><a href="https://www.linkedin.com/in/khudaynazar-kurbanov-3b684b253/">in</a></div>
                <div className='border rounded-full px-2.5 py-2 hover:cursor-pointer'>
                <Mail2Svg/>
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-col w-4/12 items-center'>
            <div className='border-[3px] rounded-full p-3 border-[#246E89]'>
              <div className='box p-2'>
                <img width={230} src={Experts2} alt='mahorat experts one' />
              </div>
            </div>
            <div>
              <h3 className='text-center border-b-2 border-[#287088] py-3 text-[#287088] font-bold text-[20px]'>Dr. Feruza <br />
                Rashidova</h3>
              <p className='font-bold text-center py-2'>QA Expert in Education system <br /> Doctor of science in Pedagogy</p>
              <p className='text-center text-[#212529]'>Doctor of Science in Pedagogy. An expert on the quality of education system for more than 20 years. Expert and trainer in ensuring the quality of educational programs and systems for more than 10 years. Content developer. Project manager. Leading expert of “Management & Management” organization as with the rich experience in consulting, developing the international projects on enhancement of HRD as systematic approach on Quality Assurance establishment in management, establishing the standards of qualifications of the teachers and personnel in education systems for sustainable development of local educational providers.</p>
              <div className='flex items-center justify-center gap-2 py-2'>
                <div className='border rounded-full px-3 text-[#3B5998] font-bold py-1 text-[20px] border-[#3B5998] hover:cursor-pointer border-css'>f</div>
                <div className='border rounded-full px-2.5 text-[#D34836] font-bold py-1 text-[20px] border-[#D34836]'><a href="https://www.linkedin.com/in/khudaynazar-kurbanov-3b684b253/">in</a></div>
                <div className='border rounded-full px-2.5 py-2 hover:cursor-pointer'>
                <Mail2Svg/>
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-col w-4/12 items-center'>
            <div className='border-[3px] rounded-full p-3 border-[#246E89]'>
              <div className='box p-2'>
                <img width={230} src={Experts3} alt='mahorat experts one' />
              </div>
            </div>
            <div>
              <h3 className='text-center border-b-2 border-[#287088] py-3 text-[#287088] font-bold text-[20px]'>Shuhratxo‘ja <br /> Amanov</h3>
              <p className='font-bold text-center py-2'>Skills & Employment expert <br /> Education</p>
              <p className='text-center text-[#212529]'>Holds MBA degree in Financial Management. 20+ years working experience for the International Organizations in the areas of Business Development, Education, Skills and Human Capital Development. Several years' experience in management of and consultancy to donor and international lending agency funded projects in Armenia, Georgia, Kazakhstan, Tajikistan, Turkmenistan and Uzbekistan.</p>
              <div className='flex items-center justify-center gap-2 py-2'>
                <div className='border rounded-full px-3 text-[#3B5998] font-bold py-1 text-[20px] border-[#3B5998] hover:cursor-pointer border-css'>f</div>
                <div className='border rounded-full px-2.5 text-[#D34836] font-bold py-1 text-[20px] border-[#D34836]'><a href="https://www.linkedin.com/in/khudaynazar-kurbanov-3b684b253/">in</a></div>
                <div className='border rounded-full px-2.5 py-2 hover:cursor-pointer'>
                <Mail2Svg/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

  )
}

export default Experts