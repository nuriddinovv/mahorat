import React from 'react'
import ServiceResearch from '../assets/services-research.jpg'
import ServiceLearning from '../assets/services-learning.jpg'
import ServiceTranslating from '../assets/services-translating.jpg'
import ServiceOrganizer from '../assets/services-organizer.jpg'
import ServiceGroup from '../assets/services-group.jpg'
const Services = () => {
  return (
    <div>
      <section className='about service max-w-screen h-[600px] relative z-10'>
        <div className='container flex justify-center'>
          <div className='max-w-screen flex flex-col justify-center about-header-content absolute z-20 pt-72 gap-3'>
            <h1 className='text-center text-white font-extrabold text-5xl tracking-wider'>Services</h1>
          </div>
        </div>
        <div className='about-bg-wrapper'>
          <div className='about-bg'>
          </div>
        </div>
      </section>
      <div className='our-services'>
        <div className='container'>
          <h1 className='text-center text-[56px] font-bold border-b-2 border-[#F44749] py-5'>Our Services</h1>
          <div className='pt-5'>

            <div className='flex items-center gap-5'>
              <div className='flex border-3 w-6/12 rounded-lg border-[#0077AA] hover:border-[#FE0003] py-4 px-3 items-center gap-3 service-card'>
                <img className='w-[130px] h-[130px]' src={ServiceResearch} alt="service-research" />
                <div>
                  <h3 className='border-b-[3px] border-b-[#FE0003] text-[28px] font-semibold pb-2'>Research</h3>
                  <p className='text-[22px] pt-2 pb-5'>Conducting social surveys in partnership with local and international research institutions on HRD, research and analysis in the field of education and labor market.</p>
                </div>
              </div>
              <div className='col-span-12 flex border-3 w-6/12 rounded-lg border-[#0077AA] hover:border-[#FE0003] py-4 px-3 items-center gap-3 service-card'>
                <img className='w-[130px] h-[130px]' src={ServiceLearning} alt="service-research" />
                <div>
                  <h3 className='border-b-[3px] border-b-[#FE0003] text-[28px] font-semibold pb-2'>Adult Learning</h3>
                  <p className='text-[22px] pt-2 pb-3'>Organization and conduct of trainings for adults, including continuing professional development programs, advanced training, retraining of teachers and managers of educational institutions.</p>
                </div>
              </div>
            </div>
           
            <div className='flex items-center pt-14 gap-5'>
              <div className='flex border-3 w-6/12 h-3/6 rounded-lg border-[#0077AA] hover:border-[#FE0003] py-4 px-3 items-center gap-3 service-card'>
                <img className='w-[130px] h-[130px]' src={ServiceTranslating} alt="service-research" />
                <div>
                  <h3 className='border-b-[3px] border-b-[#FE0003] text-[28px] font-semibold pb-2'>Translation Services</h3>
                  <p className='text-[22px] pt-2 pb-5'>
                    Translation Services
                    Written and oral translations from English into Russian, Uzbek, Tajik, Kazakh, Turkmen languages and vice versa.</p>
                </div>
              </div>
              <div className='flex border-3 w-6/12 h-3/6 rounded-lg border-[#0077AA] hover:border-[#FE0003] py-4 px-3 items-center gap-3 service-card'>
                <img className='w-[130px] h-[130px]' src={ServiceOrganizer} alt="service-research" />
                <div>
                  <h3 className='border-b-[3px] border-b-[#FE0003] text-[28px] font-semibold pb-2'>Event Management</h3>
                  <p className='text-[22px] pt-2 pb-5'>Organizing round tables, conferences, webinars, trainings, workshops with the officials, professional associations, and non-governmental organizations.</p>
                </div>
              </div>
            </div>
            
            <div className='flex items-center pt-14 gap-5'>
              <div className='flex border-3 w-6/12 rounded-lg border-[#0077AA] hover:border-[#FE0003] py-4 px-3 items-center gap-3 service-card'>
                <img className='w-[130px] h-[130px]' src={ServiceGroup} alt="service-research" />
                <div>
                  <h3 className='border-b-[3px] border-b-[#FE0003] text-[28px] font-semibold pb-2'>Logistics</h3>
                  <p className='text-[22px] pt-2'>
                    Open to provide logistic services for the international and local partners. Provision of logistics services, including transfers, technical support in organizing trainings, coffee breaks, seminars and other events.</p>
                </div>
              </div>
              <div className='flex border-3 w-6/12 rounded-lg border-[#0077AA] hover:border-[#FE0003] py-4 px-3 items-center gap-3 service-card'>
                <img className='w-[130px] h-[130px]' src={ServiceOrganizer} alt="service-research" />
                <div>
                  <h3 className='border-b-[3px] border-b-[#FE0003] text-[28px] font-semibold pb-2'>Outsourcing</h3>
                  <p className='text-[22px] pt-2 pb-24'>Offering following outsourcing services: Finance management (tax reporting; accounting); IT Support; Data analysis</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

  )
}

export default Services