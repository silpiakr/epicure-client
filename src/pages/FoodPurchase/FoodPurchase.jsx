import React, { useContext, useState,  } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext/AuthContext";
import { toast } from "react-toastify";


const FoodPurchase = () => {
    const food = useLoaderData();
    const { name, price, _id } = food || {};
    const { user } = useContext(AuthContext); // Getting logged-in user details
    const navigate = useNavigate();
    const [quantity, setQuantity] = useState(1);

    const handlePurchase = async (e) => {
        e.preventDefault();

        const purchaseData = {
            foodName: name,
            price,
            quantity,
            buyerName: user?.displayName,
            buyerEmail: user?.email,
            buyingDate: Date.now(),
        };

        try {
            const response = await fetch(`http://localhost:5000/foods/${_id}/purchase`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(purchaseData),
            });

            if (!response.ok) {
                throw new Error("Failed to process purchase");
            }

            toast.success("Purchase successful!");
            navigate(`/purchases/${_id}`);
        } catch (error) {
            toast.error("Error processing purchase");
            console.error("Purchase error:", error);
        }
    };

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold mb-4">Purchase {name}</h1>
            <form onSubmit={handlePurchase} className="space-y-4">
                <div>
                    <label className="block font-semibold">Food Name:</label>
                    <input type="text" value={food.name} readOnly className="input input-bordered w-full" />
                </div>
                <div>
                    <label className="block font-semibold">Price:</label>
                    <input type="text" value={`$ ${price}`} readOnly className="input input-bordered w-full" />
                </div>
                <div>
                    <label className="block font-semibold">Quantity:</label>
                    <input 
                        type="number"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        className="input input-bordered w-full"
                        min="1"
                        required
                    />
                </div>
                <div>
                    <label className="block font-semibold">Buyer Name:</label>
                    <input type="text" value={user?.displayName} readOnly className="input input-bordered w-full" />
                </div>
                <div>
                    <label className="block font-semibold">Buyer Email:</label>
                    <input type="email" value={user?.email} readOnly className="input input-bordered w-full" />
                </div>
                <div>
                    <label className="block font-semibold">Date:</label>
                    <input type="email" value={Date} readOnly className="input input-bordered w-full" />
                </div>
                <button type="submit" className="btn btn-primary w-full">
                    Purchase
                </button>
            </form>
        </div>
    );
};

export default FoodPurchase;
