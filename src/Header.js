import React from 'react'; //importing react
import Background from './img/bg-masthead.jpg';
import './Header.css'


//Setting up the css here, injected in line below
const myStyles = {
    backgroundImage: `url(${Background})`, //Treating the url as a string, but the 'Background' is a variable
    height: '50vh',
    backgroundSize: 'cover'
};

class Header extends React.Component{
    render(){
        return (
            <div>
                <header style={myStyles}> {/*This is the line below*/}
                    <h1>{this.props.title}</h1>
                    <a className="btn" href="#button">{this.props.button1}</a>
                    <a className="btn" href="#button">{this.props.button2}</a>
                </header>                    
            </div>
        )
    }
};

export default Header;