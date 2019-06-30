import React, { Component } from "react";



class Login extends Component {
  render() {
    const { params } = this.props.match
    return (
      <div>
      <h1>Sign In = {params.id}</h1>
]]
      </div>

/* <div className="wrapper">
      <div id="formContent">
      
        {/* <form> */
          
          /* <input type="text" id="login" name="login" placeholder="Student ID" />
          <input type="text" id="password" name="login" placeholder="Password"/>
          <input type="submit" value="Log In" onClick={this.props.onClick}/> */
        /* </form> */
      // </div>
    // </div> */}
    );
  }
}

export default Login;