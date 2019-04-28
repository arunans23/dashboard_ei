import React, { Component } from 'react';
import { MDBJumbotron, MDBContainer,Col, Row } from "mdbreact";
import "./style.css";
import {withFirebase} from "../Firebase";
import {withRouter} from "react-router-dom";
import {compose} from "recompose";
import {withAuthorization} from "../Session";

class SomeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userData:null,
        };
    }

    render() {
        return(
            <MDBContainer fluid>
                <MDBJumbotron fluid style={{
                    backgroundColor: "#0099CA",
                    marginLeft: "-15px",
                    marginRight: "-15px",
                    borderTopLeftRadius: "0",
                    borderTopRightRadius: "0"
                }}>
                    <MDBContainer style={{textAlign: "center", color: "white"}}>
                        <h2 className="display-4">Welcome to Team EI Dashboard</h2>
                        <p className="lead" style={{textTransform: "uppercase", fontSize: "14px"}}>
                            This is the platform for all team EI members to view Question of the day, stackoverflow related questions,
                            blogs and EI trends of Market<br/>
                            Do not hesitate to contribute for this dashboard from <b><a style={{color:"#1e62ce"}} href="https://github.com/sajithaliyanage/dashboard_ei">here</a></b></p>
                    </MDBContainer>
                </MDBJumbotron>
                <MDBContainer fluid>
                    <Row>
                        <Col md="9">
                            <h3>Question of the Day</h3>
                            <hr/>
                        </Col>
                        <Col md="3">
                            <h3>Leading Run Scorer</h3>
                            <hr/>
                        </Col>
                    </Row>
                </MDBContainer>
            </MDBContainer>
        )
    }
}

const LandingDataPage = compose(
  withRouter,
  withFirebase,
)(SomeComponent);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(LandingDataPage);
