import React from 'react'
import Banner from '../component/HomeSlider'
import StrategicInsights from '../component/StrategicInsights';
import HomeService from '../component/HomeService';
import Achivment from '../component/Achivment';
import Customer from '../component/Customer';
import AboutSection from '../component/AboutSection';
import TestiminialVedio from '../component/TestiminialVedio';
import CaseStudyHome from '../component/CaseStudyHome';
import CustTestoimonial from '../component/CustTestoimonial';

const HomePages = () => {
    return (
        <>  
            <Banner/>
            <StrategicInsights />
            <HomeService />
            <Achivment />
            <AboutSection />
            <Customer />
            <CaseStudyHome />
            <TestiminialVedio />
            <CustTestoimonial />

        </>
    )
}

export default HomePages
