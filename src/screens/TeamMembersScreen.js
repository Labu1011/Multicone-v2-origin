import React from 'react'
import { Container, Button, Row, Col } from 'react-bootstrap'

const TeamMembersScreen = () => {
  return (
    <div className='team-main'>
      <Container>
        <Row className='d-flex justify-content-center'>
          <h1 className='title-dark title text-center'>Our team members</h1>
          <p className='para-dark text-center'>
            Meet the geniuses behind this company
          </p>
          <Row>
            <Col md={6} sm={12} lg={4} className='bg-warning'>
              a
            </Col>
            <Col md={6} sm={12} lg={4} className='bg-dark'>
              b
            </Col>
            <Col md={6} sm={12} lg={4} className='bg-primary'>
              c
            </Col>
          </Row>
        </Row>
      </Container>
    </div>
  )
}

export default TeamMembersScreen
