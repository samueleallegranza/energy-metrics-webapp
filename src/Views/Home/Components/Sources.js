import React from "react";

import SvgToaster from "img/toaster.svg";
import SvgPanels from "img/panels.svg";

// reactstrap components
import {
    Container,
    Row,
    Col,
} from "reactstrap";


class Sources extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            demoModal: false,
            miniModal: false,
            formModal: false
        };
    }
    toggleModal = modalState => {
        this.setState({
            [modalState]: !this.state[modalState]
        });
    };
    render() {
        return (
            <div className="section section-nucleo-icons">
                <div className="section">
                    <Container>

                        <Row className="justify-content-center">
                            <h2 className="title">Monitor simultaneously</h2>
                        </Row>

                        <div className="pt-md"></div>

                        <Row className="justify-content-between align-items-center">
                            <Col lg="5">
                                <h2 style={{ textAlign: "center" }} >Power<br />Production</h2>
                                <img src={SvgPanels} alt="Monitoring"></img>
                            </Col>
                            <Col lg="5">
                                <h2 style={{ textAlign: "center" }}>Power<br />Consumption</h2>
                                <img src={SvgToaster} alt="Monitoring"></img>
                            </Col>
                        </Row>

                    </ Container>
                </div>
            </div>
        );
    }
}

export default Sources;