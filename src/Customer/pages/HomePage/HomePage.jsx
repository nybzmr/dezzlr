import React from 'react'
import MainCarousel from '../../components/HomeCarousel/MainCarousel'
import HomeSectionCarousel from '../../components/HomeSectionCarousel/HomeSectionCarousel'
import { mens_kurta } from '../../../Data/mens_kurta'

const HomePage = () => {
  return (
    <>
        <MainCarousel/>
        <div className='space-y-10 py-20 '>
            <HomeSectionCarousel data={mens_kurta}/>
            <HomeSectionCarousel data={mens_kurta}/>
            <HomeSectionCarousel data={mens_kurta}/>
            <HomeSectionCarousel data={mens_kurta}/>
            <HomeSectionCarousel data={mens_kurta}/>
            <HomeSectionCarousel data={mens_kurta}/>
        </div>
    </>
  )
}

export default HomePage