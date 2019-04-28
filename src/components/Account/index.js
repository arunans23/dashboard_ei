import React, { Component }  from 'react';
import { AuthUserContext, withAuthorization } from '../Session';
import { MDBIcon,MDBCardTitle, MDBCardText,MDBCard, MDBCardBody,MDBJumbotron, MDBContainer,Col, Row } from "mdbreact";
import {compose} from "recompose";
import {withFirebase} from "../Firebase";
import {withRouter} from "react-router-dom";


class Account extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userData:null,
        };
    }

    componentDidMount() {
        this.setState({loading: true});
        this.props.firebase.auth.onAuthStateChanged(
            authUser => {
                this.setState({userData: authUser.email})
            });
    }

    render()  {

        return (
            <MDBContainer fluid>
                    <MDBJumbotron fluid style={{
                        backgroundColor: "#0099CA",
                        marginLeft: "-15px",
                        marginRight: "-15px",
                        borderTopLeftRadius: "0",
                        borderTopRightRadius: "0"
                    }}>
                        <MDBContainer style={{textAlign: "center", color: "white"}}>
                            <h2 className="display-4">My Account</h2>
                        </MDBContainer>
                    </MDBJumbotron>
                    <MDBContainer>
                        <MDBCard reverse style={{marginTop: "-80px"}}>
                            <MDBCardBody cascade className="text-center">
                                <AuthUserContext.Consumer>
                                    {authUser => (
                                        <div>
                                            <MDBCardTitle><strong>{authUser.username}</strong></MDBCardTitle>
                                            <h6 className="indigo-text">{authUser.email}</h6>
                                        </div>
                                    )}
                                </AuthUserContext.Consumer>
                                <MDBCardText>Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium
                                    doloremque
                                    laudantium, totam
                                    rem aperiam.</MDBCardText>
                                <a href="#!" className="icons-sm li-ic ml-1">
                                    <MDBIcon  icon="linkedin-in"/></a>
                                <a href="#!" className="icons-sm tw-ic ml-1">
                                    <MDBIcon  icon="twitter"/></a>
                                <a href="#!" className="icons-sm fb-ic ml-1">
                                    <MDBIcon  icon="facebook-f"/></a>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBContainer>
                    <MDBContainer>
                        <Row style={{marginTop: "30px"}}>
                            <Col md="12">
                                <h3>Reported Scams</h3>
                                <hr/>
                            </Col>
                        </Row>
                    </MDBContainer>
                </MDBContainer>

        )
    }
}


const AccountPage = compose(
  withRouter,
  withFirebase,
)(Account);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(AccountPage);