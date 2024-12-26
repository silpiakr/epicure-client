import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TopFoods = () => {
    const [foods, setFoods] = useState([]);
    const navigate = useNavigate();

    // Fetch food data
    useEffect(() => {
        // Replace with your actual API or data fetching logic
        fetch('/api/foods') // Example API endpoint
            .then((response) => response.json())
            .then((data) => {
                // Sort by purchase count and get top 6
                const sortedFoods = data.sort((a, b) => b.purchaseCount - a.purchaseCount).slice(0, 6);
                setFoods(sortedFoods);
            })
            .catch((error) => console.error('Error fetching food data:', error));
    }, []);

    return (
        <section className="top-foods-section py-10">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-8">Top Selling Foods</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {foods.map((food) => (
                        <div
                            key={food.id}
                            className="card bg-white shadow-lg rounded-lg overflow-hidden"
                        >
                            <img
                                src={food.image}
                                alt={food.name}
                                className="h-48 w-full object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-xl font-bold mb-2">{food.name}</h3>
                                <p className="text-gray-600 mb-4">{food.description}</p>
                                <div className="text-lg font-semibold mb-4">Price: ${food.price}</div>
                                <button
                                    onClick={() => navigate(`/food/${food.id}`)}
                                    className="btn btn-primary w-full"
                                >
                                    View Details
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-8">
                    <button
                        onClick={() => navigate('/all-foods')}
                        className="btn btn-warning px-6 py-2"
                    >
                        See All
                    </button>
                </div>
            </div>
        </section>
    );
};

export default TopFoods;


// [
//     {
//         "id": 1,
//         "name": "Grilled Chicken",
//         "description": "Delicious grilled chicken with special spices.",
//         "price": 15.99,
//         "purchaseCount": 120,
//         "image": "https://example.com/images/grilled-chicken.jpg"
//     },
//     {
//         "id": 2,
//         "name": "Pasta Alfredo",
//         "description": "Creamy Alfredo pasta topped with fresh herbs.",
//         "price": 12.99,
//         "purchaseCount": 90,
//         "image": "https://example.com/images/pasta-alfredo.jpg"
//     },
//     ...
// ]
