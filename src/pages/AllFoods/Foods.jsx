import React, { useEffect, useState } from 'react';
import FoodCard from './FoodCard';
import { useLoaderData } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Foods = () => {
    const loadedData = useLoaderData() || [];
    const [foods, setFoods] = useState(loadedData);
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const filteredFoods = foods.filter(food =>
        food.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div>
            <div className='bg-black py-10'>
                <h2 className="text-4xl text-warning font-bold text-center mb-2">Our Delicious Foods</h2>
                <p className='text-lg text-center text-white/80'>Taste the best dishes crafted with love</p>
                {/* Search Input */}
                <div className="flex justify-center mt-5">
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={handleSearchChange}
                        placeholder="Search by food name..."
                        className="input input-bordered w-80"
                    />
                </div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-5'>
                {
                    filteredFoods.length > 0 ? (
                        filteredFoods.map(food => (
                            <FoodCard key={food._id} food={food} setFoods={setFoods}></FoodCard>
                        ))
                    ) : (
                        <p className="text-center text-lg text-gray-500 col-span-full">No foods found</p>
                    )
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Foods;
