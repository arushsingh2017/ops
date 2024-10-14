import React from 'react'
import cdadata from '../JSONAPI/JSONContinuoueDeliveryAutomation.json'
import { Container } from 'react-bootstrap'

const ContinuousDeliveryAutomation = () => {
  return (
    <>
      {
        cdadata.continuouedelivery.map((cdaItem) => {
          return (
            <>
              <div className='banner' style={{ backgroundImage: `url("${cdaItem.banner_bg}")`, backgroundSize: 'cover' }}>
                <div className='slider-inner-wrap' style={{ padding: '205px 0 205px 6%' }}>
                  <h1 className='text-white'>{cdaItem.banner_title}</h1>
                  <p className='text-white'>{cdaItem.banner_dis}</p>
                </div>
              </div>


              <div className='pt-5'>
                <h3 className='text-center pt-3 text-bold-7 pb-5'>{cdaItem.sub_heading}</h3>                
                {
                  cdaItem.subservice.map((Itemsubservice) => {
                    return (
                      <>
                      <div className='service-box' style={{ width: '90%', margin: '0 auto' }}>
                      <div className='ser_wrap' style={{ display: 'flex', alignItems: 'center' }}>
                          <div className='service_detail_box'>
                            <h3 className='text-bold-7'>{Itemsubservice.name}</h3>
                            <p>{Itemsubservice.discription}</p>
                            <ul>
                              {
                                Itemsubservice.topic_list.map((topic)=>{
                                  return(<li>{topic.Topic}</li>)
                                })
                              }
                            </ul>                            
                          </div>
                          <div className='service_img'>
                            <img src={Itemsubservice.ser_img} alt={Itemsubservice.name} />
                          </div>
                        </div>
                      </div>
                      </>
                    )
                  })
                }
              </div>

            </>
          )
        })
      }

    </>
  )
}

export default ContinuousDeliveryAutomation
