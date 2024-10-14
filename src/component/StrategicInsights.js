import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';


let s_heading = 'STRATEGIC INSIGHTS';
let s_subheading = 'Some stories are not supposed to be missed';

export const StrategicInsightsData = [{

    card: [
        {
            card_main: 'The key is always',
            card_sub_main: 'Cost Effectiveness',
            card_bg: './images/cost-effectiveness-bg.webp',
            card_dis: 'Our technical expertise and business acumen have helped many leading businesses achieve huge cost savings and reduced their organizations overall cloud spending.',
        },
        {
            card_main: 'Security Tradeoffs',
            card_sub_main: 'A difficult balance',
            card_bg: './images/security.webp',
            card_dis: 'Leverage our high-level technical guidance by tapping into a unique partnership to channelize your potential to focus on what you can do the best.​',
        },
        {
            card_main: 'Microservices & DevSecOps',
            card_sub_main: 'Better Together!',
            card_bg: './images/better-together-new.webp',
            card_dis: 'Inject agility across the value stream. With a product-centric approach to enable a highly intuitive product release, we bring in our expertise to achieve 10X faster time to market.',
        },
    ]
}]

export default function StrategicInsights() {
    return (
        <>
            <Container className='wraper pb-4'>
                <Row>
                    <h5 className='text-center pt-5'>{s_heading}</h5>
                    <h2 className='text-center pb-5'>{s_subheading}</h2>
                    {
                        StrategicInsightsData.map((data) =>
                            <>
                                {
                                    data.card.map((data_inner, i) =>
                                        <>
                                            <Col >

                                                <div className='card_inner_box' style={{ width: '100%', height: '500px', backgroundImage: `url("${data_inner.card_bg}")`, backgroundSize:'cover' }}>
                                                    <div className='insight-wrap-top'>
                                                        <h3 className='text-bold-6'>{data_inner.card_main} <span style={{ color: 'red' }}>{data_inner.card_sub_main}</span></h3>
                                                        <p >{data_inner.card_dis}</p>
                                                    </div>
                                                </div>
                                            </Col>
                                        </>
                                    )
                                }

                            </>
                        )
                    }
                </Row>
            </Container>
        </>
    )
}
