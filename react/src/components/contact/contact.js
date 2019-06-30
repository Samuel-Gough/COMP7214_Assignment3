import React, { Component } from "react"; 
import './contact.css'

class Contact extends Component {

    state = {
        data : []
    }

    getAllFeedback(){

    }

    componentWillMount() {
        //fetch request
        return fetch('http://localhost:4000/api/contact')
        .then (resp => resp.json())
        .then(data => this.setState({data: data}))
    }

  render() {
    return (
      <div className="wrapper">
      <div id="complaintform">
              <form>
                    <ul>{this.state.data.map(x =>
                        <div className="complaintcontent">

                            <div className="postcontainer">
                            <div>
                                <h1 id="contenth1" className="content">{x.name}</h1>
                            </div>
                            <div id="contact">
                                <p>School: {x.school}</p>
                                <p>Paper: {x.paper}</p>
                                <p>Email: {x.email}</p>
                            </div>
                            </div>
  
                           
                        </div>
                        )}
                    </ul> 
                    
              </form>
      </div>
    </div>
    );
  }
}

export default Contact;