import React from "react";
import { Col, Container, Row, Footer } from "mdbreact";
import "./style.css";

  class FooterPagePro extends React.Component {
    render() {
        return (
            <Footer color="special-color-dark" className="footer font-small darken-3 pt-0">
                <Container>
                    <Row>
                        <Col md="12" className="py-5">
                            <div className="mb-5 flex-center">
                                <Row>
                                <Col md="4">
                                    <a href="#!" className="fb-ic">
                                        <i className="fa fa-medium fa-lg white-text mr-md-5 mr-3 fa-2x">
                                        </i>
                                    </a>
                                </Col>
                                <Col md="4">
                                    <a href="#!" className="gplus-ic">
                                        <i className="fa fa-stack-overflow fa-lg white-text mr-md-5 mr-3 fa-2x">
                                        </i>
                                    </a>
                                </Col>
                                <Col md="4">
                                    <a href="#!" className="li-ic">
                                        <i className="fa fa-github fa-lg white-text mr-md-5 mr-3 fa-2x">
                                        </i>
                                    </a>
                                </Col>

                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <div className="footer-copyright text-center py-3 footer-bottom">
                    <Container fluid>
                        &copy; {new Date().getFullYear()} Copyright:{" "}
                        <a href="https://www.scorelab.org"> WSO2 Team EI </a>
                    </Container>
                </div>
            </Footer>
        );
  }
}

export default FooterPagePro;