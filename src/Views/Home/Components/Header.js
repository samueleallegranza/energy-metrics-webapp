import React from 'react';

// reactstrap components
import { Container } from "reactstrap";


const Header = () => {
    return(
        <div className="page-header header-filter">
            <div className="squares square1" />
            <div className="squares square2" />
            <div className="squares square3" />
            <div className="squares square4" />
            <div className="squares square5" />
            <div className="squares square6" />
            <div className="squares square7" />
            <Container>
                <div className="content-center brand">
                    <h1 className="h1-seo">Energy Metrics</h1>
                    <h3 className="d-none d-sm-block">
                        Monitor your home's power consumptions,<br/>Waste less & save money.
                    </h3>
                    Check out our idea<br />
                    <i className="tim-icons icon-minimal-down"></i>
                </div>
            </Container>
        </div>
    )
}

export default Header;