import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import NewFeedback from './components/newfeedback/newfeedback';
import Feedback from './components/viewfeedback/viewfeedback';
import * as serviceWorker from './serviceWorker';
import Contact from './components/contact/contact';
import TermsOfService from './components/termsofuse/termsofuse';
import Login from './components/login/login'



const routing = (
    <Router>
        <div>
            <div id="navbar">
            <Link id="navlink" to="/">Feedback</Link>
            <Link id="navlink" to="/newfeedback">New Feedback</Link>
            <Link id="navlink" to="/contact">Contacts</Link>
            <Link id="navlink" to="/termsofuse">About Student Reps</Link>
            </div> 
            <Route exact path="/" component={Feedback} />
            <Route path="/newfeedback" component={NewFeedback}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/termsofuse" component={TermsOfService}/>
            
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
