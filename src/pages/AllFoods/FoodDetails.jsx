import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Loader from "../Loader/Loader";

const FoodDetails = () => {
    const food = useLoaderData();
    const { _id, image, name, category, origin, price, description, purchaseCount } = food || {};

    if (!food) {
        return <Loader />;
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <img src={image} alt={name} className="max-w-sm rounded-lg shadow-2xl" />

                <div className="ml-6">
                    <h1 className="text-3xl font-bold mb-4">{name}</h1>
                    <p className="font-semibold">Category: {category}</p>
                    <p className="font-semibold">Origin: {origin}</p>
                    <p>Price: ${price}</p>
                    <p>Description: {description}</p>
                    <p className="font-semibold">Purchased: {purchaseCount || 0} times</p>

                    {/* Purchase Button */}
                    <Link to={`/purchase/${_id}`} className="btn btn-warning mt-5">Purchase</Link>
                </div>
            </div>
        </div>
    );
};

export default FoodDetails;

