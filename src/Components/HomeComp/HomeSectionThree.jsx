import React from 'react'
import './HomeSectionThree.css'
import Image from 'next/image'
import { dataFive } from '../module'
import bannerImage from '../Images/furn/product-banner-img-6.png'

const HomeSectionThree = () => {
  return (
    <div className='bannerThreeSection'>
        <h2>Featured Brand Products</h2>
        <h4>
            Collaboratively pursue proactive vortals 
            whereas granular best practices Collaboratively 
            promote functional <br /> markets through 
            process-centric users.
        </h4>


        <div className='bannerThreeDiv'>

            <div className='leftBanner'>

                {dataFive.slice(0, 3).map((data, index)=>(
                    <div className='eachLeftBanner' key={index}>
                        <div>
                            <Image src={data.image} alt='' className='myBannImage'/>
                        </div>

                        <div>
                            <p>****</p>
                            <h3>{data.category}</h3>
                            <p><span>{data.price}</span>{data.discountPrice}</p>
                            <button>Shop Now -</button>
                        </div>
                    </div>
                ))}
            </div>


            <div className='middleBanner'>
                <Image src={bannerImage} alt='' className='middleBannerImage'/>
            </div>


            <div className='rightBanner'>
            {dataFive.slice(3, 6).map((data, index)=>(
                    <div className='eachLeftBanner' key={index}>
                        <div>
                            <Image src={data.image} alt='' className='myBannImage'/>
                        </div>

                        <div>
                            <p>****</p>
                            <h3>{data.category}</h3>
                            <p><span>{data.price}</span>{data.discountPrice}</p>
                            <button>Shop Now -</button>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    </div>
  )
}

export default HomeSectionThree