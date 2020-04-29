import React, { Component } from 'react';
import Item from './Item'

class CourseList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            courses: [
                {
                    id: 1,
                    title: 'javascript',
                    price: 100,
                    overview: 'best language for full-stack',
                    isAvailable: true,
                    log: 'images/javascript.png'
                },
                {
                    id: 2,
                    title: 'react.js',
                    price: 200,
                    overview: 'best library to make UI components',
                    isAvailable: true,
                    log: 'images/react.png'
                },
            ]
        }
    }


    renderCourses() {
        let { courses } = this.state
        let { cart } = this.props
        let elements = courses.map(course => {
            let idx = cart.findIndex(line => line.id === course.id)
            let isOwned = idx === -1 ? false : true
            return (
                <div key={course.id}>
                    <Item value={course} isOwned={isOwned} onBuy={e => { this.props.onBuy(e) }} />
                </div >
            )
        })
        return elements
    }

    render() {
        return (
            <div className="list-group">
                {this.renderCourses()}
            </div>
        );
    }
}

export default CourseList;