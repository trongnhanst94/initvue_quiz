import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';


class App extends React.Component {

  render() {
    return (
      <form className="form-signin">
        <h2 className="form-signin-heading"> Please sign in </h2>
        <label for="inputEmail" className="sr-only"> Email address </label>
        <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus />
        <label for="inputPassword" className="sr-only"> Password</label>
        <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
        <button className="btn btn-lg btn-primary btn-block" type="button"> Sign in </button>
      </form>
    )
  }
}

const mapStateToProps = createStructuredSelector({});

// const mapDispatchToProps = (dispatch) => ({
//   dispatch,
// });

export default connect(mapStateToProps, null)(App);
