

/**
 * 
 * 
 * author : Rohit
 * 
 */

import React from 'react'

import PropTypes from 'prop-types';


class Greeting extends React.Component {
    constructor(props) {
        super(props)
        console.log("Greeting :: constructor()")
    }
    render() {
        const { message } = this.props
        console.log("Greeting :: render()")
        return (
            <div className="alert alert-danger">
                {message}
            </div>
        )
    }
}

Greeting.propTypes = {
    message: PropTypes.string.isRequired
}



export default Greeting