import React, {Component} from 'react';
import './Services.css';

class Services extends Component{
    render(){
        return(
            <div className="services">
                    <h3>{this.props.serviceTitle}</h3>
                    <h2>{this.props.serviceSubTitle}</h2>
                    <div className="row">
                        <div>
                            <span>
                                <i class="fas fa-mobile-alt"></i>
                            </span>
                            <h4>Responsive</h4>
                            <p>Looks great on any screen size!</p>    
                        </div>
                        <div>
                            <span>
                                <i class="fas fa-pen"></i>
                            </span>
                            <h4>Redesigned</h4>
                            <p>Freshly redesigned for bootstrap 4.</p>  
                        </div>
                        <div>
                            <span>
                                <i class="far fa-thumbs-up"></i>
                            </span>
                            <h4>Favorited</h4>
                            <p>Millions of users love bootstrap!</p>  
                        </div>
                        <div>
                            <span>
                                <i class="fas fa-question"></i>
                            </span>
                            <h4>Question</h4>
                            <p>I mustache you a question...</p>  
                        </div>
                    </div>
            </div>
        );
    }
}

export default Services;