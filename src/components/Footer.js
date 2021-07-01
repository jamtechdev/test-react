import React from 'react';
import { Container,Row,Col} from 'react-bootstrap';

const Footer = () => {
    return (
        <footer>
            <Container>
                <Row>
                    <Col md={6}>
                      <h1 className="logo"><b>DEVELOPERS JOB</b></h1>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                      <h5>Follow us</h5>
                      <div className="social-icon">
                        <i className="fa fa-facebook-f" aria-hidden="true"/>
                        <i className="fa fa-twitter" aria-hidden="true"/>
                        <i className="fa fa-instagram" aria-hidden="true"/>
                        <i className="fa fa-google" aria-hidden="true"/>
                      </div>
                    </Col>
                    <Col md={3}>
                      <h1 className="logo"><b>Useful links</b></h1>
                      <ul>
                          <li>JOB</li>
                          <li>SALARY</li>
                          <li>RESUME</li>
                          <li>SKILLS</li>
                      </ul>
                    </Col>
                    <Col md={3}>
                      <h1 className="logo"><b>Categories</b></h1>
                      <ul>
                          <li>DEVELOPER</li>
                          <li>WORK FROM HOME</li>
                          <li>DISTANCE</li>
                          <li>JOB TYPE</li>
                          <li>JOB LEVEL</li>
                          <li>EDUCATION</li>
                      </ul>
                    </Col>
                </Row>
            </Container>
            <div className="copyright text-center">
              <p>Copyright @2021</p>
            </div>
        </footer>
    )
}

export default Footer
