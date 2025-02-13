// import React from "react";
// import { useLoaderData, useNavigate, useParams } from "react-router-dom";
// import Loader from "../Loader/Loader";

// const FoodDetails = () => {
//     const food = useLoaderData();  // Load data directly from the router loader
//     const { _id, image, name, category, origin, price, description } = food || {};
//     const navigate = useNavigate();
//     const { id } = useParams(); // Extract the food ID from URL params

//     // Handle food purchase
//     const handlePurchase = () => {
//         const buyerName = 'John Doe';  // Example, should come from user input
//         const buyerEmail = 'johndoe@example.com';  // Example, should come from user input
//         const quantity = 1;  // Example, should come from user input
    
//         console.log("Attempting purchase for food ID:", id); // Debugging log
    
//         fetch(`http://localhost:5000/foods/${id}/purchase`, {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify({
//                 buyerName,
//                 buyerEmail,
//                 quantity,
//             }),
//         })
//             .then((response) => {
//                 if (!response.ok) {
//                     throw new Error("Failed to process purchase");
//                 }
//                 return response.json();
//             })
//             .then((data) => {
//                 console.log("Purchase successful:", data);
//                 navigate(`/purchases/${id}`);
//             })
//             .catch((error) => console.error("Error purchasing food:", error));
//     };
    

//     // Show loader while fetching data
//     if (!food) {
//         return <Loader />;
//     }

//     // Render food details
//     return (
//         <div className="hero bg-base-200 min-h-screen">
//             <div className="hero-content flex-col lg:flex-row">
//                 {/* Food Image */}
//                 <img
//                     src={image}
//                     alt={name}
//                     className="max-w-sm rounded-lg shadow-2xl"
//                 />

//                 {/* Food Information */}
//                 <div className="ml-6">
//                     <h1 className="text-3xl font-bold mb-4">{name}</h1>
//                     <p className="font-semibold">Category: {category}</p>
//                     <p className="font-semibold">Origin: {origin}</p>
//                     <p>Price: ${price ? price.toFixed(2) : "N/A"}</p>
//                     <p>Description: {description}</p>
                    
//                     {/* Purchase Button */}
//                     <button onClick={handlePurchase} className="btn btn-warning mt-5">
//                         Purchase
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default FoodDetails;

import React from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import Loader from "../Loader/Loader";

const FoodDetails = () => {
    const food = useLoaderData();
    const { _id, image, name, category, origin, price, description, purchaseCount } = food || {};
    const navigate = useNavigate();

    if (!food) {
        return <Loader />;
    }

    // Redirect to purchase page
    // const handlePurchaseRedirect = () => {
    //     navigate(`/purchase/${_id}`);
    // };

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <img src={image} alt={name} className="max-w-sm rounded-lg shadow-2xl" />

                <div className="ml-6">
                    <h1 className="text-3xl font-bold mb-4">{name}</h1>
                    <p className="font-semibold">Category: {category}</p>
                    <p className="font-semibold">Origin: {origin}</p>
                    <p>Price: ${price ? price.toFixed(2) : "N/A"}</p>
                    <p>Description: {description}</p>
                    <p className="font-semibold">Purchased: {purchaseCount || 0} times</p>

                    {/* Purchase Button */}
                    {/* <button onClick={handlePurchaseRedirect} className="btn btn-warning mt-5">
                        Purchase
                    </button> */}
                    <Link to={`/purchase/${_id}`} className="btn btn-warning mt-5">Purchase</Link>
                </div>
            </div>
        </div>
    );
};

export default FoodDetails;

