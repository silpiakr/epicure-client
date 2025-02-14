import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";

const AddFood = ({ user }) => {
    
    const [foodData, setFoodData] = useState({
        name: "",
        image: "",
        category: "",
        quantity: "",
        price: "",
        origin: "",
        description: "",
    });

    const navigate = useNavigate();

    // Handle input change
    const handleChange = (e) => {
        setFoodData({ ...foodData, [e.target.name]: e.target.value });
    };

    // Handle form submission
    // const handleAddFood = async (e) => {
    //     e.preventDefault();
        
    //     const foodItem = {
    //         ...foodData,
    //         quantity: parseInt(foodData.quantity),
    //         price: parseFloat(foodData.price),
    //         addedBy: { 
    //             name: user?.displayName || "Anonymous", 
    //             email: user?.email || "No email" 
    //         },
    //     };

    //     fetch('http://localhost:5000/foods', {
    //         method: 'POST',
    //         headers: {
    //             'content-type' : 'application/json'
    //         },
    //         body: JSON.stringify(foodItem)
    //     })
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data);
    //         if(data.insertedId){
    //             Swal.fire({
    //                 icon: "success",
    //                 title: "Success!",
    //                 text: "Coffee Added Successfully!"
    //               });
    //         }
    //     })


     
    // };

    const handleAddFood = async (e) => {
        e.preventDefault();
    
        if (!user) {
            Swal.fire({
                icon: "error",
                title: "Error!",
                text: "You must be logged in to add food.",
            });
            return;
        }
    
        const foodItem = {
            ...foodData,
            quantity: parseInt(foodData.quantity),
            price: parseFloat(foodData.price),
            addedBy: { name: user.displayName || "Anonymous", email: user.email || "No email" },
        };
    
        fetch('http://localhost:5000/foods', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(foodItem),
        })
        .then(res => res.json())
        .then(data => {
            if (data.insertedId) {
                Swal.fire({
                    icon: "success",
                    title: "Success!",
                    text: "Food added successfully!",
                });
            }
        });
    };
    

    return (
        <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg mt-10">
            <h2 className="text-2xl font-bold text-center mb-6">Add New Food</h2>
            <form onSubmit={handleAddFood} className="grid grid-cols-1 gap-4">
                
                <input type="text" name="name" placeholder="Food Name" className="input input-bordered" onChange={handleChange} required />
                <input type="text" name="image" placeholder="Food Image URL" className="input input-bordered" onChange={handleChange} required />
                <input type="text" name="category" placeholder="Category (e.g. Fast Food, Dessert)" className="input input-bordered" onChange={handleChange} required />
                <input type="number" name="quantity" placeholder="Quantity" className="input input-bordered" onChange={handleChange} required />
                <input type="number" step="0.01" name="price" placeholder="Price ($)" className="input input-bordered" onChange={handleChange} required />
                <input type="text" name="origin" placeholder="Country of Origin" className="input input-bordered" onChange={handleChange} required />
                <textarea name="description" placeholder="Short description (ingredients, recipe)" className="textarea textarea-bordered" onChange={handleChange} required></textarea>

                {/* Submit Button */}
                <button type="submit" className="btn btn-primary w-full">Add Item</button>
            </form>
        </div>
    );
};

export default AddFood;
