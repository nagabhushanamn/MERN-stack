import React, { Component } from 'react';
import Review from './Review'

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tab: 1,
            reviews: [
                { stars: 5, author: 'who1@mail.com', body: 'sample review-1' },
                { stars: 3, author: 'who2@mail.com', body: 'sample review-2' }
            ]
        }
    }
    changeTab(tabIndex) {
        this.setState({ tab: tabIndex })
    }
    renderLearnButton(item) {
        let { isAvailable } = item
        if (isAvailable) {
            return (<button className="btn btn-sm btn-dark">Learn</button>)
        }
        else {
            return null
        }
    }
    renderReviews() {
        let { reviews } = this.state
        return reviews.map((review, idx) => {
            return (
                <Review value={review} key={idx} />
            )
        })
    }
    renderTabPanel(item) {
        let { tab } = this.state
        switch (tab) {
            case 1: return (<div>{item.overview}</div>)
            case 2: return (<div>{"Not Yet"}</div>)
            case 3: return (<div>{this.renderReviews()}</div>)
            default: return null
        }
    }
    render() {
        let { value: item } = this.props
        let { tab } = this.state
        return (
            <div>
                <div className="list-group-item">
                    <div className="row">
                        <div className="col-3">
                            <img className="img-fluid" src={item.log} alt="course logo" />
                        </div>
                        <div className="col-9">
                            <h5>{item.title}</h5>
                            <h6>&#8377;{item.price}</h6>
                            {this.renderLearnButton(item)}
                            <ul className="nav nav-tabs">
                                <li className="nav-item">
                                    <a onClick={e => this.changeTab(1)} className={tab === 1 ? 'nav-link active' : 'nav-link'} href="#">Overview</a>
                                </li>
                                <li className="nav-item">
                                    <a onClick={e => this.changeTab(2)} className={tab === 2 ? 'nav-link active' : 'nav-link'} href="#">Syllabus</a>
                                </li>
                                <li className="nav-item">
                                    <a onClick={e => this.changeTab(3)} className={tab === 3 ? 'nav-link active' : 'nav-link'} href="#">Reviews</a>
                                </li>
                            </ul>
                            {this.renderTabPanel(item)}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Item;