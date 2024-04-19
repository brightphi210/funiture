
'use client'

import React from 'react'
import './Navbar.css'
import { useState } from 'react';

import { IoMailUnreadOutline } from "react-icons/io5";
import { MdOutlineLocationOn } from "react-icons/md";
import { TbCaretDownFilled } from "react-icons/tb";
import { FiSearch } from "react-icons/fi";
import { IoMdMoon } from "react-icons/io";
import { IoPersonOutline } from "react-icons/io5";
import { RiShoppingBasketLine } from "react-icons/ri";
import { IoCallOutline } from "react-icons/io5";
import { CgMenuGridO } from "react-icons/cg";
import { IoIosArrowDown } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


import Image from 'next/image';
import logo from './Images/logo.png'
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Navbar = () => {

    AOS.init();

    const [showSideBar, setShowSideBar] = useState(false)

    const handleShowSideBar = () => {
        setShowSideBar(true)
    }


    const handleHideSideBar = () => {
        setShowSideBar(false)
    }

  return (
    <div>
        <div className='myNavBar'>

            <div className='topNav'>
                <p>Welcome to our Organic store</p>

                <ul>
                    <li><IoMailUnreadOutline />groshop@gmail.com</li>
                    <li><MdOutlineLocationOn />Washington, New York City</li>
                    <li>English <TbCaretDownFilled /></li>
                    <li>$USDC <TbCaretDownFilled /></li>
                    <li>Dark <IoMdMoon /></li>
                </ul>
            </div>


            <div className='bottomNav'>
                <Image src={logo} alt='' width={200}/>

                <div className='bottomNavRight'>
                    <ul>
                        <li>Browse Category <IoIosArrowDown /></li>
                        <li>Home <IoIosArrowDown /></li>
                        <li>Product <IoIosArrowDown /></li>
                        <li>Blog <IoIosArrowDown /></li>
                        <li>Pages <IoIosArrowDown /></li>
                    </ul>

                    <div className='bottomNavIcons'>
                        <p><FiSearch /></p>
                        <p><IoPersonOutline /></p>
                        <p><RiShoppingBasketLine /></p>
                        <p><IoCallOutline /></p>
                    </div>

                    <div className='bottomNavContact'>
                        <div>
                            <p>Phone Number</p>
                            <h3>+234 08094455876</h3>
                        </div>

                        <p className='menu' onClick={handleShowSideBar}><CgMenuGridO /></p>
                    </div>
                </div>
            </div>
        </div>


        {showSideBar === false ? ('') : (

            <div className='sideBar'>
                <div className='closeDiv'>
                    <Image src={logo} alt='' />
                    <p onClick={handleHideSideBar}><IoMdClose /></p>
                </div>

                <div className='aboutDiv'  >
                    <h2>About Us</h2>
                    <p className='myP' data-aos="fade-up" data-aos-duration="3000">
                        Explain to you how all this 
                        mistaken denouncing pleasure 
                        and praising pain was born and 
                        we will give you a complete 
                        account of the system, and 
                        expound the actual teachings.
                    </p>
                    <p className='myP' data-aos="fade-up" data-aos-duration="2000">
                        Mistaken denouncing pleasure and 
                        praising pain was born and we will 
                        give you complete account of the 
                        system expound.
                    </p>

                    <div data-aos="fade-up" data-aos-duration="2000">
                        <button>About Us</button>
                        <h3>Contact Info</h3>
                    </div>

                    <div className='contactDiv' data-aos="fade-up" data-aos-duration="3000">
                        <p>Chicago 12, Melborne City, USA</p>
                        <p className='contactP'>+8801682648101</p>
                        <p className='contactP'>info@example.com</p>
                    </div>

                    <div className='iconDiv' data-aos="fade-up" data-aos-duration="3000">
                        <p><FaFacebook /></p>
                        <p><FaInstagram /></p>
                        <p><FaLinkedin /></p>
                    </div>
                </div>
            </div>
        ) }


    </div>

  )
}

export default Navbar