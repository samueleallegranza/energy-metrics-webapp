import React from "react";
import { Container, Row, Col, Button } from "reactstrap";

const Demo = () => {
    return (
        // style={{backgroundColor:"rgba(128,128,128,0.05)"}}
        <div className="section section-nucleo-icons">
            <Container>
                <Row className="justify-content-center">
                    <Col lg="8" md="12">
                        <h2 className="title">Want more?</h2>
                        <h3 className="description">
                            We have a live demo! Check it out to get an idea of what we want to accomplish.
                        </h3>
                        <div className="btn-wrapper">
                            <Button
                                className="btn-round"
                                color="primary"
                                href="https://1.1.1.1/"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                Check the DEMO Now!
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Demo;