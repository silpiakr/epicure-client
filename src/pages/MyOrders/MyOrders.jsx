import React, { useEffect, useState, useContext } from "react";
import AuthContext from "../../context/AuthContext/AuthContext";


const MyOrders = () => {
    const { user } = useContext(AuthContext);
    const [purchases, setPurchases] = useState([]);

    useEffect(() => {
        if (!user?.email) return;

        fetch(`https://epicure-server.vercel.app/purchases?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    setPurchases(data.data);
                }
            })
            .catch(err => console.error(err));
    }, [user]);

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">My Purchased Foods</h2>
            
            {purchases.length === 0 ? (
                <p>No purchases found.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {purchases.map((item) => (
                        <div key={item._id} className="border p-4 rounded-lg shadow">
                            <h3 className="text-lg font-semibold">{item.foodName}</h3>
                            <p>Price: ${item.price}</p>
                            <p>Quantity: {item.quantity}</p>
                            <p>Purchased on: {new Date(item.date).toLocaleDateString()}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MyOrders;

