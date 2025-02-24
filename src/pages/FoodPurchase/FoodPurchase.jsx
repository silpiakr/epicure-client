import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import AuthContext from "../../context/AuthContext/AuthContext";
import { toast } from "react-toastify";

const FoodPurchase = () => {
    const { user } = useContext(AuthContext);
    const { id } = useParams(); 
    const [food, setFood] = useState(null);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        fetch(`https://epicure-server.vercel.app/foods/${id}`)
            .then(res => res.json())
            .then(data => setFood(data))
            .catch(err => console.error(err));
    }, [id]);

    const handleQuantityChange = (e) => {
        let value = parseInt(e.target.value);
        if (isNaN(value) || value < 1) value = 1;
        if (value > food.availableQuantity) value = food.availableQuantity;
        setQuantity(value);
    };

  
    const handlePurchase = () => {
        if (!food || quantity > food.availableQuantity) return;
    
        const purchaseData = {
            foodId: food._id || id,
            foodName: food.name,
            price: parseFloat(food.price), 
            quantity: parseInt(quantity), 
            buyerEmail: user?.email,
            date: new Date().toISOString(),
        };
    
         console.log("Sending purchase data:", purchaseData); 
    
    
        fetch("https://epicure-server.vercel.app/purchase", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(purchaseData),
        })
            .then(res => res.json())
            .then(data => {
                console.log("✅ Server response:", data);
                if (data.success) {
                    toast.success("Food purchased successfully!");
                } else {
                    toast.error(`❌ Purchase failed: ${data.message}`);
                }
            })
            .catch(err => {
                console.error("🚨 Purchase Error:", err);
                toast.error("❌ Purchase failed! Please try again.");
            });
    };
    
    

    if (!food) return <p>Loading...</p>;

    const isOwnFood = user.email === food.sellerEmail;
    const isOutOfStock = food.availableQuantity === 0;

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold">{food.name}</h2>
            <p className="text-lg">Price: ${food.price}</p>
            <p className="text-lg">Available: {food.availableQuantity} pcs</p>

            {isOwnFood && (
                <p className="text-red-500">⚠️ You can't purchase your own food item.</p>
            )}

            {isOutOfStock && (
                <p className="text-red-500">⚠️ This item is out of stock. You cannot purchase it.</p>
            )}

            <div className="mt-4">
                <label className="block mb-2">Quantity:</label>
                <input
                    type="number"
                    value={quantity}
                    onChange={handleQuantityChange}
                    min="1"
                    max={food.availableQuantity}
                    className="border p-2"
                    disabled={isOwnFood || isOutOfStock}
                />
            </div>

            <button
                onClick={handlePurchase}
                className="mt-4 btn btn-primary"
                disabled={isOwnFood || isOutOfStock}
            >
                Purchase
            </button>
        </div>
    );
};

export default FoodPurchase;

