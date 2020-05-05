

import React, { useState } from 'react';
import classnames from 'classnames';

const renderTabPanel = (tab, item) => {
    switch (tab) {
        case 1: return (
            <div>{item.description}</div>
        )
        case 2: return (
            <div>Not Yet</div>
        )
        case 3: return (
            <div>None Yet</div>
        )
        default: return null
    }
}

const ItemTabs = ({ value: item }) => {
    
    const [tab, setTab] = useState(1)

    const changeTab = (e, tabIdx) => {
        e.preventDefault()
        setTab(tabIdx)
    }

    return (
        <div>
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <a className={`nav-link ${tab===1?'active':''}`} onClick={e => changeTab(e, 1)} href="/">Description</a>
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