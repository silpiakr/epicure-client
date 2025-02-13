import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
// import { useAuth } from "../../hooks/useAuth"; // Ensure you have a hook to get logged-in user

const MyFoods = () => {
    const { user } = useAuth(); // Get logged-in user's email
    const [foods, setFoods] = useState([]);
    const [selectedFood, setSelectedFood] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:5000/my-foods?email=${user.email}`)
                .then((res) => res.json())
                .then((data) => setFoods(data));
        }
    }, [user]);

    const handleUpdateClick = (food) => {
        setSelectedFood(food);
    };

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">My Added Foods</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {foods.map((food) => (
                    <div key={food._id} className="border p-4 rounded shadow">
                        <img src={food.image} alt={food.name} className="w-full h-40 object-cover mb-2 rounded" />
                        <h3 className="text-xl font-bold">{food.name}</h3>
                        <p>Price: ${food.price}</p>
                        <p>Quantity: {food.quantity}</p>
                        <button onClick={() => handleUpdateClick(food)} className="btn btn-sm btn-warning mt-2">
                            Update
                        </button>
                    </div>
                ))}
            </div>

            {selectedFood && <UpdateFoodModal food={selectedFood} setSelectedFood={setSelectedFood} />}
        </div>
    );
};

export default MyFoods;
