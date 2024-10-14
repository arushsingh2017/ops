import React from 'react'
import cdata from '../JSONAPI/Casestudy.json'
import { useParams } from 'react-router-dom'
import { Container } from 'react-bootstrap';

export default function CasestudyLanding() {

    // const bgdata= './images/casestudy/case-studies-new-banner.jpg'
    const pagedata = cdata.casestudydata
    const params = useParams();
    const ss = pagedata[0].casestudy_list[params.id - 1];
    return (
        <>
            <div className='banner pb-5' style={{ backgroundImage: 'url(/images/casestudy/case-studies-new-banner.jpg)', backgroundSize: 'cover' }}>
                <div className='slider-inner-wrap' style={{ padding: '100px 0 130px 6%' }}>
                    <h1 className='text-white'>Case Study</h1>
                    <h6 className='text-white'>Few intriguing success stories from some great brands.</h6>
                    <p className='text-white'>{ss.company_intro}</p>
                </div>
            </div>

            <Container className='pt-5' style={{ maxWidth: '90%', margin: '0 auto' }}>
                <h3 className='text-bold-7 text-center'>{ss.title}</h3>
                <div className='content-box mt-5'>
                    <div className='about-clients-data'>
                        <h4>About Customer</h4>
                        <p className='pt-4'>{ss.about_company}</p>
                    </div>
                </div>

                <h3 className='pt-5 text-bold-7'>Problem statement</h3>

                <ul className='challenges-inner-topic pt-3'>
                    {
                        ss.customer_problem.map((problemItem) => {
                            return (
                                <>
                                    <li>
                                        <div className='ps_icon1'> <img src={problemItem.problem_icon} alt={problemItem.problem_dis} /> </div>
                                        {problemItem.problem_dis}</li>

                                </>)
                        })
                    }
                </ul>

                <h3 className='pt-5 text-bold-7'>  Solution Offered!</h3>
                <ul className='solution-inner pt-3'>
                {
                    ss.customer_solution.map((solutionItem)=>{
                        return(
                            <>  
                            <li>{solutionItem.solution_item}</li>                              
                            </>
                            )
                    })
                }
                </ul>

                <h3 className='pt-5 text-bold-7'>  Final Outcomes</h3>
                <ul className='challenges-inner-topic pt-3'>
                    {
                        ss.outcome.map((outcomeItem) => {
                            return (
                                <>
                                    <li>
                                        <div className='ps_icon1'> <img src={outcomeItem.outcome_icon}  /> </div>
                                        {outcomeItem.outcome_discription}</li>

                                </>)
                        })
                    }
                </ul>




            </Container>




        </>
    )
}
