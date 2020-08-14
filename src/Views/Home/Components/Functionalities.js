import React from "react";

import SvgMonitoring from "img/monitoring.svg";
import SvgAnalysis from "img/analysis.svg";
import SvgAlerting from "img/alerting.svg";

// reactstrap components
import {
  Container,
  Row,
  Col,
} from "reactstrap";


class Functionalities extends React.Component {
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
      <div className="section section-javascript" id="javascriptComponents">
            <img alt="..." className="path" src={require("assets/img/path3.png")} />
        <img
          alt="..."
          className="path path1"
          src={require("assets/img/path5.png")}
        />

        <div className="section">
          <Container>

            <div className="title">
              <h3>Functionalities</h3>
            </div>
            
            <Row className="justify-content-between align-items-center">
              <Col className="mb-5 mb-lg-0" lg="5">
                <h1 className="text-white font-weight-light">
                  Monitoring
                </h1>
                <p className="text-white mt-4">
                    Inspect your consumptions real-time, as well as the power produced by your solar panels.
                </p>
              </Col>
              <Col lg="6" style={{textAlign:"center"}}>
                <img src={SvgMonitoring} alt="Monitoring"></img>
              </Col>
            </Row>
          
            <div className="pt-lg"></div>

            <Row className="justify-content-between align-items-center">
              <Col className="mb-5 mb-lg-0" lg="5">
                <h1 className="text-white font-weight-light">
                  Alerting
                </h1>
                <p className="text-white mt-4">
                    Inspect your consumptions real-time, as well as the power produced by your solar panels.
                </p>
              </Col>
              <Col lg="6" style={{textAlign:"center"}}>
                    <img src={SvgAlerting} alt="Monitoring"></img>
                </Col>
            </Row>

            <div className="pt-md"></div>

            <Row className="justify-content-between align-items-center">
              <Col className="mb-5 mb-lg-0" lg="5">
                <h1 className="text-white font-weight-light">
                    Analysis
                </h1>
                <p className="text-white mt-4">
                    Inspect your consumptions real-time, as well as the power produced by your solar panels.
                </p>
              </Col>
              <Col lg="6" style={{textAlign:"center"}}>
                <img src={SvgAnalysis} alt="Monitoring"></img>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default Functionalities;