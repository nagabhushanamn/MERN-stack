import React, { Component } from 'react';
// import logo from '../logo.svg'

class Card extends Component {

    constructor(props) {
        super(props);
        console.log("Card :: constructor");
    }

    render() {
        console.log("Card :: render");
        let { title } = this.props
        let time = new Date().toLocaleTimeString('en-US', { timeZone: 'Asia/Kolkata' })
        return (
            <div className="card" style={{ "width": "18rem" }}>
                <div className="card-header">{time}</div>
                {/* <img src={logo} className="card-img-top" alt="..." /> */}
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                </div>
            </div>
        );
    }

    // 
    componentDidMount() {
        console.log("Card :: componentDidMount");
        this.interval = setInterval(() => {
            this.forceUpdate()
        }, 1000)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("Card :: componentDidUpdate");
        // console.log(this.props)
        // console.log(prevProps)
    }
    
    componentWillUnmount() {
        clearInterval(this.interval)
        console.log("Card :: componentWillUnmount");
    }

}

export default Card;