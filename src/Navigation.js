import React, { Component } from 'react';
import { render } from '@testing-library/react';
import './Navigation.css'

// This is our component, try changing it to function
class Navigation extends Component{
    render(){
        const sections = ['Home', 'Projects', 'Resume'];
        //.map loops through each element of the array and returns something
        const navLinks = sections.map((section) => {
            //What we are doing here is returning a HTML element for each item in the list above
            return(
            <li><a href={'#' + section }>{section}</a></li>
            )
        }); 
        return (
            //All elements in a react components MUST be wrapped in a single parent element
            <nav> 
                <h1 className="Title"> 
                    {this.props.logoTitle} {/*This is how we specify which properties we want on this div*/}
                </h1>
                <ul>
                    {navLinks}
                </ul>
            </nav>
        );
    }
}

// Setting the default export of the file, because you can have multiple components in a file
export default Navigation;