import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavItem, NavLink, Collapse, Dropdown, DropdownToggle, DropdownMenu,  DropdownItem, Container, Fa } from "mdbreact";
import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';
import { AuthUserContext,withAuthorization } from '../Session';
import "./style.css";
import {withRouter} from "react-router-dom";
import {withFirebase} from "../Firebase";
import {compose} from "recompose";

const Navigation = () => (
  <div>
      <AuthUserContext.Consumer>
      {authUser =>
        authUser ? <NavigationAuth2 /> : <NavigationNonAuth />

      }
    </AuthUserContext.Consumer>
  </div>
);

class NavigationAuth extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userData:null,
        };
    }

    componentDidMount() {
        //get user data and add to the state
        this.props.firebase.auth.onAuthStateChanged(
            authUser => {
                this.setState({userData: authUser.email})
            });
    }

    render() {
        return (
            <div>
                <Navbar color="special-color-dark" dark expand="md">
                    <Container>
                        <NavbarBrand>
                            <strong className="white-text">
                                <NavLink to={ROUTES.LANDING} className="white-text">WSO2 Team EI Dashboard</NavLink>
                            </strong>
                        </NavbarBrand>
                        <Collapse id="navbarCollapse3" isOpen={this.state.collapseID} navbar>
                            <NavbarNav right>
                                <AuthUserContext.Consumer>
                                    {authUser => (
                                        <NavItem style={{marginTop: "7px"}}>
                                            <Dropdown>
                                                <DropdownToggle nav caret>
                                                    <Fa icon="user" className="mr-1"/>
                                                    {authUser.email.split('@')[0]}
                                                </DropdownToggle>
                                                <DropdownMenu className="dropdown-default" right>
                                                    <DropdownItem><NavLink to={ROUTES.ACCOUNT} style={{
                                                        color: "#212529",
                                                        textAlign: "left",
                                                        marginLeft: "-7px"
                                                    }}><b>My Account</b></NavLink></DropdownItem>
                                                    <SignOutButton/>
                                                </DropdownMenu>
                                            </Dropdown>
                                        </NavItem>
                                    )}
                                </AuthUserContext.Consumer>
                            </NavbarNav>
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
}

class NavigationNonAuth extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userData:null,
        };
    }

    render() {
        return (
            <div>
                <Navbar color="special-color-dark" dark expand="md">
                    <Container>
                        <NavbarBrand>
                            <strong className="white-text"><NavLink to={ROUTES.LANDING} className="white-text">WSO2 Team EI Dashboard</NavLink></strong>
                        </NavbarBrand>
                        <Collapse id="navbarCollapse3" isOpen={this.state.collapseID} navbar>
                            <NavbarNav left>
                            </NavbarNav>
                            <NavbarNav right>
                                <NavItem style={{marginTop: "7px"}}>
                                    <NavLink to={ROUTES.SIGN_IN}>Sign In</NavLink>
                                </NavItem>
                            </NavbarNav>
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
}

const condition = authUser => !!authUser;
const NavigationAuth2 = compose(
  withRouter,
  withFirebase,
  withAuthorization(condition),
)(NavigationAuth);

export default Navigation;