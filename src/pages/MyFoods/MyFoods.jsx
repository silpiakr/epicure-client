import React, { useEffect, useState, useContext } from "react";
import AuthContext from "../../context/AuthContext/AuthContext";

import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const MyFoods = () => {
    const { user } = useContext(AuthContext);
    const [foods, setFoods] = useState([]);
    const [editingFood, setEditingFood] = useState(null);
    const [updatedData, setUpdatedData] = useState({ name: "", price: "", availableQuantity: "" });

    useEffect(() => {
        if (!user?.email) return;

        fetch(`http://localhost:5000/foods?sellerEmail=${user.email}`)
            .then((res) => res.json())
            .then((data) => setFoods(data))
            .catch((err) => console.error(err));
    }, [user]);


    const handleEditClick = (food) => {
        setEditingFood(food);
        setUpdatedData({
            name: food.name,
            price: food.price,
            availableQuantity: food.availableQuantity,
        });
    };



    const handleUpdateChange = (e) => {
        setUpdatedData({ ...updatedData, [e.target.name]: e.target.value });
    };

    const handleUpdateSubmit = () => {
        if (!editingFood) return;

        fetch(`http://localhost:5000/foods/${editingFood._id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedData),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.success) {
                    setFoods(foods.map(food =>
                        food._id === editingFood._id ? { ...food, ...updatedData } : food
                    ));
                    setEditingFood(null);
                    toast("Update SuccessFully!")
                }
            })
            .catch((err) => console.error("❌ Update failed:", err));
    };

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">My Food List</h2>

            {foods.length === 0 ? (
                <p>No foods added yet.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {foods.map((food) => (
                        <div key={food._id} className="border p-4 rounded-lg shadow">
                            <h3 className="text-lg font-semibold">{food.name}</h3>
                            <p>Price: ${food.price}</p>
                            <p>Available: {food.availableQuantity} pcs</p>
                            <button
                                className="btn btn-primary mt-2"
                                onClick={() => handleEditClick(food)}
                            >
                                Edit
                            </button>
                            <Link to={`/update/${food._id}`} className="btn btn-primary mt-2 ms-2">Update</Link>
                        </div>
                    ))}
                </div>
            )}

            {/* Update Modal */}
            {editingFood && (
                <div className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                        <h2 className="text-xl font-bold mb-4">Edit Food</h2>
                        <input
                            name="name"
                            value={updatedData.name}
                            onChange={handleUpdateChange}
                            className="border p-2 w-full my-2"
                        />
                        <input
                            name="price"
                            type="number"
                            value={updatedData.price}
                            onChange={handleUpdateChange}
                            className="border p-2 w-full my-2"
                        />
                        <input
                            name="availableQuantity"
                            type="number"
                            value={updatedData.availableQuantity}
                            onChange={handleUpdateChange}
                            className="border p-2 w-full my-2"
                        />
                        <button className="btn btn-primary mr-2" onClick={handleUpdateSubmit}>
                            Update
                        </button>
                        <button className="btn btn-secondary" onClick={() => setEditingFood(null)}>
                            Cancel
                        </button>
                    </div>
                </div>
            )}

        </div>
    );
};

export default MyFoods;

