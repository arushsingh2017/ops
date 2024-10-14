import React from 'react'
import osdata from '../JSONAPI/JSONopensource.json'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Card from './com/Card'

const OpenSources = () => {
  return (
    <>
      <div className='banner' style={{ backgroundImage: `url("${osdata.opensource.banner_bg}")`, backgroundSize: 'cover' }}>
        <div className='slider-inner-wrap' style={{ padding: '180px 0 180px 6%' }}>
          <h1 style={{ color: '#fff' }}>{osdata.opensource.banner_title}</h1>
          <h6 style={{ color: '#fff' }}>{osdata.opensource.banner_dis}</h6>
        </div>
      </div>

      <Container className='pt-5 pb-5' style={{ maxWidth: '95%', margin: '0 auto' }}>
        <h6 className='text-center text-bold-7'>EXPLORE</h6>
        <h2 className='text-center pt-1 text-bold-7 pb-5'>OpsTree Open-Source</h2>
        <h6 className='text-center text-bold-6' style={{ lineHeight: '26px', fontSize: '18px' }}>{osdata.opensource.banner_bottom}</h6>

        <div className='open-cat-wrap pt-4 pb-4'>
          {
            osdata.opensource.opensource_list.map((cat_Item) => {
              return (
                <>
                  <div className='open-cat-box'>
                    <img src={cat_Item.open_icon} />
                    <h4 className='text-bold-7 pt-2'>{cat_Item.open_name}</h4>
                    <p>{cat_Item.open_dis}</p>
                    <Link to={`/opensource/${cat_Item.id}`}>Know More</Link>
                  </div>
                </>
              )
            })
          }
        </div>

      </Container>

      <div className='pt-5' style={{ background: '#ddd' }}>
        <Container className='pt-5 pb-5' style={{ maxWidth: '93%', margin: '0 auto' }}>
          <div className='open-service-wrap' style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ width: '50%' }}>
              <h6 className='text-bold-8'>OUR FEATURED</h6>
              <h3 className='text-bold-8'>Featured Open Source</h3>
              <p className='pt-3 text-bold-6'>Join our diverse and highly motivated open source community. Find the best open source solution for your operating system, middleware, and cloud needs.</p>
            </div>
            <div style={{ width: '50%', display: 'flex' }}>
              <Card
                ser_icon={"/images/opensource/redis-operator-black.svg"}
                ser_name={"Redis Operator"}
                ser_dis={"A golang based redis operator that will make/oversee Redis standalone/cluster mode setup on top of Kubernetes."}

              />

              <Card
                ser_icon={"/images/opensource/logging-operator-black.svg"}
                ser_name={"Logging Operator"}
                ser_dis={"A golang based operator to create and manage EFK (Elasticsearch, Fluentd, and Kibana) stack on Kubernetes"}

              />
            </div>
          </div>
          <div style={{ display: 'flex' }}>
            <Card
              ser_icon={"/images/opensource/docker-linter-black.svg"}
              ser_name={"Dockerlinter"}
              ser_dis={"A linter designed in golang for checking Dockerfile best practices"}

            />
            <Card
              ser_icon={"/images/opensource/k8s-vault-black.svg"}
              ser_name={"K8s Vault Webhook"}
              ser_dis={"A k8s vault webhook is a Kubernetes webhook that can inject secrets into Kubernetes resources by connecting to multiple secret managers"}

            />
            <Card
              ser_icon={"/images/opensource/docker-linter-black.svg"}
              ser_name={"Druid exporter"}
              ser_dis={"A Golang-based exporter captures druid API-related metrics and receives druid-emitting HTTP JSON data."}

            />
            <Card
              ser_icon={"/images/opensource/dynamic-pv-scaler.svg"}
              ser_name={"Dynamic pv scaler"}
              ser_dis={"A golang based Kubernetes application that can scale volume dynamically."}

            />
          </div>
        </Container>
      </div>


      <div className='banner' style={{ backgroundImage: `url("${osdata.opensource.banner_bg}")`, backgroundSize: 'cover' }}>
        <Container className='pt-5 pb-5 text-white' style={{position:'relative'}}>
          <Row className='pt-4'>
            <Col>
              <h1>{osdata.opensource.blog_info}</h1>
            </Col>
            <Col className='blog-opensource-wrap'>
             <ul>
             {
                osdata.opensource.blogs_list.map((blogItem) => {
                  return (
                    <>
                      <li>  {`${blogItem.blog_name}...`} <span><a href={blogItem.blog_url}>Read More</a></span> </li>
                    </>
                  )
                })
              }
             </ul>
              
            </Col>
          </Row>




        </Container>


      </div>








    </>
  )
}

export default OpenSources
