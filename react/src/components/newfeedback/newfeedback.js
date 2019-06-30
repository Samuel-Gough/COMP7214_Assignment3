import React, { Component } from "react"; 
import Dropdown from 'react-bootstrap/Dropdown';
import './newfeedbackstyle.css';

const options =[
    'General', 'Facilities', 'Course Work', 'Other'
]
const defaultOption = "Select Category"


class NewFeedback extends Component {
    constructor(props){
        super(props);
        this.state={Title: "",
        Category: "",
        Description: ""}
    }

    titleChange(event){
        this.setState({Title: event.target.value});
    }

    descriptionChange(event){
        this.setState({Description: event.target.value});
    }

    _onSelect(option){
        this.setState({Category: option})
    }

    onClick(){
        fetch('http://localhost:4000/api/viewfeedback',
         {method: 'POST', headers: {'Accept': 'application/json', "Content-type": "application/json"},
          body: JSON.stringify({
            "_id":"",
            "Title": this.state.Title,
            "Description": this.state.Description,
            "Type": "",
            "Upvotes": 0,
            "Downvotes": 0
          })
        })
    }

  render() {
    return (

        <div className="wrapper">
            <div id="complaintform">
                        <div id="newfeedback">
                            <form>
                            <div><h1 id="submith1">Submit Feedback</h1></div>                          
                            <input type="text" id="newfeedback" value={this.state.value} onChange={this.titleChange.bind(this)} placeholder="Feedback Title" />
                            <Dropdown id="dropdown" onSelect={this._onSelect.bind(this)} >
                            <Dropdown.Toggle variant="success" id="dropdown-custom" value={this.state.Category} placeholder="Select Category">
                               {defaultOption}
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item >General</Dropdown.Item>
                                <Dropdown.Item >Facilities</Dropdown.Item>
                                <Dropdown.Item >Course Work</Dropdown.Item>
                                <Dropdown.Item >Other</Dropdown.Item>
                            </Dropdown.Menu>
                            </Dropdown>
                            <input type="text" id="newfeedback" value={this.state.value} onChange={this.descriptionChange.bind(this)} placeholder="Feedback Description"/>
                            <div>
                                <input type="submit" value="Submit Feedback" onClick={this.onClick.bind(this)}/>
                            </div>
                            </form>
                        </div>
            </div>
        </div>
        )
    }
}

export default NewFeedback;