import React from 'react'
import Icon1Svg from '../assets/icons/Icon1Svg'
import MahoratTraining from '../assets/mahorat-training.jpg'
import CheckSvg from '../assets/icons/CheckSvg'
import Icon2Svg from '../assets/icons/Icon2Svg'
import Raled from '../assets/raled-img.jpg'
import ExpertsSvg from '../assets/icons/ExpertsSvg'
import ReformsIconSvg from '../assets/icons/ReformsIconSvg'
import SearchSvg from '../assets/icons/SearchSvg'
import CivilImg from '../assets/civil-img.jpg'
import TorinoImg from '../assets/torino-img.jpg'
import DaryaIconSvg from '../assets/icons/DaryaIconSvg'
import DaryaImg from '../assets/darya.jpg'
import UzTeaIconSvg from '../assets/icons/UzTeaIconSvg'
import UzteaImg from '../assets/UzTea.jpg'
import QuoteSvg from '../assets/icons/QuoteSvg'
const Projects = () => {
  return (
    <div>
      <section className='about projects max-w-screen h-[570px] relative z-10'>
        <div className='container flex justify-center'>
          <div className='max-w-screen flex flex-col justify-center about-header-content absolute z-20 pt-[16rem] gap-3'>
            <h1 className='text-center text-white font-extrabold text-5xl tracking-wider'>Projects</h1>
          </div>
        </div>
        <div className='about-bg-wrapper'>
          <div className='about-bg'>
          </div>
        </div>
      </section>
      <div>
        <div className='container'>
          <h1 className='text-center text-[56px] font-bold border-b-2 border-[#F44749] py-4'>Our Projects</h1>

          <div className='flex gap-5 py-4'>
            <p className='text-[20px] font-light'>Mahorat & Management actively cooperates with governmental and non-governmental institutions and implements joint projects with the involvement of international experts. And also, we are working with youth helping them to gain skills and find their careers.</p>
            <p className='text-[20px] font-light'>We have started offering national and international experts’ services for local companies and organizations that needs consultancy and strategic planning.

              Currently, our projects are related to education management, continuous professional development & consultancy.</p>
          </div>

          <div className="accordion" id="accordionPanelsStayOpenExample">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button font-semibold text-black text-[28px] flex gap-3 " type="button" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne" data-bs-toggle="collapse">
                  <Icon1Svg />
                  <p>Retraining and advanced training courses for adults</p>
                </button>
              </h2>
              <div id="panelsStayOpen-collapseOne" className=" show">
                <div className="accordion-body">
                  <div className='flex gap-3'>
                    <img className='w-[615px]' src={MahoratTraining} alt='mahorat-training' />
                    <p className='text-[20px] font-light'>Today, the number of participants in the program exceeds 600 people, for whom online trainings are regularly organized with the participation of qualified teachers and psychologists. To improve the professional competency of managers and teachers in the field of education (teachers of all categories, methodologists, assessors, trainers, researchers and specialists) in accordance with the levels of International Standard Classification of Education since 2018 Mahorat & Management implementing a Program “Continuing Professional Development Program for Educators” that serves as a "road map" for managers and teachers to improve their professional skills from primary level to international expert level.</p>
                  </div>
                  <p className='text-[20px] font-light'>The CPD "Road map" includes: Based on this Program managers / teachers improve their skills on the basis of the principle of lifelong learning at 4 levels:</p>
                  <p className='flex items-center gap-1 font-medium text-xl py-1'>
                    <CheckSvg />
                    Foundation level
                  </p>
                  <p className='flex items-center gap-1 font-medium text-xl'>
                    <CheckSvg />
                    Developing level
                  </p>
                  <p className='flex items-center gap-1 font-medium text-xl py-1'>
                    <CheckSvg />
                    Expert level
                  </p>
                  <p className='flex items-center gap-1 font-medium text-xl'>
                    <CheckSvg />
                    National Expert at International Level
                  </p>
                  <p className='text-[20px] font-light pt-3'>Each level consists of 5 modules which equals a total of 180 hours of trainings. The total volume of practical and theoretical training on 4 qualification levels is 720 hours. An individual (pedagogues, managers) who successfully passes each level is awarded a Certificate of Achievement, which indicates their level of qualification in their working sphere.</p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button font-semibold text-black text-[28px] flex gap-3" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="true" aria-controls="panelsStayOpen-collapseTwo">
                  <Icon2Svg />
                  <p>Journal Research in Adult Learning and Education (RALED)</p>
                </button>
              </h2>
              <div id="panelsStayOpen-collapseTwo" className="accordion-collapse  show">
                <div className="accordion-body">
                  <div className='flex items-start gap-4 pt-2'>
                    <img className='w-[615px]' src={Raled} alt='raled image' />
                    <p className='text-[20px] font-light'>One of the latest projects of Mahorat & Management is the journal ‘Research in Adult Learning and Education’. The Research in Adult Learning and Education (RALED) journal is a publication for Uzbek and world practitioners and researchers involved in issues of life-long learning, quality assurance in education, and adult learning, taking into account the requirements of the labour market. This includes all forms of education and training aimed at ensuring adult participation in society and work: formal, non-formal and informal.</p>
                  </div>
                  <p className='text-[20px] font-light'>It covers, but is not limited to, these related areas:</p>
                  <p className='flex items-center gap-1 font-medium text-xl py-1'>
                    <CheckSvg />
                    pedagogy and psychology of vocational and professional training
                  </p>
                  <p className='flex items-center gap-1 font-medium text-xl py-1'>
                    <CheckSvg />
                    social partnership development
                  </p>
                  <p className='flex items-center gap-1 font-medium text-xl py-1'>
                    <CheckSvg />
                    advanced training and retraining of teaching and management staff
                  </p>
                  <p className='flex items-center gap-1 font-medium text-xl py-1'>
                    <CheckSvg />
                    adult education
                  </p>
                  <p className='flex items-center gap-1 font-medium text-xl py-1'>
                    <CheckSvg />
                    workplace training
                  </p>
                  <p className='flex items-center gap-1 font-medium text-xl py-1'>
                    <CheckSvg />
                    professional development
                  </p>
                  <p className='text-[20px] font-light pt-2'>Each level consists of 5 modules which equals a total of 180 hours of trainings. The total volume of practical and theoretical training on 4 qualification levels is 720 hours. An individual (pedagogues, managers) who successfully passes each level is awarded a Certificate of Achievement, which indicates their level of qualification in their working sphere.</p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button font-semibold text-black text-[28px] flex gap-3" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="true" aria-controls="panelsStayOpen-collapseThree">
                  <ExpertsSvg />
                  <p>Senior Experts Service (SES)</p>
                </button>
              </h2>
              <div id="panelsStayOpen-collapseThree" className="accordion-collapse  show">
                <div className="accordion-body">
                  <p className='text-[20px] font-light'>Since June 2019, Mahorat & Management actively cooperates with an expert organization in Germany, which brings together more than 12,500 retired professionals and executives providing advisory services on a voluntary basis. Within the framework of the agreement signed between the Mahorat & Management and SES, with the participation of the SES expert on information technologies Sh.Behjad, work has begun on the implementation of an information system for education management in the Academic Lyceum of UzSWLU.</p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button font-semibold text-black text-[28px] flex gap-3" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="true" aria-controls="panelsStayOpen-collapseFour">
                  <ReformsIconSvg />
                  <p>VET Reforms Project (SVRP) in Uzbekistan</p>
                </button>
              </h2>
              <div id="panelsStayOpen-collapseFour" className="accordion-collapse  show">
                <div className="accordion-body">
                  <p className='text-[20px] font-light'>Assistance to ‘Support to VET Reforms Project (SVRP) in Uzbekistan’ for conducting Governance Survey. Mahorat & Management is supporting the SVRP to conduct during April-July, 2022 a survey into the quality of VET governance in Uzbekistan. The survey aims to evaluate VET governance according to key functions of the VET system. The results from this study can be used to recommend changes to specific dimensions of governance. The survey will be digitally managed by SVRP partner CEMETS in Switzerland, but it needs preparation and follow-up on the ground in Uzbekistan.
                  </p>
                  <p className='text-[20px] font-light pt-2'>
                    It is expected that the total number of survey participants exceeds 2,500 from the system of ministries of higher and secondary specialized education, employment and labor relations, the chamber of commerce and industry and other VET stakeholders.</p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button font-semibold text-black text-[28px] flex gap-3" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFive" aria-expanded="true" aria-controls="panelsStayOpen-collapseFive">
                  <SearchSvg />
                  <p>ETF 'Civil Society organization and Human Capital Development'</p>
                </button>
              </h2>
              <div id="panelsStayOpen-collapseFive" className="accordion-collapse  show">
                <div className="accordion-body">
                  <div className='flex gap-3 items-start pt-2'>
                    <img className='w-[615px]' src={CivilImg} alt='civil image' />
                    <p className='text-[20px] font-light'>Conducting the “Survey on contribution of civil society organizations to the lifelong development of human capital” by request of the European Training Foundation (ETF) By request of the European Training Foundation, during August – December 2020 ‘Mahorat & Management’ conducted a survey among civil society organizations (SCOs) in Uzbekistan. The aim of this study is learning to what extent SCOs contribute to the formation of skills, competencies, knowledge and attitudes that contribute to the employment of people and the realization of their potential i.e. human capital development (HCD).</p>
                  </div>
                  <p className='text-[20px] font-light'>We provided a questionnaire that contained four sections:</p>
                  <p className='flex items-center gap-1 font-medium text-xl py-1'>
                    <CheckSvg />
                    organization profile
                  </p>
                  <p className='flex items-center gap-1 font-medium text-xl py-1'>
                    <CheckSvg />
                    CSOs response to the COVID-19 pandemic effects
                  </p>
                  <p className='flex items-center gap-1 font-medium text-xl py-1'>
                    <CheckSvg />
                    stakeholders/policy dialogue and potential of their organization in the HCD sector.
                  </p>
                  <p className='text-[20px] font-light pt-2'>This survey is conducted among selected 25 CSOs across the Republic of Uzbekistan which highly promoted informal and non-formal learning during a pandemic period for youth, women, and employment.</p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button font-semibold text-black text-[28px] flex gap-3" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseSix" aria-expanded="true" aria-controls="panelsStayOpen-collapseSix">
                  <SearchSvg />
                  <p>ETF 'Civil Society organization and Human Capital Development'</p>
                </button>
              </h2>
              <div id="panelsStayOpen-collapseSix" className="accordion-collapse  show">
                <div className="accordion-body">
                  <div className='flex gap-3 items-start pt-2'>
                    <img className='w-[615px]' src={TorinoImg} alt='civil image' />
                    <p className='text-[20px] font-light'>Mahorat & Management has been cooperating with the European Education Foundation since May 2019 within the framework of the Turin Process project, round 5. The Torino process monitors political progress every two years, allowing partner countries to coordinate and assess their progress in vocational education and training reforms. In the fifth phase of the project from 2019 to 2020, Mahorat & Management together with the Ministry of Higher and Secondary Special Education, other VET stakeholders actively supported the implementation of the Torino process, including the establishment of focus groups, conducting launch event, discussing the policy analysis.</p>
                  </div>
                  <p className='text-[20px] font-light pt-2'>During the implementation of this project the preparatory meetings in Tashkent, Andijan and Syrdarya regions were held, as well as meetings at the Ministry of Higher and Secondary Specialized Education with the participation of a group of experts from the Torino Process, in other interested ministries were held. The launch event was held on June 14, 2019 at the Radisson Blue Hotel. Experts have prepared a draft National Report and is in the process of discussion with practitioners, representatives of educational institutions, professional associations, government and non-governmental organizations throughout our republic.</p>

                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button font-semibold text-black text-[28px] flex gap-3" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseSeven" aria-expanded="true" aria-controls="panelsStayOpen-collapseSeven">
                  <DaryaIconSvg />
                  <p>ETF 'Mission and consultations including DARYA Action'</p>
                </button>
              </h2>
              <div id="panelsStayOpen-collapseSeven" className="accordion-collapse  show">
                <div className="accordion-body">
                  <div className='flex gap-3 items-start pt-2'>
                    <img className='w-[269px]' src={DaryaImg} alt='civil image' />
                    <p className='text-[20px] font-light'>Assistance to organizing ETF Mission and consultations including DARYA Action. As a long-term partner for the ETF “Mahorat & Management” team has assisted to organise an ETF Team Mission to Tashkent in order to present the activities in Uzbekistan in the ETF 2021-2027 work programme and in particular cooperation in the forthcoming EU Regional Action DARYA, which ETF is planning to implement on behalf of the European Union.</p>
                  </div>
                  <p className='text-[20px] font-light pt-2'>The ETF Mission was organized within the Co-operation in Vocational Education and Training, Labour Market and Skills Development, Lifelong Learning between the European Training Foundation and Government Institutions of Uzbekistan. Our support consisted in planning and organizing meetings, round tables, as well as logistical support in organizing the visit, translation services and meetings of ETF team comprising of senior specialist ETF Darya team members led by the ETF Country Liaison for Uzbekistan – Mr.Ian Cumming, and Focal point for Central Asia Ms. Christine Hemschemeier (ETF) during their visit to Tashkent from 27 June to 6 July 2022.</p>

                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button font-semibold text-black text-[28px] flex gap-3" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseEight" aria-expanded="true" aria-controls="panelsStayOpen-collapseEight">
                  <UzTeaIconSvg />
                  <p>Conducting events (conferences / workshops / webinars)</p>
                </button>
              </h2>
              <div id="panelsStayOpen-collapseEight" className="accordion-collapse  show">
                <div className="accordion-body">
                  <div className='bg-[#FFF4ED] w-full px-5 py-3 my-3'>
                    <div className='flex items-center'>
                      <div className='border-t-[3px] border-[#3CA1D9] w-5/12'></div>
                      <div className='w-2/12 flex justify-center'>
                        <QuoteSvg />
                      </div>
                      <div className='border-t-[3px] border-[#3CA1D9] w-5/12'></div>
                    </div>
                    <p className='text-[20px] font-light text-center py-2'>By request of Uzbekistan Teachers of English Association which has implemented the US funded Project “Core Values Standard of the Teacher Training based on LMS Technology for pre-school education Teachers” during December, 2021 – March, 2022 “Mahorat & Management” assisted in holding an online conference and 8 online webinars.</p>
                    <div className='flex items-center'>
                      <div className='border-t-[3px] border-[#3CA1D9] w-5/12'></div>
                      <div className='w-2/12 flex justify-center'>
                        <QuoteSvg />
                      </div>
                      <div className='border-t-[3px] border-[#3CA1D9] w-5/12'></div>
                    </div>
                  </div>
                  <div className='flex gap-3 items-start pt-2'>
                    <img className='w-[269px]' src={UzteaImg} alt='civil image' />
                    <p className='text-[20px] font-light'>
                      The project team prepared 8 curriculum modules based on Core Professional Standard for Teachers for Uzbekistan. The TOT group, for which the delivery of the curriculum modules was planned, were identified among the teachers of preschool education. The developed modules are gradually delivered to TOT groups starting from January 21, 2022 until February 28, 2022 using Zoom platform. The average number of participants in each of these online webinars is 80-85 people.</p>
                  </div>
                  <p className='text-[20px] font-light pt-2'>On March 4, 2022 an international conference of participants was conducted. The conference was held in English with simultaneous translation into Uzbek and Russian. The conference was attended by teachers and university students. Students enrolled in the Master of Arts in Education and Innovation (MAEDIN) at Webster University also attended the conference. As guests, the conference was attended by representatives of the Ministry of Preschool Education, the European Training Foundation and other non-governmental organizations.</p>
                  <div className='bg-[#FFF4ED] w-full px-5 py-3 my-3'>
                    <div className='flex items-center'>
                      <div className='border-t-[3px] border-[#3CA1D9] w-5/12'></div>
                      <div className='w-2/12 flex justify-center'>
                        <QuoteSvg />
                      </div>
                      <div className='border-t-[3px] border-[#3CA1D9] w-5/12'></div>
                    </div>
                    <p className='text-[20px] font-light text-center py-2'>Mahorat & Management team is actively involved in organizing TOT, webinars and workshops within the Project ‘Creating an educational and regulatory framework and methodological support for the introduction of a dual training system in the system of vocational education’.</p>
                    <div className='flex items-center'>
                      <div className='border-t-[3px] border-[#3CA1D9] w-5/12'></div>
                      <div className='w-2/12 flex justify-center'>
                        <QuoteSvg />
                      </div>
                      <div className='border-t-[3px] border-[#3CA1D9] w-5/12'></div>
                    </div>
                  </div>
                  <p className='text-[20px] font-light'>This project is being implemented by Uzbekistan Teachers of English Association (UzTEA) in cooperation the Ministry of Higher and Secondary Specialized Education starting from September, 2021 that is financed by the Public Fund for Support of Non-Governmental Organizations and Other Institutions of Civil Society under the Oliy Majlis (Parliament) of the Republic of Uzbekistan.</p>
                  <p className='text-[20px] font-light pt-2'>The project provides for the development of 10 professional standards in priority areas, the development of a methodological manual for the development of dual education programs, curricula (modules) for 10 selected professions for the introduction of dual education, a procedure for assessing the qualifications of graduates of the dual education program, as well as organization of 10 seminars and short-term trainings on the introduction of dual education for more than 3,000 managers and teachers working in the vocational education system.</p>
                </div>
              </div>
            </div>
          </div>
          {/* <AccordionComponent/> */}
        </div>
      </div>
    </div>

  )
}

export default Projects