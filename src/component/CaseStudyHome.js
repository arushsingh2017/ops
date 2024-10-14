import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const casestudy = [
    {
        casestudy_heading: 'We are helping to automate some of the World’s most complex & difficult problems'
    }
]


export default function CaseStudyHome() {

    return (
        <>
            {/* Case study section start */}
            <section className='case-study-wrap'>
                <div className='container' style={{position:'relative'}}>
                    <div className='case-study-wrap-inner about-inner'>
                        {
                            casestudy.map((casestudy) =>
                                <h1 className='text-bold' style={{color:'#fff'}}>{casestudy.casestudy_heading}
                                </h1>
                            )
                        }
                        <Button className='rounded-5 mt-5 '><Link to='/case-study' className='text-white text-decoration-none'  >Explore Case Studies</Link></Button>
                    </div>
                </div>
            </section>
            {/* end */}
        </>
    )
}
