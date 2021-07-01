import React from 'react';
import Carousel from "react-multi-carousel";
import {Button,Card,Container,Row,Col} from 'react-bootstrap';

const Slider = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return (
        <Container>
            <Row className="align-items-center">
                <Col md={12}>
                <h2><b>FEATURED JOBS</b></h2>
                <h5>Find the best job here</h5>
                </Col>
                <Col md={12}>
                <Carousel 
         swipeable={true}
         draggable={true}
         responsive={responsive}
         ssr={true} // means to render carousel on server-side.
         infinite={true}
         autoPlay={true}
         autoPlaySpeed={1500}
         itemClass="carousel-item-padding-40-px"
         className="slider-section"
        >
            <div>
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
            </div>
            <div>
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
            </div>
            <div>
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
            </div>
            <div>
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
            </div>
        </Carousel>
                </Col>
            </Row>
        </Container>
    )
}

export default Slider
