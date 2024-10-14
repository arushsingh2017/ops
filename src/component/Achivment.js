import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import AchivementItem from './AchivementItem'

export default function Achivment() {

    
    return (
        <>
           
            <Container style={{padding:'100px 0 90px 0'}}>
                <Row className='coumter-card-wrap'>
                    <Col className='counter-card'>
                        <AchivementItem name="The Year of Foundation" val="2014" />
                    </Col>
                    <Col className='counter-card'>
                        <AchivementItem name="Open Source Utilities" val="100+" />
                    </Col>
                    <Col className='counter-card'>
                        <AchivementItem name="Professionals and Growing" val="280+" />
                    </Col>
                    <Col className='counter-card'>
                        <AchivementItem name="Repeat Business" val="90%" />
                    </Col>
                </Row>
            </Container>

          
      
      
        </>
    )
}
