import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        let { title } = this.props
        return (
            <div>
                <nav className="navbar navbar-light bg-info">
                    <span className="navbar-brand mb-0 h1">{title}</span>
                </nav>
            </div>
        );
    }
}
Navbar.defaultProps = {
    title: 'App'
}

export default Navbar;