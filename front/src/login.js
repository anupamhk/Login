import React, { Component } from 'react';
import './App.css';

class LoginPage extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
    };
  }

  render() {
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          
          <label>User Name</label>
          <input type="text" data-test="username" value={this.state.username}  />

          <label>Password</label>
          <input type="password" data-test="password" value={this.state.password} />

          <input type="submit" value="Log In" data-test="submit" />
        </form>
      </div>
    );
  }
}

export default LoginPage;
