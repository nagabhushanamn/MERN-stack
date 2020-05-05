import React, { useState, useRef } from 'react';

// un-controlled form

const ReviewForm = ({ onNewReview }) => {

    const [isOpen, setOpen] = useState(false);

    const authorField = useRef(null)
    const starsField = useRef(null)
    const bodyField = useRef(null)

    const toggleForm = () => {
        setOpen(!isOpen);
    }

    const handleSubmit = e => {
        e.preventDefault()
        let review = {
            author: authorField.current.value,
            stars: starsField.current.value,
            body: bodyField.current.value
        }
        if (onNewReview) {
            onNewReview(review)
            toggleForm()
        }
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
                                <input ref={authorField} type="text" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label className="">stars</label>
                                <select ref={starsField} className="form-control">
                                    {[1, 2, 3, 4, 5].map(n => <option key={n}>{n}</option>)}
                                </select>
                            </div>
                            <div className="form-group">
                                <label className="">Body</label>
                                <textarea ref={bodyField} className="form-control"></textarea>
                            </div>
                            <button className="btn btn-dark btn-sm">submit</button>
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