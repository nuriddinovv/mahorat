import React from 'react'
import NoteIconSvg from '../assets/icons/NoteIconSvg'
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
        <div className='container pb-5'>
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
        <div className='our-plan py-5'>
          <div className='container'>
            <div className='flex items-center gap-3'>
              <div className='w-8/12'>
                <h2 className='font-bold text-[28px] '>We aim towards realizing the following key components:</h2>
                <div className='bg-[#D5E9F6] border-[3px] border-white about-card my-3'>
                  <p className='text-[18px] font-light px-4 py-3 tracking-wider'>
                    <b className='text-[20px] font-bold'>EDUCATIONAL </b> - to develop high-quality education, to assist the professional development of managers and teachers, professional development and retraining of highly qualified specialists based on the principle of LLL;
                  </p>
                  <div className='info-tab note-icon'>
                    <i className='flex justify-center mt-[20%]'>
                      <NoteIconSvg />
                    </i>
                  </div>
                </div>
                <div className='bg-[#D5E9F6] border-[3px] border-white about-card my-4'>
                  <p className='text-[18px] font-light px-4 py-3 tracking-wider'>
                    <b className='text-[20px] font-bold'>CULTURAL </b> - to be a cultural educational center, contributing to a change in the social environment, creating a certain spiritual atmosphere, teaching intelligent and constructive problem solving;
                  </p>
                  <div className='info-tab note-icon'>
                    <i className='flex justify-center mt-[20%]'>
                      <NoteIconSvg />
                    </i>
                  </div>
                </div>
                <div className='bg-[#D5E9F6] border-[3px] border-white about-card my-4'>
                  <p className='text-[18px] font-light px-4 py-3 tracking-wider'>
                    <b className='text-[20px] font-bold'>INNOVATIVE </b> - Ensuring inclusive and equal quality education, supporting life-long learning opportunities for all, using new methods and technologies in retraining and professional development of specialists, developing their innovative thinking;
                  </p>
                  <div className='info-tab note-icon mt-[-27px]'>
                    <i className='flex justify-center mt-[20%]'>
                      <NoteIconSvg />
                    </i>
                  </div>
                </div>
                <div className='bg-[#D5E9F6] border-[3px] border-white about-card my-4'>
                  <p className='text-[18px] font-light px-4 py-3 tracking-wider'>
                    <b className='text-[20px] font-bold'>CONSTRUCTIVE  </b> - we build a constructive partnership with the local governmental and nongovernmental organizations and individuals according to their interest in a partnership in HRD.
                  </p>
                  <div className='info-tab note-icon'>
                    <i className='flex justify-center mt-[20%]'>
                      <NoteIconSvg />
                    </i>
                  </div>
                </div>
              </div>
              <div className='about-img3BG w-4/12'></div>
            </div>
            <h1 className='text-center pt-14 pb-2 font-bold text-[56px] border-b-[3px] border-b-[#FF0000]'>How We Work</h1>
            <p className='font-light text-[24px] pt-4'>Our strategy for sustainable development is based on the UNESCO Declaration - Education 2030: Achieving Inclusive and Equitable Quality Education and Lifelong Learning for All. In order to realize this strategy the organization regularly runs following projects:</p>
            <div>
              <div className='flex items-center'>
                <div className='about-card1 w-6/12'>
                  <h3></h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

  )
}

export default About