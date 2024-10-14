import React from 'react'
import{lifeatopstreedata} from './API/APILifeatopstree'
import { Container } from 'react-bootstrap'

const LifeAtOpstree = () => {
  return (
    <>
       
        {
          lifeatopstreedata.map((Itemlifeopstree)=>{
            return(
              <>
              <div className='banner' style={{ backgroundImage: `url("${Itemlifeopstree.banner_bg}")`, height: '530px', backgroundSize: 'cover' }}>
                <div className='slider-inner-wrap'>
                  <h1 className='text-white'>{Itemlifeopstree.banner_title}</h1>
                  <h6 className='text-white'>{Itemlifeopstree.banner_dis}</h6>
                </div>
              </div>
              
              
              <Container className='pt-5'>
                  <h3 className='text-center text-bold-7'>{Itemlifeopstree.heading}</h3>
                    <div className='lifefeature-wrap'>
                      {
                        Itemlifeopstree.feature.map((Itemfeature)=>{
                          return(
                            <>
                              <div className='featureItemBox'>
                                  <div className='feature-icon'><img src={Itemfeature.feature_icon} alt={Itemfeature.feature_name}/></div>
                                  <h4 className='text-bold-7'>{Itemfeature.feature_name}</h4>
                                  <div className='feature-dis'>{Itemfeature.feature_dis}</div>
                              </div>
                             
                            </>
                          )
                        })
                      }
                    </div>

              </Container>
              </>
            )
          })
        }
    </>
  )
}

export default LifeAtOpstree
