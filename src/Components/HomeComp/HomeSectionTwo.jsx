import React, { useState } from 'react'
import './HomeSectionTwo.css'

const HomeSectionTwo = () => {

    const [showDetailsOne, setShowDetailsOne] = useState(true)
    const [showDetailsTwo, setShowDetailsTwo] = useState(false)
    const [showDetailsThree, setShowDetailsThree] = useState(false)
    const [showDetailsFour, setShowDetailsFour] = useState(false)

    const handClickOne = () => {
        setShowDetailsOne(true)
        setShowDetailsTwo(false)
        setShowDetailsThree(false)
        setShowDetailsFour(false)
    }

    const handClickTwo = () => {
        setShowDetailsOne(false)
        setShowDetailsTwo(true)
        setShowDetailsThree(false)
        setShowDetailsFour(false)
    }


    const handClickThree = () => {
        setShowDetailsOne(false)
        setShowDetailsTwo(false)
        setShowDetailsThree(true)
        setShowDetailsFour(false)
    }


    const handClickFour = () => {
        setShowDetailsOne(false)
        setShowDetailsTwo(false)
        setShowDetailsThree(false)
        setShowDetailsFour(true)
    }


  return (
    <div className='homeSectionTwo'>

        <div className='featuredDiv'>
            <h2>Featured Collections</h2>
            <p>
                Globally drive principle-centered 
                strategic theme areas vis-a-vis 
                goal-oriented <br /> best practices state 
                of the Dynamically.
            </p>
        </div>


        {/* ======= Sectiom Two First Div ==== */}
        <div>
            <ul className='listClass'>
                
                <li onClick={handClickOne} className={showDetailsOne === true ? 'activeList' : ''}>Gaming Chair <sup>12</sup></li>
                <li onClick={handClickTwo} className={showDetailsTwo === true ? 'activeList' : ''}>Dining Set <sup>10</sup></li>
                <li onClick={handClickThree} className={showDetailsThree === true ? 'activeList' : ''}>Office Table <sup>20</sup></li>
                <li onClick={handClickFour} className={showDetailsFour === true ? 'activeList' : ''}>Office Desk <sup>09</sup></li>
            </ul>
        </div>


        {/* ====== Section Two second div == */}
        <div>

        </div>
    </div>
  )
}

export default HomeSectionTwo