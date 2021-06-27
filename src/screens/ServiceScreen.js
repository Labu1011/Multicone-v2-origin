import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { Layers, Image, Monitor, Code, Terminal, Tablet } from 'react-feather'

const ServiceScreen = () => {
  return (
    <div className='service-main' id='service'>
      <Container>
        <Row className='d-flex justify-content-center'>
          <h1 className='text-center title-dark title'>Our Services</h1>
          <Row className='d-flex justify-content-center my-4'>
            <Col md={6} sm={12} lg={4}>
              <Card className='card my-2  service-card d-flex flex-column justify-content-center align-items-center'>
                <div
                  className='my-1 service-icon'
                  style={{ background: '#28B5B5' }}
                >
                  <Layers className='m-2' size={30} color='white' />
                </div>
                <Card.Title className='title-dark'>UI/UX</Card.Title>
                <Card.Text className='para-dark'>
                  Landing Pages, User Flow, Wireframing, Prototyping, Mobile App
                  Design, Web App
                </Card.Text>
              </Card>
            </Col>

            <Col md={6} sm={12} lg={4}>
              <Card className='card my-2  service-card d-flex justify-content-center align-items-center'>
                <div
                  className='my-1 service-icon'
                  style={{ background: '#F14668' }}
                >
                  <Image className='m-2' size={30} color='white' />
                </div>
                <Card.Title className='title-dark'>Illustration</Card.Title>
                <Card.Text className='para-dark'>
                  Logo Design, Icon Set, Illustration Guide, Illustration Set
                </Card.Text>
              </Card>
            </Col>

            <Col md={6} sm={12} lg={4}>
              <Card className='card my-2  service-card d-flex flex-column justify-content-center align-items-center'>
                <div
                  className='my-1 service-icon'
                  style={{ background: '#845EC2' }}
                >
                  <Monitor className='m-2' size={30} color='white' />
                </div>
                <Card.Title className='title-dark'>
                  Desktop Development
                </Card.Title>
                <Card.Text className='para-dark'>
                  Cross platform,Store Management, Bussiness Management
                  Tools,Educational tools
                </Card.Text>
              </Card>
            </Col>

            <Col md={6} sm={12} lg={4}>
              <Card className='card my-2  service-card d-flex justify-content-center align-items-center'>
                <div
                  className='my-1 service-icon'
                  style={{ background: '#F54748' }}
                >
                  <Code className='m-2' size={30} color='white' />
                </div>
                <Card.Title className='title-dark'>
                  Frontend Development
                </Card.Title>
                <Card.Text className='para-dark'>
                  HTML5,vanila CSS3 ,SCSS,Bootstrap v5, TailwindCSS, Material
                  UI, JavaScript,React.js, Vue.js, NEXT.js
                </Card.Text>
              </Card>
            </Col>

            <Col md={6} sm={12} lg={4}>
              <Card className='card my-2  service-card d-flex justify-content-center align-items-center'>
                <div
                  className='my-1 service-icon'
                  style={{ background: '#FB9300' }}
                >
                  <Terminal className='m-2' size={30} color='white' />
                </div>
                <Card.Title className='title-dark'>
                  Backend Development
                </Card.Title>
                <Card.Text className='para-dark'>
                  Node.js, PHP, Laravel, Python, Django, MongoDB, MySQL,
                  PostgreSQL, Microservices
                </Card.Text>
              </Card>
            </Col>

            <Col md={6} sm={12} lg={4}>
              <Card className='card my-2  service-card d-flex justify-content-center align-items-center'>
                <div
                  className='my-1 service-icon'
                  style={{ background: '#29BB89' }}
                >
                  <Tablet className='m-2' size={30} color='white' />
                </div>
                <Card.Title className='title-dark'>
                  Android/IOS Development
                </Card.Title>
                <Card.Text className='para-dark'>
                  Bussiness , E-commerce,Restaurant Management, CMS, Agency
                  monitoring
                </Card.Text>
              </Card>
            </Col>
          </Row>
        </Row>
      </Container>
    </div>
  )
}

export default ServiceScreen
