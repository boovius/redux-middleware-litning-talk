import React, { Component } from 'react';
import { connect } from 'react-redux';
import { auth, facebookAuthProvider } from '../../config/firebase';
import { receiveUser } from '../../actions';

export class Login extends Component {
  constructor() {
    super();
    this.signin = this.signin.bind(this);
  }

  signin(e) {
    e.preventDefault();

    auth.signInWithPopup(facebookAuthProvider).then((authResult) => {
      this.props.addAuth(authResult.user);
    }).catch((error) => {
      console.log('auth error', error);
    });
  }

  render() {
    return (
      <a href='#' onClick={this.signin}>login with facebook</a>
    )
  }
}

function mapStateToProps() {
  return {}
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    addAuth: (user) => { dispatch(receiveUser(user)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
