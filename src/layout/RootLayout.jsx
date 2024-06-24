import React, { useEffect, useState } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import Logo from '../assets/mahorat-logo.png'
import Mahorat from '../assets/mahorat-tech.jpg'
import Uztea from '../assets/UzTea.jpg'
import Raled from '../assets/raled.jpg'
import Goodly from '../assets/goodly.jpg'
const RootLayout = () => {
    const [scrolled, setScrolled] = useState(false)
    useEffect(() => {
        function handleScroll() {
            if (window.scrollY > 0) setScrolled(true)
            else setScrolled(false)
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])
    return (
        <div>
            <nav className={` ${scrolled && 'scrolled'} fixed top-0 left-0 w-full h-[120px] z-50 bg-white`}>
                <div className='container'>
                    <div className='nav-content flex items-center justify-between py-5'>
                        <div className='project-logo'>
                            <NavLink to={'/'}>
                            <img src={Logo} alt="mahorat-logo" />
                            </NavLink>
                        </div>
                        <div className='nav-links flex gap-7'>
                            <NavLink to={'/'} className={'nav-link-item text-[#182B98] font-bold hover:text-[#F44749] text-lg'}>Home</NavLink>
                            <NavLink to={'about'} className={'nav-link-item text-[#182B98] font-bold hover:text-[#F44749] text-lg'}>About</NavLink>
                            <NavLink to={'services'} className={'nav-link-item text-[#182B98] font-bold hover:text-[#F44749] text-lg'}>Services</NavLink>
                            <NavLink to={'projects'} className={'nav-link-item text-[#182B98] font-bold hover:text-[#F44749] text-lg'}>Projects</NavLink>
                            <NavLink to={'experts'} className={'nav-link-item text-[#182B98] font-bold hover:text-[#F44749] text-lg'}>Experts</NavLink>
                            <NavLink to={'journal'} className={'nav-link-item text-[#182B98] font-bold hover:text-[#F44749] text-lg'}>Raled</NavLink>
                            <NavLink to={'contact'} className={'nav-link-item text-[#182B98] font-bold hover:text-[#F44749] text-lg'}>Contact</NavLink>
                        </div>
                        <div className='nav-btn flex items-center gap-4'>
                            <button className='bg-[#182B98] text-white px-6 py-2 rounded-md hover:bg-[#576ce3] duration-300'>Apply</button>
                            {/* <div class="dropdown relative inline-block">
                                <button class="dropbtn border-2 border-[#182B98] px-6 py-2 rounded-md">English</button>
                                <div class="dropdown-content hidden absolute right-0 bg-[#f9f9f9] min-w-[160px] z-10 shadow-xl">
                                    <p className='hover:bg-gray-200 cursor-pointer text-center'>English</p>
                                    <p>Russian</p>
                                    <p>Узбекча</p>
                                    <p>O'zbekcha</p>
                                </div>
                            </div> */}
                            <select className='border-2 border-[#182B98] px-4 py-1.5 rounded-md text-["#182B98] cursor-pointer'>
                                <option value={'eng'} className='cursor-pointer text-center text-["#182B98]'>English</option>
                                <option value={'rus'} className='cursor-pointer text-center'>Russian</option>
                                <option value={'Узб'} className='cursor-pointer text-center'>Узбекча</option>
                                <option value={'uzb'} className='cursor-pointer text-center'>O'zbekcha</option>
                            </select>
                        </div>
                    </div>
                </div>
            </nav>
            <Outlet />
            <footer>
                <div className='container'>
                    <h1 className='text-center text-4xl font-bold border-b-2 border-[#F44749] py-5'>Our Partners</h1>
                    <div className='flex py-10 justify-between'>
                        <div className='partner-cart bg-[#F1F1F1] border p-12 '>
                            <img src={Mahorat} alt="mahorat-tech" />
                        </div>
                        <div className='partner-cart bg-[#F1F1F1] border p-12'>
                            <img src={Uztea} alt="mahorat-tech" />
                        </div>
                        <div className='partner-cart bg-[#F1F1F1] border p-12'>
                            <img src={Raled} alt="mahorat-tech" />
                        </div>
                        <div className='partner-cart bg-[#F1F1F1] border p-12'>
                            <img src={Goodly} alt="mahorat-tech" />
                        </div>
                    </div>
                </div>
                <div className='footer relative z-10'>
                  <div className='overlay absolute z-20'></div>
                </div>
            </footer>
        </div>
    )
}

export default RootLayout