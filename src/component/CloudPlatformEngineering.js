import React from 'react'
import cpedata from '../JSONAPI/JSONCloudPlatformEngineering.json'

const CloudPlatformEngineering = () => {
  return (
    <>
      {
        cpedata.cloudplatformengineeringdata.map((Itemcpe) => {
          return (
            <>
              <div className='banner' style={{ backgroundImage: `url("${Itemcpe.banner_bg}")`, backgroundSize: 'cover' }}>
                <div className='slider-inner-wrap' style={{ padding: '205px 0 205px 6%' }}>
                  <h1 className='text-white'>{Itemcpe.banner_title}</h1>
                  <p className='text-white'>{Itemcpe.banner_dis}</p>
                </div>
              </div>

              <div className='pt-5'>
                <h3 className='text-center pt-3 text-bold-7 pb-5'>{Itemcpe.sub_heading}</h3>
                {
                  Itemcpe.subservice_list.map((Itemsubservice) => {
                    return (
                      <>
                        <div className='service-box' style={{ width: '90%', margin: '0 auto' }}>
                          <div className='ser_wrap' style={{ display: 'flex', alignItems: 'center' }}>
                            <div className='service_detail_box'>
                              <h3 className='text-bold-7'>{Itemsubservice.name}</h3>
                              <p>{Itemsubservice.discription}</p>
                              <ul>
                                {
                                  Itemsubservice.topic_list.map((topic) => {
                                    return (<li>{topic.Topic}</li>)
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

              <img src={Itemcpe.feature_bg} alt='man' style={{width:'100%'}}/>
              {
                Itemcpe.feature_list.map((Itemfeature)=>{
                  return(
                    <>
                      <p>{Itemfeature.feature_name}</p>
                      <h4>{Itemfeature.feature_dis}</h4>
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

export default CloudPlatformEngineering
