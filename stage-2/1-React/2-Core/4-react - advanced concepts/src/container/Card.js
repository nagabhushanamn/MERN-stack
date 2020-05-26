import React, { Component } from 'react';

/**
 * 
 *  use of container components
 * 
 *  => to layout child components
 *  => to apply common style 
 *  => to hold common state for children
 * 
 *  imp-note : alwyas should generic to any type of children
 */

class Card extends Component {
    renderChildren() {
        let { children } = this.props
        return children.map((child,idx) => {
            let props=child.props
            return (
                <li {...props} key={idx} className="list-group-item">{child}</li>
            )
        })
    }
    render() {
        let { title } = this.props
        return (
            <div className="card">
                <div className="card-header">Card : {title}</div>
                <div className="card-body">
                    <ul>
                        {this.renderChildren()}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Card;