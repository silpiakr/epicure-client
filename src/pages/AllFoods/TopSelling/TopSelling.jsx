import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const TopSelling = () => {
    const [topProducts, setTopProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTopSelling = async () => {
            try {
                const response = await fetch("https://epicure-server.vercel.app/topSelling");
                const data = await response.json();
                setTopProducts(data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching top-selling products:", error);
                setLoading(false);
            }
        };

        fetchTopSelling();
    }, []);

    return (
        <div className="container mx-auto py-8 p-5">
            <h1 className="text-2xl font-bold text-center mb-6">🔥 Top Selling Products</h1>

            {loading ? (
                <p className="text-center">Loading...</p>
            ) : (
                <>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {topProducts.map((product) => (
                            <div key={product._id} className="border rounded-lg p-4 shadow-md">
                                <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded" />
                                <h2 className="text-lg font-bold mt-2">{product.name}</h2>
                                <p className="text-gray-600">Price: {product.price} BDT</p>
                                <p className="text-green-500 font-semibold">Sold: {product.salesCount} times</p>
                                
                                {/* ✅ Corrected View Details Button */}
                                <Link to={`/foodDetails/${product._id}`}>
                                    <button className="btn btn-warning mt-2">View Details</button>
                                </Link>
                            </div>
                        ))}
                    </div>
                </>
            )}

            {/* See All Button */}
            <div className="text-center mt-6">
                <Link to="/foods">
                    <button className="btn btn-primary">See All</button>
                </Link>
            </div>
        </div>
    );
};

export default TopSelling;
