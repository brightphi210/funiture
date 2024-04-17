import React from 'react'
import './Navbar.css'

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


import Image from 'next/image';
import logo from './Images/logo.png'

const Navbar = () => {
  return (
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

                    <p className='menu'><CgMenuGridO /></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar