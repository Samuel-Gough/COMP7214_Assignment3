import React, { Component } from "react"; 
import './feedback.css';

class Feedback extends Component {

    state = {
        data : []
    }

    getAllFeedback(){

    }

    componentWillMount() {
        //fetch request
        return fetch('http://localhost:4000/api/viewfeedback')
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
                                <h1 className="content">{x.title}</h1>
                            </div>
                            <div>
                                <p>{x.description}</p>
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

export default Feedback;