import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ResourceList from './com/ResourceList';

export default function Footer({datalist}) {
    // console.log(datalist);
    return (
        <div className='footer-wrap bg-blue pt-5 pb-5'>
            <div className='footer-wrap-inner'>
                <Container>
                    <Row>
                        <Col>
                            <img src="/images/logo.webp" />
                            <h5 className='text-white'>Subscribe to our newsletter</h5>
                            <input placeholder='Enter Email' className='form-control' />
                        </Col>
                        <Col className='text-white'>
                            <h5>Company</h5>
                            <li><Link to='/about'>About</Link></li>
                            <li><Link to='/contact'>Contact-Us</Link></li>
                            <li><Link to='/lifeatopstree'>Life at Opstree</Link></li>
                            <li><Link to='/careers'>Careers</Link></li>
                            <li><Link to='/workshop'>Workshop</Link></li>
                            <li><Link to='https://opstree.com/privacy-policy' target='_blank'>Privacy Policy</Link></li>
                            <li><Link to='https://opstree.com/sitemap' target='_blank'>Sitemap</Link></li>
                        </Col>
                        <Col>
                            <h5 className='text-white'>Solutions</h5>
                            <ResourceList list={datalist} />
                        </Col>
                        <Col>
                            <h5 className='text-white'>Resources</h5>                            
                            <li><Link to='/about'>Blogs</Link></li>
                            <li><Link to='/contact'>Case Study</Link></li>
                            <li><Link to='/lifeatopstree'>Customer</Link></li>
                            <li><Link to='/lifeatopstree'>Opensource</Link></li>
                            <li><Link to='/lifeatopstree'>+91- (120) 4137323</Link></li>
                            <li><Link to='/lifeatopstree'>connect@opstree.com</Link></li>
                        </Col>
                    </Row>
                </Container>


            </div>

        </div>
    );
}
