import React from 'react';
import { Link } from 'react-router-dom';

const FoodCard = ({ food, foods, setFoods }) => {
    const { _id, image, name, price } = food;

    
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure className='h-44'>
                <img
                    src={image}
                    className='w-full object-cover'
                    alt="image" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Price: $ {price}</p>
                <div className="card-actions justify-end">
                    <Link to={`/foodDetails/${_id}`}>
                        <button className="btn btn-warning">See Food Details</button>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default FoodCard;