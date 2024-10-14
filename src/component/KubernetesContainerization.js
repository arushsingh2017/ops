import React from 'react'
import kcdata from '../JSONAPI/KubernetesContainerization.json'

const KubernetesContainerization = () => {
  return (
    <>
        {
          kcdata.kubernetescontainerization.map((kcItem)=>{
            return(
              <>
              <div className='banner' style={{ backgroundImage: `url("${kcItem.banner_bg}")`, backgroundSize: 'cover' }}>
                <div className='slider-inner-wrap' style={{ padding: '205px 0 205px 6%' }}>
                  <h1 className='text-white'>{kcItem.banner_title}</h1>
                  <p className='text-white'>{kcItem.banner_dis}</p>
                </div>
              </div>

              <div className='pt-5'>
              <h3 className='text-center pt-3 text-bold-7 pb-5'>{kcItem.sub_heading}</h3>
                 {
                  kcItem.Kubernetes_categories.map((kccatItem)=>{
                    return(
                      <>
                      <div className='service-box' style={{ width: '90%', margin: '0 auto' }}>
                          <div className='ser_wrap pb-4' style={{ display: 'flex', alignItems: 'center' }}>
                            <div className='service_detail_box'>
                              <h3 className='text-bold-7'>{kccatItem.cname}</h3>
                              <p>{kccatItem.c_discription}</p>
                              <ul>
                                {
                                  kccatItem.topic_list.map((topic) => {
                                    return (<li>{topic.topice}</li>)
                                  })
                                }
                              </ul>
                            </div>
                            <div className='service_img'>
                              <img src={kccatItem.c_img} alt={kccatItem.cname} />
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

export default KubernetesContainerization
