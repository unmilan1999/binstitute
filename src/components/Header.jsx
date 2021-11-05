import React from 'react'
import logo from './favicon.png'

import { Container, Navbar, Nav, NavDropdown, Row, Col } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

function Header() {
    return (
        <header><b>
          <Navbar variant="dark" expand="lg" collapseOnSelect>
            <Container style={{fontSize:15}}>
              <Row><Col style={{fontSize: 10, color: 'white'}} xs={3}>
                <img src={logo} alt="#" height='80'/></Col><Col xs={9} style={{color:'white', fontSize:15 }}><br></br> Bhaktivedanta Institute<br></br> Bhuvaneshwar</Col>
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
                    <Nav.Link> Gallery</Nav.Link>
                  </LinkContainer>
                  <NavDropdown title="More details" id="basic-nav-dropdown">
                    <LinkContainer to='/contact'>
                      <NavDropdown.Item >Contact Us</NavDropdown.Item>
                    </LinkContainer>
                    <NavDropdown.Divider />
                    <LinkContainer to='/form'>
                      <NavDropdown.Item>Register as volunteer</NavDropdown.Item>
                    </LinkContainer>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          </b>
        </header>
    )
}

export default Header
