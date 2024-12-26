import React, { useEffect, useState } from 'react';
import FoodCard from './FoodCard';

const Foods = () => {
    const [foods, setFoods] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/foods')
            .then(res => res.json())
            .then(data => {
                setFoods(data);
            })
    }, []);

    return (
        <div>
            <div className='bg-black py-10'>
                <h2 className="text-4xl text-warning font-bold text-center mb-2">Our Delicious Foods</h2>
                <p className='text-lg text-center text-white/80'>Taste the best dishes crafted with love</p>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-5'>
                {
                    foods.map(food => <FoodCard key={food._id} food={food}></FoodCard>)
                }
            </div>
        </div>
    );
};

export default Foods;