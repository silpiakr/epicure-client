import { useEffect, useState } from "react";
import Footer from "../Footer/Footer";

const Gallery = () => {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await fetch(`http://localhost:5000/gallery?page=${page}&limit=12`);
                const data = await response.json();
                setImages(data.images);
                setTotalPages(data.totalPages);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching images:", error);
                setLoading(false);
            }
        };

        fetchImages();
    }, [page]);

    return (
        <div className="container mx-auto py-8">
            <div
                className="page-title h-96 flex items-center justify-center text-center text-white"
                style={{
                    backgroundImage: "url(https://i.ibb.co/6067PyY/rb-499.png)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <h1 className="text-4xl font-bold bg-black bg-opacity-50 px-4 py-2 rounded-md">
                    Our Gallery
                </h1>
            </div>

            {loading ? (
                <p className="text-center">Loading...</p>
            ) : (
                <div className="grid grid-cols-3 md:grid-cols-4 gap-4 py-10">
                    {images.map((img, index) => (
                        <div key={index} className="border rounded-lg overflow-hidden shadow-md">
                            <img
                                src={img.image}
                                alt="Food Item"
                                className="w-full h-48 object-cover"
                            />
                        </div>
                    ))}
                </div>
            )}

            {/* Pagination */}
            <div className="flex justify-center mt-6 space-x-4">
                <button
                    className="px-4 py-2 rounded"
                    disabled={page === 1}
                    onClick={() => setPage(page - 1)}
                >
                    Previous
                </button>
                <span>Page {page} of {totalPages}</span>
                <button
                    className="px-4 py-2 rounded"
                    disabled={page === totalPages}
                    onClick={() => setPage(page + 1)}
                >
                    Next
                </button>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Gallery;
