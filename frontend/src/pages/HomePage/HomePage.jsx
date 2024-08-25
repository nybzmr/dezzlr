import React from 'react'
import MainCarousel from '../../Customer/components/HomeCarousel/MainCarousel'
import HomeSectionCarousel from '../../Customer/components/HomeSectionCarousel/HomeSectionCarousel'
import { mens_kurta } from '../../Data/mens_kurta'

const HomePage = () => {
  return (
    <>
        <MainCarousel/>
        <div className='space-y-10 py-20 '>
            
            <HomeSectionCarousel data={mens_kurta} SectionName={"Mens Kurta"}/>
            <HomeSectionCarousel data={mens_kurta} SectionName={"Mens Shoes"}/>
            <HomeSectionCarousel data={mens_kurta} SectionName={"Mens Shirt"}/>
            <HomeSectionCarousel data={mens_kurta} SectionName={"Womens Saree"}/>
            <HomeSectionCarousel data={mens_kurta} SectionName={"Womens Shoes"}/>
            
        </div>
    </>
  )
}

export default HomePage