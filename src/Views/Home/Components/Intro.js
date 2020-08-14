import React from "react";
import { Container, Row, Col } from "reactstrap";

const Intro = () => {
    return (
        <div className="section section-nucleo-icons">
            <Container>
                <Row className="justify-content-center">
                    <Col lg="8" md="12">
                        <h2 className="title">Our project</h2>
                        <h4 className="description">
                            We believe that knowing our home consumptions is one of the first steps in order to reduce emissions and create a more sustainable future.
                            For this reason we want to create the tool that allows us to reach the goal.
                        </h4>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Intro;