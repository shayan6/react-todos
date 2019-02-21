import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() { 
        return ( 
            <header style={headerStyle}>
                <h1> React Todo </h1>
                <Link to="/" style={linkStyle} > Home </Link> | <Link to="/about" style={linkStyle} > About </Link>
            </header>
         );
    }
}
 
const headerStyle = {
    textAlign: 'center',
    backgroundColor: '#333',
    color: '#fff',
    padding: '1%'
}

const linkStyle = {
    color: "#fff",
    fontWeight: 'bolder'
}

export default Header;