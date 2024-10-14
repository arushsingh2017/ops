import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import ServiceCard from './com/ServiceCard';

const service_tag = 'Our services';
const service_heading = 'Delivering the Cloud & DevSecOps outcomes for your tech teams';
const service_info = 'Get guidance from our tech experts on your most critical priorities. Discuss use cases and problems with tech architects who have been advisors & consultants to leading technology heads of the world.';
const service_icon = './images/cloud.svg'
const service_icon2 = './images/microservices_containerisation_kubernetes.svg'
const service_icon3 = './images/infrastruction-cicd-automation.svg'
const service_icon4= './images/multihybrid_cloud-_implementation_migration.svg'
const service_icon5= './images/cloud_security_secOps_compliance.svg'
const service_icon6= './images/observability_platform_reliability.svg'


export const service = [
    {

        service_type: [
            {
                service_name: 'Cloud & DevSecOps Consulting & Advisory',

                service_link: 'https://opstree.com/cloud-devsecops-advisory/'

            },
            {
                service_name: 'Microservices, Containerisation & Kubernetes',
                service_icon: './images/microservices_containerisation_kubernetes.svg',
                service_link: 'https://opstree.com/kubernetes-containerization/'
            },
            {
                service_name: 'Infrastructure & Software Delivery Automation',
               
                service_link: 'https://opstree.com/kubernetes-containerization/'
            },
            {
                service_name: 'Multi/Hybrid Cloud Implementation & Migration',
              
                service_link: 'https://opstree.com/kubernetes-containerization/'
            },
            {
                service_name: 'Cloud Security, SecOps & Compliance',
               
                service_link: 'https://opstree.com/kubernetes-containerization/'
            },
            {
                service_name: 'Observability & Platform Reliability',
                
                service_link: 'https://opstree.com/kubernetes-containerization/'
            },
        ]
    }

]

export default function HomeService() {
    return (
        <>
        <div className='mt-5 pb-5' style={{background:'#f0f0f1', paddingTop:'50px'}}>
            <div className='wraper container'>
               
                    <Row>
                        <Col md={6}>
                            <h5 className='text-uppercase' style={{fontWeight:'700'}}> {service_tag}</h5>
                            <h3 className='pt-3' style={{fontWeight:'700'}}> {service_heading}</h3>
                            <p className='pt-3'>  {service_info}</p>
                        </Col>
                        <Col md={6}>
                            <Row>
                                <Col md={6}>
                                    <ServiceCard Ser_Name="Cloud & DevSecOps Consulting & Advisory" imageSrc={service_icon} pagesLink='/cloud-devsecops-advisory' />
                                </Col>
                                <Col md={6}>
                                    <ServiceCard Ser_Name="Microservices, Containerisation & Kubernetes" imageSrc={service_icon2} pagesLink='/kubernetes-containerization' />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={3}>
                            <ServiceCard Ser_Name="Infrastructure & Software Delivery Automation" imageSrc={service_icon3} pagesLink='/continuous-delivery-automation' />
                        </Col>
                        <Col md={3}>
                            <ServiceCard Ser_Name="Multi/Hybrid Cloud Implementation & Migration" imageSrc={service_icon4} pagesLink='/cloud-platform-engineering' />
                        </Col>
                        <Col md={3}>
                            <ServiceCard Ser_Name="Cloud Security, SecOps & Compliance" imageSrc={service_icon5} pagesLink='/security-as-a-service' />
                        </Col>
                        <Col md={3}>
                            <ServiceCard Ser_Name="Observability & Platform Reliability" imageSrc={service_icon6} pagesLink='/monitoring-platform-reliability' />
                        </Col>
                    </Row>
              
            </div>
            </div>


        </>
    )
}
