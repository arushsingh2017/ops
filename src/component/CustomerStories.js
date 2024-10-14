import React from 'react'
// import { customerdata } from './API/APICustomerStories'
import cdata from '../JSONAPI/JsonCustomerStories.json'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const CustomerStories = () => {


  return (
    <>

      <div className='banner' style={{ backgroundImage: `url("${cdata.customerstories.banner_bg}")`, backgroundSize: 'cover' }}>
        <div className='slider-inner-wrap' style={{padding:'205px 0 205px 6%'}}>
          <h1 style={{ color: '#fff' }}>{cdata.customerstories.banner_title}</h1>
          <h6 style={{ color: '#fff' }}>{cdata.customerstories.banner_dis}</h6>
        </div>
      </div>

      <Container className='pt-5'>
        <div className='stories-card'>
          {
            cdata.customerstories.cust_list.map((Item) => {
              return (
                <div className='stories-card-list'>
                  <div className='stories-card-list-img'>
                    <img src={Item.cust_list_img} alt={Item.comName} />
                  </div>
                  <div className='stories-info'>
                    <span> <img src={Item.q_img} alt={Item.comName} /> </span> {Item.short_dis}
                    <br/>
                    <Link className='link-btn' to={`/customerstories/${Item.id}`} style={{textDecoration:'none', display:'block',width:'114px', fontSize:'15px'}}>Know More</Link>
                    
                  </div>



                </div>
              )
            })
          }
        </div>

      </Container>





    </>
  )
}

export default CustomerStories
