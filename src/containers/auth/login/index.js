import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import produce from 'immer';

import { makeSelectLoading, makeSelectError } from './redux/selectors';
import { loginRequest } from './redux/actions';

const initialState = {
  infoUser: {
    a: {
      b: {
        c: 1
      }
    }
  }
};

const initAction = {
  payload: {
    infoUser: {
      a: {
        b: {
          c: 2
        }
      }
    }
  }
};

class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: 'admin',
      pass: 'admin'
    };
  }

  test = produce((draft = initialState, action = initAction) => {
    const { payload } = action;
    console.log("TCL: LoginScreen -> test -> draft", draft)
    console.log("TCL: LoginScreen -> test -> payload", payload)
    let a = { ...draft, infoUser: payload }
    console.log("TCL: LoginScreen -> test -> a", a)
  });

  render() {
    const { user, pass } = this.state;
    const { loginRequestHandler } = this.props;
    return (
      <form className="form-signin">
        <h2 className="form-signin-heading"> Please sign in </h2>
        <label htmlFor="inputEmail" className="sr-only"> Email address </label>
        <input type="email" id="inputEmail"
          onChange={(evt => this.setState({ user: evt.currentTarget.value }))}
          className="form-control" placeholder="Email address"
          value={user} required autoFocus />
        <label htmlFor="inputPassword" className="sr-only"> Password</label>
        <input type="password" id="inputPassword"
          onChange={(evt => this.setState({ pass: evt.currentTarget.value }))}
          className="form-control" placeholder="Password"
          value={pass} required />
        <button onClick={() => loginRequestHandler({ user, pass })} 
        className="btn btn-lg btn-primary btn-block" type="button"> Sign in </button>
      </form>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  isLoading: makeSelectLoading(),
  isError: makeSelectError()
});

const mapDispatchToProps = dispatch => ({
  loginRequestHandler: ({ user, pass }) => dispatch(loginRequest({ user, pass })),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginScreen);
