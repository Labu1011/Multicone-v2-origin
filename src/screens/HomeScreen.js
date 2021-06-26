import React from 'react'
import { Container, Button, Row, Col } from 'react-bootstrap'

const HomeScreen = () => {
  return (
    <div className='home-main'>
      <Container className='d-flex justify-content-between align-items-center'>
        <Row>
          <Col
            md={6}
            sm={12}
            className='d-flex justify-content-center align-items-center'
          >
            <div className='hero-sec'>
              <h1>
                Our goal isn’t to build a website, Our goal is to build your
                business
              </h1>
              <p>Custom websites at affordable prices</p>
              <div className='my-3'>
                <Button variant='primary'>Let's start discussion</Button>
                <Button variant='warning' className='mx-2'>
                  Explore
                </Button>
              </div>
            </div>
          </Col>
          <Col
            md={6}
            sm={12}
            className='d-flex justify-content-center align-items-center'
          >
            <div className='hero-right'></div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default HomeScreen
