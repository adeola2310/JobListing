import React, {Component} from 'react';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <img alt="header-background" src={require('../../images/bg-header-desktop.svg')} className="header-image"/>
            </div>
        );
    }
}

export default Header;
