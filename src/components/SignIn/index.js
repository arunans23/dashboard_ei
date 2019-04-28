import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody} from 'mdbreact';
import {compose} from 'recompose';
import {withFirebase} from '../Firebase';
import SignInGoogle from "../GoogleLogin";

const SignIn = () => (
    <SignInForm/>
);

class SignInFormBase extends Component {
    render() {
        return (
            <MDBContainer style={{marginTop: "3%", marginBottom:"11%"}}>
                <MDBRow>
                    <MDBCol md="3"/>
                    <MDBCol md="6">
                        <MDBCard>
                            <div className="header pt-3 special-color-dark">
                                <MDBRow className="d-flex justify-content-start">
                                    <h5 className="white-text mt-3 mb-4 pb-1 mx-5" style={{textAlign:"center !important"}}>
                                        Welcome to WSO2 Team EI Dashboard
                                    </h5>
                                </MDBRow>
                            </div>
                            <MDBCardBody className="mx-4 mt-4">
                                <div>
                                    <center>
                                        <img src={"images/QOD.png"} style={{width:"350px"}} />
                                    </center>
                                </div>
                                <hr/>
                                <div>
                                    <center>
                                        <h3>Blogger of the Month</h3>
                                    </center>
                                </div>
                                <hr/>
                                <div style={{marginBottom:"50px"}}>
                                    <center>
                                        <h3>StackOverflow EI Questions</h3>
                                    </center>
                                </div>
                                <div className="row my-3 d-flex justify-content-center" >
                                    <SignInGoogle/>
                                </div>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol md="3"/>
                </MDBRow>
            </MDBContainer>
        );
    }
}

const SignInForm = compose(
    withRouter,
    withFirebase,
)(SignInFormBase);

export default SignIn;
export {SignInForm};