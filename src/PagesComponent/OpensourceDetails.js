import React from 'react'
import osdata from '../JSONAPI/JSONopensource.json'
import { useParams } from 'react-router-dom'
import { Container } from 'react-bootstrap';

export default function OpensourceDetails() {
    const newosdata = osdata.opensource
    const params = useParams();
    const cdata = newosdata.opensource_list[params.id - 1]

    return (
        <>

            <div className='banner' style={{ backgroundImage: `url("${cdata.banner_img}")`, backgroundSize: 'cover' }}>
                <div className='slider-inner-wrap' style={{ padding: '205px 0 205px 6%' }}>
                    <h1 style={{ color: '#fff' }}>{cdata.banner_title}</h1>
                    <h6 style={{ color: '#fff' }}>{cdata.banner_dis}</h6>
                </div>
            </div>


            <Container className='pt-5' style={{ maxWidth: '95%', margin: '0 auto' }}>
                <div className='open-cat-wrap pt-4'>
                    {
                        cdata.cat_list.map((ii) => {
                            return (
                                <>
                                    <div className='open-cat-box'>
                                      
                                        {/* <p>{ii.icon}</p> */}
                                        <h5 className='text-bold-7'>{ii.name}</h5>
                                        <h6 className='text-bold-6'>{ii.dis}</h6>
                                        <a href={ii.c_link} target='_blank'>Know More</a>
                                        <p></p>
                                    </div>

                                </>
                            )
                        })
                    }
                </div>

            </Container>




          




            {/* <h1>This is details pages of opensource {cdata.open_name}</h1> */}
        </>
    )
}
