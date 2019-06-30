import React, { Component } from "react"; 
import './termsofuse.css';

class TermsOfService extends Component {

  render() {
    return (
      <div className="wrapper">
      <div id="complaintform">
      
             <div><h2>Terms of Use</h2></div>
             <div className="postcontainer" id="termscontainer">
             <div id="termsofuse">
                 <h1 id="termsh1">What Student Reps Can Do</h1>
                    <p>
                        <p id="pterms">Student Reps Can deal with the following</p>
                        <ul>Issues with facilities in your learning areas</ul>
                        <ul>General issues you have with your learning environment</ul>
                        <ul>Issues you have with areas outside your learning environment e.g. Cafe, Grounds</ul>
                        <ul>Issues with workload</ul>
                    </p>
                    <h1 id="termsh1">What Student Reps Can't Do</h1>
                    <p>
                        <p id="pterms">Student Reps can't deal with the following</p>
                        <ul>Personal Greviences with other students</ul>
                        <ul>Personal Greviences with tutors</ul>
                        <ul>Serious issues such as theft etc</ul>
                    </p>
             </div>
      </div>
      </div>
    </div>
    );
  }
}

export default TermsOfService;