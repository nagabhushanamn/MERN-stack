import React,{useState} from 'react';
import { DatePicker } from 'antd'

const SearchForm = () => {
    const [travelPlan,setTravelPlan]=useState({})
    const handleSubmitEvent=e=>{
        let searchUrl='search?q=BLR-CHN-29-06-2020'
    }
    return (
        <div>
            <form className="form-inline">
                <div className="form-group">
                    <label className="sr-only">From</label>
                    <input type="text" className="form-control" placeholder="From" />
                </div>
                <div className="form-group">
                    <label className="sr-only">To</label>
                    <input type="password" className="form-control" placeholder="To" />
                </div>
                <div className="form-group">
                    <label className="sr-only">Travel Date</label>
                    <DatePicker className="form-control"/>
                </div>
            </form>
        </div>
    );
};

export default SearchForm;