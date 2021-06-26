import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <Container className='footer'>
      <Row>
        <Col className='text-center'>
          <p className='lead'>Multicone &copy; 2021</p>
        </Col>
      </Row>
    </Container>
  )
}

export default Footer
