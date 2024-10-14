import React from 'react'
import sasdata from '../JSONAPI/Securityasservice.json'

const SecurityasService = () => {
  return (
    <>      {
        sasdata.securityasservicedata.map((sasItem) => {
          return (
            <>
              <div className='banner' style={{ backgroundImage: `url("${sasItem.banner_bg}")`, backgroundSize: 'cover' }}>
                <div className='slider-inner-wrap' style={{ padding: '205px 0 205px 6%' }}>
                  <h1 className='text-white'>{sasItem.banner_title}</h1>
                  <p className='text-white'>{sasItem.banner_dis}</p>
                </div>
              </div>

              <div className='pt-5'>
                <h3 className='text-center pt-3 text-bold-7 pb-5'>{sasItem.sub_heading}</h3>

                {
                  sasItem.subservice.map((saslist) => {
                    return (
                      <>
                        <div className='service-box' style={{ width: '90%', margin: '0 auto' }}>
                          <div className='ser_wrap pb-4' style={{ display: 'flex', alignItems: 'center' }}>
                            <div className='service_detail_box'>
                            <h3 className='text-bold-7'>{saslist.name}</h3>
                              <p>{saslist.discription}</p> 
                              <ul>
                                {
                                  saslist.benifit.map ((topic) => {
                                    return (<li>{topic.benifit_name}</li>)
                                  })
                                }
                              </ul>
                            </div>
                            <div className='service_img'>
                              <img src={saslist.ser_img} alt={saslist.name} />
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

export default SecurityasService
