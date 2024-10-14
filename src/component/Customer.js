import React, { useState } from 'react'
import { customer, STUDENTS } from './API/CustomerApi'
import { Button, Container, Row } from 'react-bootstrap'

const customer_heading = 'Valued Customers';
const customer_dis = 'Great brands trust us for their Cloud & DevSecOps journey & Their trust is our success.'

export default function Customer() {

    

    return (
        <Container className='pt-5 center pb-5'>

            <h2 className='text-center' >{customer_heading}</h2>
            <h5 className='text-bold-6 text-center pb-5'>{customer_dis}</h5>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {
                    customer.slice(0, 10).map((item, index) =>
                        <div className='logo-wrap'>
                            <img src={item.c_img} alt={item.c_altname} />
                        </div>
                    )
                }
            </div>
            <div style={{ margin: '0 auto', width: '164px', display: 'block', paddingTop:'40px' }}><Button>Veiw All Customer</Button></div>


        </Container>
    )
}
