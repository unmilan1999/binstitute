import React from 'react'
import logo from './favicon.png'
import './abt.css'

import { Container, Navbar, Nav, NavDropdown, Row, Col } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

function Header() {
    return (
        <header><b>
          <Navbar variant="dark" expand="lg" collapseOnSelect>
            <Container style={{fontSize:15}}>
              <Row><Col style={{fontSize: 10, color: 'white'}} xs={4}>
                <img src={logo} alt="#" height='90'/></Col><Col xs={8} style={{color:'white', fontSize:14 }}><br></br> Bhaktivedanta Institute<br></br> Bhubaneswar</Col>
              </Row>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto"></Nav>
                <Nav>
                  <LinkContainer to='/'>
                    <Nav.Link> Home </Nav.Link>
                  </LinkContainer>
                  <LinkContainer to='/about'>
                    <Nav.Link> About Us</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to='/gallery'>
                    <Nav.Link> Publications</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to='/contact'>
                    <Nav.Link> Contact Us</Nav.Link>
                  </LinkContainer>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          </b>
        </header>
    )
}

export default Header
