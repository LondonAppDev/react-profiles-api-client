import React, { Component } from 'react';


class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUsernameChange(e) {
    this.props.onUsernameChange(e.target.value);
  }

  handlePasswordChange(e) {
    this.props.onPasswordChange(e.target.value);
  }

  handleSubmit(e) {
    this.props.onSubmit(e);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} method="post">
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={this.props.usernameText}
            onChange={this.handleUsernameChange}
          /> <br />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={this.props.passwordText}
            onChange={this.handlePasswordChange}
          /><br />
          <input type="submit" value="Login" />
        </form>
      </div>
    )
  }
}


// const LoginForm = (props) => (
//   <div>
//     <form onSubmit={props.onSubmit} method="post">
//       <input
//         type="email"
//         name="email"
//         placeholder="Email Address"
//         onChange={props.onEmailChange}
//       /> <br />
//       <input
//         type="password"
//         name="password"
//         placeholder="Password"
//         onChange={props.onPasswordChange}
//       /><br />
//       <input type="submit" value="Login" />
//     </form>
//   </div>
// );

export default LoginForm;
