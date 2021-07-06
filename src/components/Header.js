import React from 'react'
import { Navbar, Nav, Button, Container } from 'react-bootstrap'

const Header = () => {
  return (
    <header>
      <Navbar
        variant='dark'
        expand='lg'
        collapseOnSelect
        style={{ background: '#343A40' }}
        className='navbar'
      >
        <Container>
          <Navbar.Brand href='#home'>
            Multicone
            <span style={{ fontSize: 12, color: 'rgb(248, 216, 74)' }}>
              {' '}
              beta
            </span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse
            id='basic-navbar-nav'
            className='justify-content-end align-items-center'
          >
            <Nav>
              <Nav.Link href='/'>Home</Nav.Link>
              <Nav.Link href='#s1'>Services</Nav.Link>
              <Nav.Link href='#p1'>Projects</Nav.Link>
              <Nav.Link href='#t1'>Team</Nav.Link>
              <Button className='mx-3'>Let's talk</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
