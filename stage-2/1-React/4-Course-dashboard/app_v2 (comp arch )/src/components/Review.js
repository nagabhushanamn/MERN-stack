import React, { Component } from 'react';


class Review extends Component {
    renderStars(n) {
        let starElemenets = []
        for (let i = 0; i < n; i++) {
            starElemenets.push(<i style={{color: '#FFDF00'}} key={i} className="fa fa-star"></i>)
        }
        return starElemenets
    }
    render() {
        let { value: review } = this.props
        return (
            <div>
                <div className="alert alert-info">
                    <span>{this.renderStars(review.stars)}</span> &mdash; <span>{review.author}</span>
                    <hr />
                    <div>{review.body}</div>
                </div>
            </div>
        );
    }
}

export default Review;