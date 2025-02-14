import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../../context/AuthContext/AuthContext";
import { toast } from "react-toastify";
import moment from "moment";
// import moment from "moment"; // Import moment.js

const MyOrders = () => {
    const { user } = useContext(AuthContext);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:5000/orders?email=${user.email}`)
                .then((res) => res.json())
                .then((data) => setOrders(data))
                .catch((error) => console.error("Error fetching orders:", error));
        }
    }, [user?.email]);

    const handleDelete = async (orderId) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this order?");
        if (!confirmDelete) return;

        try {
            const response = await fetch(`http://localhost:5000/orders/${orderId}`, {
                method: "DELETE",
            });

            if (!response.ok) throw new Error("Failed to delete order");

            setOrders(orders.filter((order) => order._id !== orderId));
            toast.success("Order deleted successfully!");
        } catch (error) {
            toast.error("Error deleting order");
            console.error("Delete error:", error);
        }
    };

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold mb-4">My Orders</h1>
            {orders.length === 0 ? (
                <p className="text-gray-500">No orders found.</p>
            ) : (
                <div className="overflow-x-auto">
                    <table className="table-auto w-full border-collapse border border-gray-300">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="border p-2">Image</th>
                                <th className="border p-2">Food Name</th>
                                <th className="border p-2">Price</th>
                                <th className="border p-2">Food Owner</th>
                                <th className="border p-2">Date & Time</th>
                                <th className="border p-2">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((order) => (
                                <tr key={order._id} className="border">
                                    <td className="border p-2">
                                        <img src={order.foodImage} alt={order.foodName} className="w-16 h-16 rounded" />
                                    </td>
                                    <td className="border p-2">{order.foodName}</td>
                                    <td className="border p-2">${order.price}</td>
                                    <td className="border p-2">{order.foodOwner}</td>
                                    <td className="border p-2 text-sm text-gray-600">
                                        {moment(order.buyingDate).format("MMMM Do YYYY, h:mm A")}
                                    </td>
                                    <td className="border p-2">
                                        <button 
                                            onClick={() => handleDelete(order._id)} 
                                            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default MyOrders;
