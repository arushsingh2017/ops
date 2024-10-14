import React from 'react'
import workshopdata from '../JSONAPI/JSONworkshop.json'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Workshop = () => {
  return (
    <>
      <div className='banner' style={{ backgroundImage: `url("${workshopdata.workshop.banner_bg}")`, backgroundSize: 'cover' }}>
        <div className='slider-inner-wrap' style={{ padding: '205px 0 205px 6%' }}>
          <h1 style={{ color: '#fff' }}>{workshopdata.workshop.banner_title}</h1>
          <h6 style={{ color: '#fff' }}>{workshopdata.workshop.banner_dis}</h6>
        </div>
      </div>

      <Container className='pt-5'>
        <Row className='pt-3'>
          {
            workshopdata.workshop.workshop_list.map((Itemworkshop) => {
              return (
                <>
                  <Col>
                    <div className='workshop-card'>
                      <img src={Itemworkshop.workshop_img} alt={Itemworkshop.workshop_name} />
                      <div className='workshop-card-info'>
                        <h4 className='text-bold-7'>{Itemworkshop.workshop_name}</h4>
                        <h6 className='pb-5'>{Itemworkshop.workshop_date} {Itemworkshop.workshop_time}  <span>{Itemworkshop.workshop_location}</span></h6>
                        <Link className='workshop-btn'  to={`/workshop/${Itemworkshop.workshop_id}`}>Know More</Link>
                      </div>

                    </div>
                  </Col>
                </>
              )
            })
          }

        </Row>
      </Container>





    </>
  )
}

export default Workshop
