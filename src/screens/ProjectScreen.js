import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import projectData from '../data/projectData'

const ProjectScreen = () => {
  return (
    <div className='project-main' id='p1'>
      <Container>
        <Row className='d-flex justify-content-center'>
          <h1 className='text-center title'>Explore Our Projects</h1>
          <Row className='my-4'>
            {projectData.map((project) => (
              <Col
                md={6}
                sm={12}
                lg={6}
                className='d-flex justify-content-center my-2'
              >
                <div className='project-image-container'>
                  <img
                    src={`${process.env.PUBLIC_URL}/${project.image}`}
                    alt={project.alt}
                    className='project-img'
                  />
                  <div className='on-hover-div'>
                    <Button className='project-btn' variant='warning'>
                      Preview
                    </Button>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Row>
      </Container>
    </div>
  )
}

export default ProjectScreen
