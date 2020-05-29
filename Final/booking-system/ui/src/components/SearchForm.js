import React, { useState } from 'react';
import { DatePicker } from 'antd'

import * as busApi from '../api/bus'

const SearchForm = () => {
    const [travelPlan, setTravelPlan] = useState({})
    const handleSubmitEvent = e => {
        e.preventDefault()
        busApi.doSearch(travelPlan)
            .then(response => response.data)
            .then(serchResult => {
                console.log(serchResult)
            })
    }
    const handleChangeEvent = (e, field) => {
        const fieldValue = e.target.value
        setTravelPlan({ ...travelPlan, [field]: fieldValue })
    }
    return (
        <div>
            <form className="form-inline" onSubmit={e => handleSubmitEvent(e)}>
                <div className="form-group">
                    <label className="sr-only">From</label>
                    <datalist id="cities">
                        <option>BENGALORE</option>
                        <option>CHENNAI</option>
                        <option>KOLKTA</option>
                    </datalist>
                    <input type="text" 
                           list="cities"
                           onChange={e => handleChangeEvent(e, 'from')} 
                           className="form-control" placeholder="From" />
                </div>
                <div className="form-group">
                    <label className="sr-only">To</label>
                    <input type="text" 
                           list="cities" 
                           onChange={e => handleChangeEvent(e, 'to')} 
                           className="form-control" placeholder="To" />
                </div>
                <div className="form-group">
                    <label className="sr-only">Travel Date</label>
                </div>
                <button className="btn btn-primary">search</button>
            </form>
        </div>
    );
};

export default SearchForm;