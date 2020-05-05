

import React from 'react';

import styles from './Review.module.css'

const renderStars = n => {
    let arr = []
    for (let i = 0; i < n; i++) {
        arr.push(
            <span key={i} className={styles.stars}>
                <i className="fa fa-star" ></i>
            </span>
        )
    }
    return arr
}

const Review = ({ value: review }) => {
    return (
        <div>
            <div className="alert alert-dark">
                <span>{review.author}</span> &mdash; {renderStars(review.stars)}
                <hr />
                <div>{review.body}</div>
            </div>
        </div>
    );
};

export default Review;