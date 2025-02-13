import React, { useState } from "react";

const UpdateFood = ({ food, setSelectedFood }) => {
    const [updatedFood, setUpdatedFood] = useState(food);

    const handleChange = (e) => {
        setUpdatedFood({ ...updatedFood, [e.target.name]: e.target.value });
    };

    const handleUpdate = () => {
        fetch(`http://localhost:5000/foods/${food._id}/update`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedFood),
        })
            .then((res) => res.json())
            .then(() => {
                alert("Food updated successfully!");
                setSelectedFood(null);
            })
            .catch((error) => console.error("Error updating food:", error));
    };

    return (
        <div className="modal">
            <div className="modal-box">
                <h3 className="font-bold text-lg">Update Food</h3>
                <input type="text" name="name" value={updatedFood.name} onChange={handleChange} className="input input-bordered w-full my-2" />
                <input type="number" name="price" value={updatedFood.price} onChange={handleChange} className="input input-bordered w-full my-2" />
                <input type="number" name="quantity" value={updatedFood.quantity} onChange={handleChange} className="input input-bordered w-full my-2" />
                <textarea name="description" value={updatedFood.description} onChange={handleChange} className="textarea textarea-bordered w-full my-2"></textarea>
                <div className="modal-action">
                    <button onClick={handleUpdate} className="btn btn-success">Update</button>
                    <button onClick={() => setSelectedFood(null)} className="btn">Close</button>
                </div>
            </div>
        </div>
    );
};

export default UpdateFood;
