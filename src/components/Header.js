// noinspection SpellCheckingInspection

import React from 'react';
import { Navbar,Nav,Container,Row,Col,Form,Button} from 'react-bootstrap';
import sideImg from '../img/side.gif';


const Header = () => {
    return (
        <Container fluid className="p-0">
            <Navbar bg="light" expand="lg">
                <Container>
                <Navbar.Brand className="logo" href="#home"><b>DEVELOPERS JOB</b></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav className="me-auto">
                    <Nav.Link href="#home" className="active nav-menu">JOB</Nav.Link>
                    <Nav.Link href="#link" className="nav-menu">SALARY</Nav.Link>
                    <Nav.Link href="#link" className="nav-menu">RESUME</Nav.Link>
                    <Nav.Link href="#link" className="nav-menu">SKILLS</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
            <Container className="banner mt-5">
               <Row className="align-items-center">
                    <Col md={6}>
                       <h1><b>DEVELOPER JOBS</b></h1>
                       <h4>Find the best job here</h4>
                       <p>No matter what industry you're in as a developer, you'll always be a developer. Let me explain. Most developers only refer to themselves professionally as developers. Which kind of seems like a no-brainer. Except that there are lots of different types of developers out there. So even if you're a software developer, you'll probably still only be known as a developer.</p>
                       <Form className="mt-5">
                       <Row className="align-items-center">
                        <Col md={8}>
                        <Form.Control
                            id="inlineFormInput"
                            placeholder="Find job by location, Company name"
                        />
                        </Col>
                        <Col md={4}>
                        <Button type="submit" className="btn custom-btn">
                            Find Job
                        </Button>
                        </Col>
                    </Row>
                    </Form>
                    </Col>
                    <Col md={6}>
                        <img className="side-img" src={sideImg} alt=""/>
                    </Col>
                </Row>
            </Container>
        </Container>
      
    )
}

export default Header
