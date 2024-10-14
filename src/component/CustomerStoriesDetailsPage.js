import React from 'react'
import custd from '../JSONAPI/JsonCustomerStories.json'
import { useParams } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';

export default function CustomerStoriesDetailsPage() {
  const pagedata = custd.customerstories;
  const params = useParams();
  const ss = pagedata.cust_list[params.id - 1];
  return (
    <>
      <div className='banner' style={{ backgroundImage: `url("${pagedata.banner_bg}")`, backgroundSize: 'cover' }}>
        <div className='slider-inner-wrap' style={{ padding: '100px 0 130px 6%' }}>
          <div className='clien_logo'>
            <img src={ss.company_logo} alt={ss.comName} />
          </div>
          <p className='text-white'>{ss.company_intro}</p>
        </div>
      </div>

      <Container className='pt-5'>
          <h5 className='text-center text-bold-6 pt-3' style={{lineHeight:'28px'}}>{ss.what_say}</h5>

          <iframe className='mt-5 v-fram' src={ss.vedio_link} />
      </Container>

    </>
  )
}
