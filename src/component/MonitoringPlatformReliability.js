import React from 'react'
import mpdata from '../JSONAPI/monitoringplatform.json'

const MonitoringPlatformReliability = () => {
  return (
    <>
      {
        mpdata.monitoringplatformdata.map((mprdata) => {
          return (
            <>
              <div className='banner' style={{ backgroundImage: `url("${mprdata.banner_bg}")`, backgroundSize: 'cover' }}>
                <div className='slider-inner-wrap' style={{ padding: '205px 0 205px 6%' }}>
                  <h1 className='text-white'>{mprdata.banner_title}</h1>
                  <p className='text-white'>{mprdata.banner_dis}</p>
                </div>
              </div>

              <div className='pt-5'>
                <h3 className='text-center pt-3 text-bold-7 pb-5'>{mprdata.sub_heading}</h3>
                {
                  mprdata.subservice.map((mprlist) => {
                    return (
                      <>
                        <div className='service-box' style={{ width: '90%', margin: '0 auto' }}>
                          <div className='ser_wrap pb-4' style={{ display: 'flex', alignItems: 'center' }}>
                            <div className='service_detail_box'>
                            <h3 className='text-bold-7'>{mprlist.name}</h3>
                              <p>{mprlist.discription}</p> 
                              <ul>
                                {
                                  mprlist.benifit.map ((topic) => {
                                    return (<li>{topic.benifit_name}</li>)
                                  })
                                }
                              </ul>
                            </div>
                            <div className='service_img'>
                              <img src={mprlist.ser_img} alt={mprlist.name} />
                            </div>
                          </div>
                        </div>
                      </>
                    )
                  })
                }
              </div>

              <img src={mprdata.feature_bg} style={{ width:'100%'}}/>
              {
                mprdata.feature.map((fdata)=>{
                  return(
                    <>
                      <h4>{fdata.feature_name}</h4>
                      <p>{fdata.feature_dis}</p>
                    </>
                    )
                })
              }



            </>
          )
        })
      }
    </>




  )
}

export default MonitoringPlatformReliability
