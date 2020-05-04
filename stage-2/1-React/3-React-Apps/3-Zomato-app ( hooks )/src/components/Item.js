import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'


const Item = ({ value: item }) => {
    let { restaurant } = item;

    useEffect(() => {
        return function () {
            // console.log("Item :: willunmount()")
        }
    }, [])

    return (
        <div>
            <div className="list-group-item">
                <div className="row">
                    <div className="col-5">
                        <Link to={`/reviews/${restaurant.R.res_id}`}>
                            <img
                                alt="restaurant"
                                className="img-fluid"
                                src={restaurant.thumb ? restaurant.thumb : 'images/no image.png'} />
                        </Link>
                    </div>
                    <div className="col-7">
                        <h4>{restaurant.name} - <small> Rating : {restaurant.user_rating.aggregate_rating}</small></h4>
                        <h5>{restaurant.location.city}</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Item;