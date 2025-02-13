import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

const Purchases = ({ user }) => {
  const [formData, setFormData] = useState({
    foodName: "",
    price: "",
    quantity: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const purchaseData = {
      ...formData,
      buyerName: user.name,
      buyerEmail: user.email,
    };

    try {
      const response = await fetch("/api/purchase", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(purchaseData),
      });

      if (response.ok) {
        toast.success("Purchase successful!");
        setFormData({ foodName: "", price: "", quantity: "" });
      } else {
        toast.error("Purchase failed. Try again!");
      }
    } catch (error) {
      toast.error("An error occurred!",);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Food Name</label>
        <input
          type="text"
          name="foodName"
          value={formData.foodName}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Price</label>
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Quantity</label>
        <input
          type="number"
          name="quantity"
          value={formData.quantity}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Buyer Name</label>
        <input type="text" value={user.name} readOnly />
      </div>
      <div>
        <label>Buyer Email</label>
        <input type="email" value={user.email} readOnly />
      </div>
      <button type="submit">Purchase</button>
    </form>
  );
};

export default Purchases;
