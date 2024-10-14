import React from 'react'

export default function Card({ ser_name, ser_dis, ser_icon }) {
    return (
        <>
            <div className='card-wrap' style={{ padding: '10px' }}>
                <div className='card-wrap-inner'>
                    <img src={ser_icon} />
                    <h3>{ser_name} </h3>
                    <div className='hover-box'>
                        <div className='over-box-inner'>
                            <p>{ser_dis}</p>
                            <a href='#' target='_blank' className='btn btn-primary'>Know More</a>
                        </div>

                    </div>


                </div>
            </div>
        </>
    )
}
