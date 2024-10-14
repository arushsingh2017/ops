import React from 'react'
import { clouldpagessubservice } from '../ServicePagesAPI/ClouldDevOpsConstulting'
import { Container } from 'react-bootstrap'

export default function CloudDevSecOpsAdvisory() {
    return (
        <>
            {
                clouldpagessubservice.map((service, index) => {
                    return (
                        <>
                            <div className='banner' style={{ backgroundImage: `url("${service.banner_imgurl}")`, height: '530px', backgroundSize: 'cover' }}>
                                <div className='slider-inner-wrap'>
                                    <h1>{service.banner_title}</h1>
                                    <h6>{service.banner_discription}</h6>
                                </div>
                            </div>

                            <h3 className='pt-5 text-center text-bold-8'>{service.banner_subheading}</h3>

                            {
                                service.subService.map((sub_ser) => {
                                    return (
                                        <>
                                            <div className='service-box' style={{ width: '90%', margin: '0 auto' }}>
                                                <div className='ser_wrap' style={{ display: 'flex', alignItems: 'center' }} >
                                                    <div className='service_detail_box'>
                                                        <h3 className='text-bold-7'>{sub_ser.name}</h3>
                                                        <p>{sub_ser.short_dis}</p>
                                                        {
                                                            sub_ser.topice &&
                                                            <ul>
                                                                {
                                                                    sub_ser.topice.map((topicdata) => {
                                                                        return (
                                                                            <>
                                                                                <li>{topicdata.topice_list}</li>
                                                                            </>
                                                                        )
                                                                    })
                                                                }
                                                            </ul>

                                                        }


                                                    </div>
                                                    <div className='service_img'> <img src={sub_ser.pic} alt="" /> </div>

                                                </div>
                                            </div>

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
