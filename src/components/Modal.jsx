import React from 'react'

const Modal = ({ setShowModal }) => {
    const closeModal = () => {
        setShowModal(false)
    }
    return (
        <div className='max-w-screen w-full min-h-screen h-full modalBg fixed overflow-y-scroll'>
            <div className='flex justify-center py-4'>
                <div className='border-2 px-10 py-4 bg-white rounded absolute z-50 w-9/12'>
                    <div className='flex items-center justify-between w-full'>
                        <h3 className='text-[38px] font-semibold'>Join us</h3>
                        <button className='px-2.5 text-[#7F7F7F] rounded-full text-[26px] font-medium hover:bg-[#c4c8c8] hover:text-white duration-300' onClick={closeModal}>x</button>
                    </div>
                    <p className='py-4 text-[20.8px] font-light'>Please fill out the application form to join our Experts team.</p>
                    <form action="">
                        <div>
                            <label htmlFor="title" className='text-[#717275] text-[17px] font-semibold pb-2'>Title</label> <br />
                            <select className='form-control text-[#717275] py-2' name="title" id="title">
                                <option value="choose">Choose</option>
                                <option value="dr.">Dr.</option>
                                <option value="professor">Professor</option>
                                <option value="expert">Expert</option>
                                <option value="mr.">Mr.</option>
                                <option value="miss.">Miss.</option>
                                <option value="mrs.">Mrs.</option>
                            </select>
                        </div>
                        <div className='flex items-center gap-3'>
                            <div className='w-6/12'>
                                <label htmlFor="first-name" className='text-[#717275] text-[17px] font-semibold pt-4 pb-2'>First Name</label>
                                <input className='form-control py-2' type="text" id='first-name' name='first-name' placeholder='First Name' />
                            </div>
                            <div className='w-6/12'>
                                <label htmlFor="last-name" className='text-[#717275] text-[17px] font-semibold pt-4 pb-2'>Last Name</label>
                                <input className='form-control py-2' type="text" id='last-name' name='last-name' placeholder='Last Name' />
                            </div>
                        </div>
                        <div className='flex items-center gap-3'>
                            <div className='w-6/12'>
                                <label htmlFor="mail" className='text-[#717275] text-[17px] font-semibold pt-4 pb-2'>Email Address</label>
                                <input className='form-control py-2' type="text" id='mail' name='mail' placeholder='your@email.com' />
                            </div>
                            <div className='w-6/12'>
                                <label htmlFor="phone-number" className='text-[#717275] text-[17px] font-semibold pt-4 pb-2'>Phone Number</label>
                                <input className='form-control py-2' type="text" id='phone-number' name='phone-number' placeholder='123-456-7890' />
                            </div>
                        </div>
                        <div className='flex items-center gap-3'>
                            <div className='w-6/12 pt-4'>
                                <label htmlFor="study" className='text-[#717275] text-[17px] font-semibold pb-2'>Field of study (by classifier)</label> <br />
                                <select className='form-control text-[#717275] py-2' name="study" id="study">
                                    <option>Choose</option>
                                    <option value="1">110,000 - Pedagogy</option>
                                    <option value="2">210,000 - Art</option>
                                    <option value="3">220,000 - Humanities</option>
                                    <option value="4">310,000 - Journalism and social information</option>
                                    <option value="5">320,000 - Business and management</option>
                                    <option value="6">330,000 - Right</option>
                                    <option value="7">410,000 - Natural sciences</option>
                                    <option value="8">510,000 - Engineering work</option>
                                    <option value="9">520,000 - Computer technologies and informatics</option>
                                    <option value="10">530,000 - Manufacturing and processing industries</option>
                                    <option value="11">540,000 - Architecture and construction</option>
                                    <option value="12">5550,000 - Communication and information, telecommunication technologies</option>
                                    <option value="13">610,000 - Agriculture, forestry and fisheries</option>
                                    <option value="14">620,000 - Agricultural machinery</option>
                                    <option value="15">630,000 - Veterinary medicine</option>
                                    <option value="16">620,000 - Agricultural irrigation and reclamation</option>
                                    <option value="17">710,000 - Healthcare</option>
                                    <option value="18">710,000 - Social security</option>
                                    <option value="19">810,000 - Maintenance</option>
                                    <option value="20">820,000 - Transport</option>
                                    <option value="21">830,000 - Environmental protection</option>
                                    <option value="22">840,000 - Life safety</option>
                                </select>
                            </div>
                            <div className='w-6/12 pt-4'>
                                <label htmlFor="work" className='text-[#717275] text-[17px] font-semibold pb-2'>Work experience since</label> <br />
                                <select className='form-control text-[#717275] py-2' name="study" id="study">
                                    <option>Choose</option>
                                    <option value="1">Less than 1 year</option>
                                    <option value="2">More than 1 years</option>
                                    <option value="3">Less than 5 years</option>
                                </select>
                            </div>
                        </div>
                        <div className='flex items-center gap-3'>
                            <div className='w-6/12 pt-4'>
                                <label htmlFor="study" className='text-[#717275] text-[17px] font-semibold pb-2'>Spoken language(s)</label> <br />
                                <select className='form-control text-[#717275] py-2' name="study" id="study">
                                    <option>Choose</option>
                                    <option value="1">English</option>
                                    <option value="2">Russian</option>
                                    <option value="3">Uzbek</option>
                                </select>
                            </div>
                            <div className='w-6/12 pt-4'>
                                <label htmlFor="work" className='text-[#717275] text-[17px] font-semibold pb-2'>Citizenship</label> <br />
                                <select className='form-control text-[#717275] py-2' name="study" id="study">
                                    <option>Choose</option>
                                    <option value="1">Less than 1 year</option>
                                    <option value="2">More than 1 years</option>
                                    <option value="3">Less than 5 years</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <label className='text-[#717275] text-[17px] font-semibold pt-3 pb-2' htmlFor="radio">Preferred project duration</label> <br />
                            <label>
                                <input type="radio" name="gender" value="short" /> Short term
                            </label> <br />
                            <label>
                                <input type="radio" name="gender" value="long" /> Long term
                            </label>
                        </div>
                        <div>
                            <label htmlFor="" className='text-[#717275] text-[17px] font-semibold py-3 pb-2'>Special Request</label>
                            <textarea className='form-control h-[150px]' name="" id=""></textarea>
                        </div>
                        <div className='flex justify-end py-4'>
                            <button className='bg-black text-white px-24 font-semibold py-2 rounded hover:bg-[#F44749]'>SUBMIT</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Modal