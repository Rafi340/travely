import React from 'react';
import { Carousel, Col, Container, ListGroup, Row } from 'react-bootstrap';
import b1 from "Components/Common/Img/b1.jpg";
import b2 from "Components/Common/Img/b2.jpg";
const Banner = () => {
    return <>
        <Container>
            <Row>
                <Col lg={3}>
                    <ListGroup>
                        <ListGroup.Item>Cras justo odio</ListGroup.Item>
                        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                        <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                        <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                        <ListGroup.Item>Cras justo odio</ListGroup.Item>
                        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                        <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                        <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                        <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                        <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col lg={9}>
                    <Carousel className="mt-3">
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={b1}
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={b2}
                                alt="Second slide"
                            />

        
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
        </Container>
    </>
};
export default Banner;