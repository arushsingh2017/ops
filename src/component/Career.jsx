import React from 'react'
import { careerpages } from '../component/API/APICareer'
import { Container } from 'react-bootstrap'

const Career = () => {
  return (
    <>
      {
        careerpages.map((career_item) => {
          return (
            <>
              <div className='banner' style={{ backgroundImage: `url("${career_item.banner_bg}")`, backgroundSize: 'cover' }}>
                <div className='slider-inner-wrap' style={{padding:'215px 0 215px 3%'}}>
                  <h1 className='text-white'>{career_item.banner_title}</h1>
                  <h6 className='text-white'>{career_item.banner_dis}</h6>
                </div>
              </div>

              <Container className='pt-5 pb-4'>
                <h3 className='pt-5 text-center text-bold-8'>{career_item.heading}</h3>
                <h5 className='text-bold-6 pt-3 text-center'>{career_item.sub_heading}</h5>

                <div className='career-card-wrap pt-5'>
                  {
                    career_item.job_list.map((jobItem) => {
                      return (
                        <>
                          <div className='job-card'>
                            <img src={jobItem.job_icon} alt={jobItem.job_name} />
                            <h4>{jobItem.job_name}</h4>
                            <p>{jobItem.job_exp}+ Years</p>
                            <p>{jobItem.job_location}</p>

                          </div>
                        </>
                      )
                    })
                  }
                </div>

              </Container>

              {
                career_item.more_job.map((moreItem) => {
                  return (
                    <>
                      <div className='more-bg mt-5' style={{ backgroundImage: `url("${moreItem.job_bg}")`, position: 'relative', backgroundPosition: '33% 54%' }}>
                        <div className='morebg-inner'>
                          <h2>{moreItem.heading}</h2>
                          <h6>{moreItem.dis}</h6>
                          <div className='link-btn'>Send us your Resume</div>
                        </div>
                      </div>




                    </>
                  )
                })
              }

              <Container className='pt-5' style={{maxWidth:'95%'}}>

                {
                  career_item.why_opstree.map((ot_benifit) => {
                    return (
                      <>
                        <div className='why_opstee-wrap pt-4'>
                          <div className='why_opstee-wrap_left'>
                            <h4 className='pb-3 text-bold-7'>{ot_benifit.benifit_name}</h4>
                            <h6>{ot_benifit.benifit_dis}</h6>
                          </div>
                          <div className='why_opstee-wrap_right'><img src={ot_benifit.benifit_img} alt={ot_benifit.benifit_name} className='img-fluid'/> </div>
                          
                        </div>
                      </>
                    )
                  })
                }

              </Container>

            </>
          )


        })
      }
    </>
  )
}

export default Career
