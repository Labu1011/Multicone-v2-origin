import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Cards from '../components/Cards'
import serviceData from '../data/serviceData'

const ServiceScreen = () => {
  return (
    <div className='service-main' id='service'>
      <Container>
        <Row>
          <h1 className='text-center title-dark title'>Our Services</h1>
          <Row className='d-flex justify-content-center my-4'>
            {serviceData.map((service, index) => (
              <Col md={4} sm={12} lg={4}>
                <Cards title={service.title} text={service.text} />
              </Col>
            ))}
          </Row>
        </Row>
      </Container>
    </div>
  )
}

export default ServiceScreen
