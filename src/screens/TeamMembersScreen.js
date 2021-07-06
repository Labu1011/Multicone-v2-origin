import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { FaFacebookSquare, FaGithub, FaTwitter } from 'react-icons/fa'

const TeamMembersScreen = () => {
  return (
    <div className='team-main' id='t1'>
      <Container>
        <Row className='d-flex justify-content-center'>
          <h1 className='title-dark title text-center'>Our Team Members</h1>
          <p className='para-dark text-center'>
            Meet the geniuses behind this company
          </p>
          <Row className='p-3'>
            <Col md={6} sm={12} lg={4}>
              <Card className='p-3 d-flex justify-content-center align-items-center team-card'>
                <div className='team-img'>
                  <Card.Img
                    src={`${process.env.PUBLIC_URL}/assets/img/team/0new.jpeg`}
                  />
                </div>
                <Card.Title className='title-dark'>
                  Nawab Khairuzzaman Mohammad Kibria
                </Card.Title>
                <Card.Text className='para-dark'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse euismod metus ut velit mollis porttitor.
                </Card.Text>
                <div>
                  <FaFacebookSquare fill='	#4267B2' size='30' className='mx-1' />
                  <FaGithub fill='#333' size='30' className='mx-1' />
                  <FaTwitter fill='#1DA1F2' size='30' className='mx-1' />
                </div>
              </Card>
            </Col>
            <Col md={6} sm={12} lg={4}>
              <Card className='p-3 d-flex justify-content-center align-items-center team-card'>
                <div className='team-img'>
                  <Card.Img
                    src={`${process.env.PUBLIC_URL}/assets/img/team/1.jpeg`}
                  />
                </div>
                <Card.Title className='title-dark'>Shafiqul Islam</Card.Title>
                <Card.Text className='para-dark'>
                  Vivamus dapibus ligula lacus, at aliquet arcu dapibus ut.
                  Aliquam mollis tristique massa feugiat suscipit. Nullam dictum
                  varius feugiat. tristique massa
                </Card.Text>
                <div>
                  <FaFacebookSquare fill='	#4267B2' size='30' className='mx-1' />
                  <FaGithub fill='#333' size='30' className='mx-1' />
                  <FaTwitter fill='#1DA1F2' size='30' className='mx-1' />
                </div>
              </Card>
            </Col>
            <Col md={6} sm={12} lg={4}>
              <Card className='p-3 d-flex justify-content-center align-items-center team-card'>
                <div className='team-img'>
                  <Card.Img
                    src={`${process.env.PUBLIC_URL}/assets/img/team/2.jpg`}
                  />
                </div>
                <Card.Title className='title-dark'>Tarek Jaman Labu</Card.Title>
                <Card.Text className='para-dark'>
                  Integer auctor, nulla vitae eleifend venenatis, lacus turpis
                  congue nibh, sed posuere elit nibh eu eros. Etiam varius, erat
                  sed gravida consectetur
                </Card.Text>
                <div>
                  <FaFacebookSquare fill='	#4267B2' size='30' className='mx-1' />
                  <FaGithub fill='#333' size='30' className='mx-1' />
                  <FaTwitter fill='#1DA1F2' size='30' className='mx-1' />
                </div>
              </Card>
            </Col>
          </Row>
        </Row>
      </Container>
    </div>
  )
}

export default TeamMembersScreen
