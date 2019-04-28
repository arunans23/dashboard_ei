import React, { Component } from 'react';
import {MDBBtn, MDBIcon} from 'mdbreact';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';

class SignInGoogleBase extends Component {
  constructor(props) {
    super(props);

    this.state = { error: null };
  }

  onSubmit = event => {
    this.props.firebase
      .doSignInWithGoogle()
      .then(socialAuthUser => {
        // Create a user in your Firebase Realtime Database too
        return this.props.firebase
          .user(socialAuthUser.user.uid)
          .set({
            username: socialAuthUser.user.displayName,
            email: socialAuthUser.user.email,
            roles: [],
          });
      })
      .then(() => {
        this.setState({ error: null });
        this.props.history.push(ROUTES.LANDING);
      })
      .catch(error => {
         this.props.history.push(ROUTES.LANDING);
      });

    event.preventDefault();
  };

  render() {
    const { error } = this.state;

    return (
        <div>
          <MDBBtn
              type="submit"
              color="red darken-3"
              rounded
              className="z-depth-1a"
              onClick={this.onSubmit}
          >

              Sign in with your WSO2 Account
              <MDBIcon icon="google-plus" style={{marginLeft: "10px"}}
                       className="white-text"/>
          </MDBBtn>

        {error && <p>{error.message}</p>}
     </div>
    );
  }
}

const SignInGoogle = compose(
  withRouter,
  withFirebase,
)(SignInGoogleBase);

export default SignInGoogle;
