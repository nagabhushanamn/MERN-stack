import React, { useState, useEffect } from 'react';

import zomato from '../api/zomato'

const Reviews = (props) => {

    const [reviews, setReviews] = useState([])

    let { match, history } = props
    let { params } = match
    let { id: res_id } = params

    const getReviews = async () => {
        try {
            let response = await zomato.get("/reviews", {
                params: {
                    res_id: res_id,
                }
            })
            setReviews(response.data.user_reviews)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        getReviews()
    }, [res_id])

    const renderReviews = () => {
        return reviews.map((item, idx) => {
            return (
                <div key={idx} className="alert alert-info">
                    <span>{item.review.review_time_friendly}</span>
                    <hr />
                    <span className="badge badge-dark">{item.review.rating}</span>
                    &mdash; <span>{item.review.user.name}</span>
                    <hr />
                    <div>{item.review.review_text}</div>
                </div>
            )
        })
    }

    return (
        <div className="card">
            <div className="card-header">Reviews : <button className="btn btn-primary" onClick={e => history.goBack()}>go back</button></div>
            <div className="card-header">
                {renderReviews()}
            </div>
        </div>
    );
};

export default Reviews;