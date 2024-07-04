import React from 'react'
// import Accordion from 'react-bootstrap/Accordion';
import { Accordion, AccordionItem } from '@szhsin/react-accordion';
import Icon1Svg from '../assets/icons/Icon1Svg';
import CheckSvg from '../assets/icons/CheckSvg';
import MahoratTraining from '../assets/mahorat-training.jpg'
const items = [
    {
        header: <h2>
            <button className=" font-semibold text-black text-[28px] flex gap-3 " type="button">
                <Icon1Svg />
                <p>Retraining and advanced training courses for adults</p>
            </button>
        </h2>,
        content: <div className='show'><div className='flex gap-3'>
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
            <p className='text-[20px] font-light pt-3'>Each level consists of 5 modules which equals a total of 180 hours of trainings. The total volume of practical and theoretical training on 4 qualification levels is 720 hours. An individual (pedagogues, managers) who successfully passes each level is awarded a Certificate of Achievement, which indicates their level of qualification in their working sphere.</p></div>
    },
    {
        header: 'Where does it come from?',
        content: 'Quisque eget luctus mi, vehicula mollis lorem...'
    },
    {
        header: 'Why do we use it?',
        content: 'Suspendisse massa risus, pretium id interdum in...'
    }
];
const AccordionComponent = () => {
  return (
      <Accordion>
          {items.map(({ header, content }, i) => (
              <AccordionItem header={header} key={i} initialEntered>
                  {content}
              </AccordionItem>
          ))}
      </Accordion>
  )
}

export default AccordionComponent