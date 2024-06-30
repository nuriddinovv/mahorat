import React from 'react'
const About = () => {
  return (
    <div>
      <section className='about max-w-screen h-[600px] relative z-10'>
        <div className='container flex justify-center'>
          <div className='max-w-screen flex flex-col justify-center about-header-content absolute z-20 pt-72 gap-3'>
            <h1 className='text-center text-white font-extrabold text-[56px] tracking-wider'>Who We Are?</h1>
            <p className='text-white font-bold text-lg text-center'>We are non-governmental educational organization that has been operating since 2015 in <br /> the field of adults training...
            </p>
          </div>
        </div>
        <div className='about-bg-wrapper'>
          <div className='about-bg'>
          </div>
        </div>
      </section>
      <section>
        <div className='container'>
          <h1 className='text-center py-3 font-bold text-[56px] border-b-[3px] border-b-[#FF0000]'>WHO WE ARE?</h1>
          <div className='flex gap-3 pt-5 items-start'>
            <div className='w-6/12 bg-cover min-h-[880px] we-about'>
            </div>
            <div className='w-6/12'>
              <p className='text-[21px] font-light'>Mahorat & Management was founded by a group of expert-initiators on professional education as an independent research and training center to support HRD - Human Resource Development.

                We are non-governmental educational organization that has been operating since 2015 in the field of adults training, ensuring the quality of education and introducing international standards to local educational process, including the introduction of advanced forms of training and retraining using information technologies, improving curriculum and materials based on the widespread use of modern teaching methods.

                The goal of the non-governmental educational organization “Mahorat & Management” is to build up human and social potential by ensuring the quality of education in the following five areas, constantly, systematically increasing the potential of personnel: 1. A systematic approach to management, through e-management 2. A systematic approach to creating standards for pedagogical qualifications at each level of education. 3. Building the capacity of a resource for learning, studying, evaluating and monitoring. 4. Systematic analysis of the labor market for potential personnel and training of qualified personnel through the lifelong learning approach. 5. Systematically and gradually increasing the capacity of management in each of the above systems. To achieve its goals, “Mahorat & Management” conducts its activities together with governmental, non-governmental organizations, including experts working in the field of education.</p>
            </div>
          </div>
        </div>
        <div className='our-goal py-16'>
          <div className='container'>
          <div className='our-goal-textBg w-8/12 py-20 px-20'>
              <h3 className='text-[28px] font-bold text-white leading-relaxed'>Our mission is to unite and build the capacity of experts in order to improve the mechanisms and systems of vocational education, based on international quality indicators and the requirements of the international labor market.</h3>
          </div>
          </div>
        </div>
      </section>
    </div>

  )
}

export default About