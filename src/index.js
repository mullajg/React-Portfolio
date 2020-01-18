import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Navigation from './Navigation';
import Header from './Header';
import Services from './Services';

class App extends Component{
    render(){
        return(
            <div>
                <Navigation logoTitle="James Mullan Portfolio"/>
                <Header title="Welcome" button1="My Resume" button2="My Projects"/> 
                <Services serviceTitle="Services" serviceSubTitle="What We Offer"/>
            </div>
        );
    }
}

//Each component can get properties in the below line, logoTitle="React Portfolio" is one
ReactDOM.render(<App/>, document.getElementById('root'));

// This index.js will be in every react app
// It grabs every file/component and sends it to index.html with the above line
serviceWorker.register();
