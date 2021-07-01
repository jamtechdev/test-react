import React from 'react';
import { Nav,Container,Row,Col,Button,Card,Tab} from 'react-bootstrap';

const InnerSection = ({jobs}) => {
    console.log('jobs', jobs);
    return (
       <section className="inner-section">
           <Container className="mt-5 mb-5">
               <Row>
                   <Col md={12} className="text-center">
                       <h2><b>THE INFORMATION AND TOOLS<br/> TO FIND YOUR NEXT JOB</b></h2>
                   </Col>
                </Row>
                <Row className="icon-section">
                   <Col md={3}>
                      <i className="fa fa-users home-icon"/>
                      <h5>Personalized Jobs</h5>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                   </Col>
                   <Col md={3}>
                      <i className="fa fa-building home-icon"/>
                      <h5>Company Insights</h5>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                   </Col>
                   <Col md={3}>
                      <i className="fa fa-briefcase home-icon"/>
                      <h5>Job Insights</h5>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                   </Col>
                   <Col md={3}>
                      <i className="fa fa-link home-icon"/>
                      <h5>Career Paths</h5>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                   </Col>
               </Row>
           </Container>
           <section className="job-section">
           <Container>
           <h4 className="mt-5 mb-3"><b>DEVELOPER JOBS NEAR ME</b></h4>
           <Row>
               <Col md={12}>
               <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                    <Col sm={12}>
                    <Nav variant="pills" className="nav-pill-sec">
                        <Nav.Item>
                        <Nav.Link eventKey="first" className="tab-links">Developer</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey="second" className="tab-links">Work form home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey="third" className="tab-links">Distance</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey="fourth" className="tab-links">Salary</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey="five" className="tab-links">Job level</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey="six" className="tab-links">Education</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    </Col>
                    <Col sm={12}>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                        <Row>
                        <Col md={4}>
               <Card className="job-card-list">
                <Card.Header><span className="company-name">T</span>React developer</Card.Header>
                <Card.Body>
                    <Card.Title>Two95 International Inc.</Card.Title>
                    <Card.Text>
                    Remote
                    </Card.Text>
                    <Card.Text>
                    $70k-100k yearly est.
                    </Card.Text>
                    <Button className="btn custom-btn">Apply Now</Button>
                </Card.Body>
                <Card.Footer>New | Easy Apply | 3d ago</Card.Footer>
                </Card>
               </Col>
               <Col md={4}>
               <Card className="job-card-list">
                <Card.Header><span className="company-name">T</span>React developer</Card.Header>
                <Card.Body>
                    <Card.Title>Two95 International Inc.</Card.Title>
                    <Card.Text>
                    Remote
                    </Card.Text>
                    <Card.Text>
                    $70k-100k yearly est.
                    </Card.Text>
                    <Button className="btn custom-btn">Apply Now</Button>
                </Card.Body>
                <Card.Footer>New | Easy Apply | 3d ago</Card.Footer>
                </Card>
               </Col>
               <Col md={4}>
               <Card className="job-card-list">
                <Card.Header><span className="company-name">T</span>React developer</Card.Header>
                <Card.Body>
                    <Card.Title>Two95 International Inc.</Card.Title>
                    <Card.Text>
                    Remote
                    </Card.Text>
                    <Card.Text>
                    $70k-100k yearly est.
                    </Card.Text>
                    <Button className="btn custom-btn">Apply Now</Button>
                </Card.Body>
                <Card.Footer>New | Easy Apply | 3d ago</Card.Footer>
                </Card>
               </Col>
               <Col md={4}>
               <Card className="job-card-list">
                <Card.Header><span className="company-name">T</span>React developer</Card.Header>
                <Card.Body>
                    <Card.Title>Two95 International Inc.</Card.Title>
                    <Card.Text>
                    Remote
                    </Card.Text>
                    <Card.Text>
                    $70k-100k yearly est.
                    </Card.Text>
                    <Button className="btn custom-btn">Apply Now</Button>
                </Card.Body>
                <Card.Footer>New | Easy Apply | 3d ago</Card.Footer>
                </Card>
               </Col>
               <Col md={4}>
               <Card className="job-card-list">
                <Card.Header><span className="company-name">T</span>React developer</Card.Header>
                <Card.Body>
                    <Card.Title>Two95 International Inc.</Card.Title>
                    <Card.Text>
                    Remote
                    </Card.Text>
                    <Card.Text>
                    $70k-100k yearly est.
                    </Card.Text>
                    <Button className="btn custom-btn">Apply Now</Button>
                </Card.Body>
                <Card.Footer>New | Easy Apply | 3d ago</Card.Footer>
                </Card>
               </Col>
               <Col md={4}>
               <Card className="job-card-list">
                <Card.Header><span className="company-name">T</span>React developer</Card.Header>
                <Card.Body>
                    <Card.Title>Two95 International Inc.</Card.Title>
                    <Card.Text>
                    Remote
                    </Card.Text>
                    <Card.Text>
                    $70k-100k yearly est.
                    </Card.Text>
                    <Button className="btn custom-btn">Apply Now</Button>
                </Card.Body>
                <Card.Footer>New | Easy Apply | 3d ago</Card.Footer>
                </Card>
               </Col>
               <Col md={4}>
               <Card className="job-card-list">
                <Card.Header><span className="company-name">T</span>React developer</Card.Header>
                <Card.Body>
                    <Card.Title>Two95 International Inc.</Card.Title>
                    <Card.Text>
                    Remote
                    </Card.Text>
                    <Card.Text>
                    $70k-100k yearly est.
                    </Card.Text>
                    <Button className="btn custom-btn">Apply Now</Button>
                </Card.Body>
                <Card.Footer>New | Easy Apply | 3d ago</Card.Footer>
                </Card>
               </Col>
               <Col md={4}>
               <Card className="job-card-list">
                <Card.Header><span className="company-name">T</span>React developer</Card.Header>
                <Card.Body>
                    <Card.Title>Two95 International Inc.</Card.Title>
                    <Card.Text>
                    Remote
                    </Card.Text>
                    <Card.Text>
                    $70k-100k yearly est.
                    </Card.Text>
                    <Button className="btn custom-btn">Apply Now</Button>
                </Card.Body>
                <Card.Footer>New | Easy Apply | 3d ago</Card.Footer>
                </Card>
               </Col>
               <Col md={4}>
               <Card className="job-card-list">
                <Card.Header><span className="company-name">T</span>React developer</Card.Header>
                <Card.Body>
                    <Card.Title>Two95 International Inc.</Card.Title>
                    <Card.Text>
                    Remote
                    </Card.Text>
                    <Card.Text>
                    $70k-100k yearly est.
                    </Card.Text>
                    <Button className="btn custom-btn">Apply Now</Button>
                </Card.Body>
                <Card.Footer>New | Easy Apply | 3d ago</Card.Footer>
                </Card>
               </Col>
               <Col md={12} className="text-center mt-5">
                   <Button className="btn custom-btn">Show more</Button>
               </Col>
                        </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                        <Row>
                        <Col md={4}>
               <Card className="job-card-list">
                <Card.Header><span className="company-name">T</span>React developer</Card.Header>
                <Card.Body>
                    <Card.Title>Two95 International Inc.</Card.Title>
                    <Card.Text>
                    Remote
                    </Card.Text>
                    <Card.Text>
                    $70k-100k yearly est.
                    </Card.Text>
                    <Button className="btn custom-btn">Apply Now</Button>
                </Card.Body>
                <Card.Footer>New | Easy Apply | 3d ago</Card.Footer>
                </Card>
               </Col>
               <Col md={4}>
               <Card className="job-card-list">
                <Card.Header><span className="company-name">T</span>React developer</Card.Header>
                <Card.Body>
                    <Card.Title>Two95 International Inc.</Card.Title>
                    <Card.Text>
                    Remote
                    </Card.Text>
                    <Card.Text>
                    $70k-100k yearly est.
                    </Card.Text>
                    <Button className="btn custom-btn">Apply Now</Button>
                </Card.Body>
                <Card.Footer>New | Easy Apply | 3d ago</Card.Footer>
                </Card>
               </Col>
               <Col md={4}>
               <Card className="job-card-list">
                <Card.Header><span className="company-name">T</span>React developer</Card.Header>
                <Card.Body>
                    <Card.Title>Two95 International Inc.</Card.Title>
                    <Card.Text>
                    Remote
                    </Card.Text>
                    <Card.Text>
                    $70k-100k yearly est.
                    </Card.Text>
                    <Button className="btn custom-btn">Apply Now</Button>
                </Card.Body>
                <Card.Footer>New | Easy Apply | 3d ago</Card.Footer>
                </Card>
               </Col>
                        </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                        <Row>
                        <Col md={4}>
               <Card className="job-card-list">
                <Card.Header><span className="company-name">T</span>React developer</Card.Header>
                <Card.Body>
                    <Card.Title>Two95 International Inc.</Card.Title>
                    <Card.Text>
                    Remote
                    </Card.Text>
                    <Card.Text>
                    $70k-100k yearly est.
                    </Card.Text>
                    <Button className="btn custom-btn">Apply Now</Button>
                </Card.Body>
                <Card.Footer>New | Easy Apply | 3d ago</Card.Footer>
                </Card>
               </Col>
               <Col md={4}>
               <Card className="job-card-list">
                <Card.Header><span className="company-name">T</span>React developer</Card.Header>
                <Card.Body>
                    <Card.Title>Two95 International Inc.</Card.Title>
                    <Card.Text>
                    Remote
                    </Card.Text>
                    <Card.Text>
                    $70k-100k yearly est.
                    </Card.Text>
                    <Button className="btn custom-btn">Apply Now</Button>
                </Card.Body>
                <Card.Footer>New | Easy Apply | 3d ago</Card.Footer>
                </Card>
               </Col>
               <Col md={4}>
               <Card className="job-card-list">
                <Card.Header><span className="company-name">T</span>React developer</Card.Header>
                <Card.Body>
                    <Card.Title>Two95 International Inc.</Card.Title>
                    <Card.Text>
                    Remote
                    </Card.Text>
                    <Card.Text>
                    $70k-100k yearly est.
                    </Card.Text>
                    <Button className="btn custom-btn">Apply Now</Button>
                </Card.Body>
                <Card.Footer>New | Easy Apply | 3d ago</Card.Footer>
                </Card>
               </Col>
                        </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="fourth">
                        <Row>
                        <Col md={4}>
               <Card className="job-card-list">
                <Card.Header><span className="company-name">T</span>React developer</Card.Header>
                <Card.Body>
                    <Card.Title>Two95 International Inc.</Card.Title>
                    <Card.Text>
                    Remote
                    </Card.Text>
                    <Card.Text>
                    $70k-100k yearly est.
                    </Card.Text>
                    <Button className="btn custom-btn">Apply Now</Button>
                </Card.Body>
                <Card.Footer>New | Easy Apply | 3d ago</Card.Footer>
                </Card>
               </Col>
               <Col md={4}>
               <Card className="job-card-list">
                <Card.Header><span className="company-name">T</span>React developer</Card.Header>
                <Card.Body>
                    <Card.Title>Two95 International Inc.</Card.Title>
                    <Card.Text>
                    Remote
                    </Card.Text>
                    <Card.Text>
                    $70k-100k yearly est.
                    </Card.Text>
                    <Button className="btn custom-btn">Apply Now</Button>
                </Card.Body>
                <Card.Footer>New | Easy Apply | 3d ago</Card.Footer>
                </Card>
               </Col>
               <Col md={4}>
               <Card className="job-card-list">
                <Card.Header><span className="company-name">T</span>React developer</Card.Header>
                <Card.Body>
                    <Card.Title>Two95 International Inc.</Card.Title>
                    <Card.Text>
                    Remote
                    </Card.Text>
                    <Card.Text>
                    $70k-100k yearly est.
                    </Card.Text>
                    <Button className="btn custom-btn">Apply Now</Button>
                </Card.Body>
                <Card.Footer>New | Easy Apply | 3d ago</Card.Footer>
                </Card>
               </Col>
                        </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="five">
                        <Row>
                        <Col md={4}>
               <Card className="job-card-list">
                <Card.Header><span className="company-name">T</span>React developer</Card.Header>
                <Card.Body>
                    <Card.Title>Two95 International Inc.</Card.Title>
                    <Card.Text>
                    Remote
                    </Card.Text>
                    <Card.Text>
                    $70k-100k yearly est.
                    </Card.Text>
                    <Button className="btn custom-btn">Apply Now</Button>
                </Card.Body>
                <Card.Footer>New | Easy Apply | 3d ago</Card.Footer>
                </Card>
               </Col>
               <Col md={4}>
               <Card className="job-card-list">
                <Card.Header><span className="company-name">T</span>React developer</Card.Header>
                <Card.Body>
                    <Card.Title>Two95 International Inc.</Card.Title>
                    <Card.Text>
                    Remote
                    </Card.Text>
                    <Card.Text>
                    $70k-100k yearly est.
                    </Card.Text>
                    <Button className="btn custom-btn">Apply Now</Button>
                </Card.Body>
                <Card.Footer>New | Easy Apply | 3d ago</Card.Footer>
                </Card>
               </Col>
               <Col md={4}>
               <Card className="job-card-list">
                <Card.Header><span className="company-name">T</span>React developer</Card.Header>
                <Card.Body>
                    <Card.Title>Two95 International Inc.</Card.Title>
                    <Card.Text>
                    Remote
                    </Card.Text>
                    <Card.Text>
                    $70k-100k yearly est.
                    </Card.Text>
                    <Button className="btn custom-btn">Apply Now</Button>
                </Card.Body>
                <Card.Footer>New | Easy Apply | 3d ago</Card.Footer>
                </Card>
               </Col>
                        </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="six">
                        <Row>
                        <Col md={4}>
               <Card className="job-card-list">
                <Card.Header><span className="company-name">T</span>React developer</Card.Header>
                <Card.Body>
                    <Card.Title>Two95 International Inc.</Card.Title>
                    <Card.Text>
                    Remote
                    </Card.Text>
                    <Card.Text>
                    $70k-100k yearly est.
                    </Card.Text>
                    <Button className="btn custom-btn">Apply Now</Button>
                </Card.Body>
                <Card.Footer>New | Easy Apply | 3d ago</Card.Footer>
                </Card>
               </Col>
               <Col md={4}>
               <Card className="job-card-list">
                <Card.Header><span className="company-name">T</span>React developer</Card.Header>
                <Card.Body>
                    <Card.Title>Two95 International Inc.</Card.Title>
                    <Card.Text>
                    Remote
                    </Card.Text>
                    <Card.Text>
                    $70k-100k yearly est.
                    </Card.Text>
                    <Button className="btn custom-btn">Apply Now</Button>
                </Card.Body>
                <Card.Footer>New | Easy Apply | 3d ago</Card.Footer>
                </Card>
               </Col>
               <Col md={4}>
               <Card className="job-card-list">
                <Card.Header><span className="company-name">T</span>React developer</Card.Header>
                <Card.Body>
                    <Card.Title>Two95 International Inc.</Card.Title>
                    <Card.Text>
                    Remote
                    </Card.Text>
                    <Card.Text>
                    $70k-100k yearly est.
                    </Card.Text>
                    <Button className="btn custom-btn">Apply Now</Button>
                </Card.Body>
                <Card.Footer>New | Easy Apply | 3d ago</Card.Footer>
                </Card>
               </Col>
                        </Row>
                        </Tab.Pane>
                    </Tab.Content>
                    </Col>
                </Row>
                </Tab.Container>
               </Col>
           </Row>
       </Container>
           </section>
     
       </section>
    )
}

export default InnerSection
