

import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import Review from '../review/Review';
import ReviewForm from '../review-form/ReviewForm_v2';

import { useDispatch, useSelector } from 'react-redux'
import { loadReviews, addNewReview } from '../../actions/reviews'

const ItemTabs = ({ value: item, history }) => {

    const [tab, setTab] = useState(1)
    const reviews = useSelector((state) => state.reviews[item.id] || [])
    const dispatch = useDispatch()

    useEffect(() => {
        if (tab === 3) {
            dispatch(loadReviews(item.id))
        }
    }, [tab, item])


    const handleNewReview = review => {
        dispatch(addNewReview(item.id, review))
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
                            {renderReviews(item.reviews)}
                            <ReviewForm history={history} onNewReview={review => handleNewReview(review)} />
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