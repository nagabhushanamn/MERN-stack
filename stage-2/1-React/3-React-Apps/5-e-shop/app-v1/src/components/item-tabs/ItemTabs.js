

import React, { useState } from 'react';
import classnames from 'classnames';
import Review from '../review/Review';
import ReviewForm from '../review-form/ReviewForm_v2';

const ItemTabs = ({ value: item }) => {

    const [tab, setTab] = useState(1)

    const [reviews, setReviews] = useState([
        { author: 'who1', stars: 5, body: 'sample-review-1' },
        { author: 'who2', stars: 3, body: 'sample-review-2' }
    ])

    const addNewReview = review => {
        setReviews(reviews.concat(review))
    }

    const renderReviews = (reviews) => {
        return reviews.map((review, idx) => {
            return (<Review value={review} key={idx} />)
        })
    }

    const renderTabPanel = (tab, item) => {
        switch (tab) {
            case 1: return (
                <div>{item.description}</div>
            )
            case 2: return (
                <div>Not Yet</div>
            )
            case 3: return (
                <div>
                    <div className="row">
                        <div className="col-12">
                            <br/>
                            {renderReviews(item.reviews)}
                            <ReviewForm onNewReview={review => addNewReview(review)} />
                        </div>
                    </div>

                </div>
            )
            default: return null
        }
    }


    item.reviews = reviews

    const changeTab = (e, tabIdx) => {
        e.preventDefault()
        setTab(tabIdx)
    }

    return (
        <div>
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <a className={`nav-link ${tab === 1 ? 'active' : ''}`} onClick={e => changeTab(e, 1)} href="/">Description</a>
                </li>
                <li className="nav-item">
                    <a className={classnames('nav-link', { active: tab === 2 })} onClick={e => changeTab(e, 2)} href="/">Specification</a>
                </li>
                <li className="nav-item">
                    <a className={classnames('nav-link', { active: tab === 3 })} onClick={e => changeTab(e, 3)} href="/">Reviews</a>
                </li>
            </ul>
            {renderTabPanel(tab, item)}
        </div>
    );
};

export default ItemTabs;