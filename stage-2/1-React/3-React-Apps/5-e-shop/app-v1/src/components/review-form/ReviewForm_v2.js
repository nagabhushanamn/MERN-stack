import React, { useState } from 'react';

var Filter = require('bad-words'), // 
    filter = new Filter();

// controlled form

const ReviewForm = ({ onNewReview }) => {

    const [isOpen, setOpen] = useState(false);
    const [review, setReview] = useState({ author: 'Nag', stars: 5, body: '' })

    const toggleForm = () => {
        setOpen(!isOpen);
    }

    const handleSubmit = e => {
        e.preventDefault()
        if (onNewReview) {
            review.body = filter.clean(review.body)
            onNewReview(review)
            setReview(() => {
                toggleForm()
                return { author: 'Nag', stars: 5, body: '' }
            })

        }

    }
    const renderSadEmoji = (n) => {
        if (n < 3) return <span role="img" aria-label="sad">😟</span>
    }
    const isValidForm = () => {
        if (review.author !== "" && review.body !== "")
            return true
        else return false
    }
    const renderForm = () => {
        if (!isOpen) {
            return (
                <button onClick={e => toggleForm()} className="btn btn-sm btn-dark">
                    <i className="fa fa-plus"></i>
                </button>)
        } else {
            return (
                <div className="card">
                    <div className="card-header">Review Form</div>
                    <div className="card-body">
                        <form onSubmit={e => handleSubmit(e)}>
                            <div className="form-group">
                                <label className="">Author</label>
                                <input value={review.author}
                                    onChange={e => setReview({ ...review, author: e.target.value })}
                                    type="text"
                                    className="form-control" />
                            </div>
                            <div className="form-group">
                                <label className="">stars</label>
                                <select value={review.stars}
                                    onChange={e => setReview({ ...review, stars: e.target.value })}
                                    className="form-control">
                                    {[1, 2, 3, 4, 5].map(n => <option key={n}>{n}</option>)}
                                </select>
                                {renderSadEmoji(review.stars)}
                            </div>
                            <div className="form-group">
                                <label className="">Body</label>
                                <textarea value={review.body}
                                    onChange={e => setReview({ ...review, body: e.target.value })}
                                    className="form-control"></textarea>
                            </div>
                            <button disabled={!isValidForm()} className="btn btn-dark btn-sm">submit</button>
                            &nbsp;
                            <button onClick={e => toggleForm()} type="button" className="btn btn-danger btn-sm">cancel</button>
                        </form>
                    </div>
                </div>
            )
        }
    }
    return (
        <div>
            {renderForm()}
        </div>
    );
};

export default ReviewForm;