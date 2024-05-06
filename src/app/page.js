
'use client'

import HomeSectionOne from '@/Components/HomeComp/HomeSectionOne'
import HomeSectionThree from '@/Components/HomeComp/HomeSectionThree'
import HomeSectionTwo from '@/Components/HomeComp/HomeSectionTwo'
import Navbar from '@/Components/Navbar'
import React from 'react'
import { FaHandPointer } from "react-icons/fa";


const page = () => {


  return (
    <section id='move'>
      
      <HomeSectionOne />
      <HomeSectionTwo />
      <HomeSectionThree />

      <a href='#move'>
        <p className='pointer'><FaHandPointer /></p>
      </a>

    </section>
  )
}

export default page