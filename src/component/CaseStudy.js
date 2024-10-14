import React from 'react'
import opstreecasestudy from '../JSONAPI/Casestudy.json'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const CaseStudy = () => {
  
  return (
    <>

      {
        opstreecasestudy.casestudydata.map((csItem) => {
          return (
            <>
              <div className='banner' style={{ backgroundImage: `url("${csItem.banner_bg}")`, backgroundSize: 'cover' }}>
                <div className='slider-inner-wrap' style={{ padding: '205px 0 205px 6%' }}>
                  <h1 className='text-white'>{csItem.banner_title}</h1>
                  <p className='text-white'>{csItem.banner_dis}</p>
                </div>
              </div>

              <div className='pt-5'>
                <h3 className='text-center pt-3 text-bold-7 pb-5'>{csItem.sub_heading}</h3>

                <Container style={{maxWidth:'95%'}}>
                  <div className='case-study'>
                    {
                      csItem.casestudy_list.map((csList) => {
                        
                        return (
                          <>
                            <div className='case-study-inner'>
                              <img src={csList.study_thum} alt={csList.title} />
                              <div className='case-info'>
                               <div className='study-heading'>{csList.title}</div> 
                                
                                {/* <Link to={csList.title.replace(/\s+/g, '-').toLowerCase()}>{csList.title}</Link> */}

                              <p>{csList.shor_dis}</p>

                              <Link to={`/case-study/${csList.id}`}>Know More</Link>

                              </div>
                              
                            </div>

                          </>)
                      })
                    }
                  </div>

                </Container>



              </div>

            </>
          )
        })
      }

    </>
  )
}

export default CaseStudy
