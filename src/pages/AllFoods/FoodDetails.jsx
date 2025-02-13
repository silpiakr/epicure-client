import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Loader from '../Loader/Loader';

const FoodDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [food, setFood] = useState(null);
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        fetch(`http://localhost:5000/foods/${id}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Failed to fetch food details');
                }
                return response.json();
            })
            .then((data) => {
                setFood(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching food details:", error);
                setLoading(false);
            });
    }, [id]);

    // Handle food purchase
    const handlePurchase = () => {
        fetch(`http://localhost:5000/foods/${id}/purchase`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Failed to process purchase');
                }
                return response.json();
            })
            .then(() => {
                navigate(`/purchase/${id}`); 
            })
            .catch((error) => console.error("Error purchasing food:", error));
    };

    // Display loader while fetching data
    if (loading) {
        return <Loader />;
    }

    // Display message if food is not found
    if (!food) {
        return <p className="text-center text-lg text-red-500">Food not found.</p>;
    }

    // Render food details
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                {/* Food Image */}
                <img
                    src={food.image}
                    alt={food.name}
                    className="max-w-sm rounded-lg shadow-2xl"
                />

                {/* Food Information */}
                <div className="ml-6">
                    <h1 className="text-3xl font-bold mb-4">{food.name}</h1>
                    <p className="font-semibold">
                        <span className="font-semibold">Category:</span> {food.category}
                    </p>
                    <p className=" font-semibold">
                        <span className="font-semibold">Origin:</span> {food.origin}
                    </p>
                    <p>
                        <span className="font-semibold">Price:</span> ${food.price.toFixed(2)}
                    </p>
                    <p>
                        <span className="font-semibold">Description:</span> {food.description}
                    </p>
                    {/* Purchase Button */}
                    <button onClick={handlePurchase}  className="btn btn-warning mt-5">
                        Purchase
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FoodDetails;
