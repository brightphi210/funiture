import Image from 'next/image'
import React, { useState } from 'react'
import image1 from '../Images/hero-img-1.png'
import image2 from '../Images/hero-img-2.png'
import './HomeSectionOne.css'
import { FaLongArrowAltRight } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { FaRegDotCircle } from "react-icons/fa";


const HomeSectionOne = () => {

  const [showSection1, setShowSection1] = useState(true)
  const [showSection2, setShowSection2] = useState(false)

  const handleShowSection1 = () => {
    setShowSection1(true);
    setShowSection2(false);
  };


  const handleShowSection2 = () => {
    setShowSection1(false);
    setShowSection2(true);
  };
  return (
    <div>
      <div className='firstSectionMain'>

        <div className='dotDiv'>
          {showSection1 === true ? (
            <p onClick={handleShowSection1} style={{color : 'orange', fontSize : 20}}><FaRegDotCircle /></p>
          ) : (
            <p onClick={handleShowSection1}><GoDotFill /></p>
          )}
          

          {showSection2 === true ? (
            <p onClick={handleShowSection2} style={{color : 'orange', fontSize : 20}}><FaRegDotCircle /></p>
          ) : (
            <p onClick={handleShowSection2}><GoDotFill /></p>
          )}
          
        </div>


        {showSection1 ? (

        <div className='firstSectionDiv'>
          <div className='leftAndRightDiv'>

            <div className='leftSectionOne'>
                <h2 >Unique & Stylish</h2>
                <h2 className='furnDesign'>Furniture</h2>
                <p>
                  Lorem ipsum dolor sit 
                  amet consectetur adipisicing elit.
                  Lorem ipsum dolor sit 
                  amet consectetur adipisicing elit. 
                </p>

                <button>Shop Now <FaLongArrowAltRight /></button>
            </div>

            <div className='rightSectionOne'>
              <Image src={image1}  alt='' className='images'/>
            </div>
          </div>
        </div>
        ) : (

        <div className='firstSectionDiv'>
          <div className='leftAndRightDiv'>

            <div className='leftSectionOne'>
                <h2 >Unique & Stylish</h2>
                <h2 className='furnDesign'>Furniture</h2>
                <p>
                  Lorem ipsum dolor sit 
                  amet consectetur adipisicing elit.
                  Lorem ipsum dolor sit 
                  amet consectetur adipisicing elit. 
                </p>

                <button>Shop Now <FaLongArrowAltRight /></button>
            </div>

            <div className='rightSectionOne'>
              <Image src={image2}  alt='' className='images'/>
            </div>
          </div>
        </div>
        )}

        
      </div>
    </div>
  )
}

export default HomeSectionOne