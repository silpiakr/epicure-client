import React, { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

const GalleryPage = () => {
    const [open, setOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [
        { src: 'https://i.ibb.co.com/Sd3TZ3w/lavash-rolls-with-stuffings-tomatoes.jpg', title: 'Dish 1' },
        { src: 'https://i.ibb.co.com/7SCMrK4/mexican-tacos-with-meat-vegetables-red-onion.jpg', title: 'Dish 2' },
        { src: 'https://i.ibb.co.com/GCMYTFr/side-view-caesar-salad-with-chicken-parmesan-cheese-white-bowl-wooden-board.jpg', title: 'Dish 3' },
        { src: 'https://i.ibb.co/KWWtWsw/8583.jpg', title: 'Dish 4' },
        { src: 'https://i.ibb.co/ScFHZMm/33297.jpg', title: 'Dish 5' },
        { src: 'https://i.ibb.co/VpKB9Bx/chicken-skewers-with-slices-sweet-peppers-dill.jpg', title: 'Dish 6' },
        { src: 'https://i.ibb.co.com/r4n4LbD/11195.jpg', title: 'Dish 7' },
        { src: 'https://i.ibb.co.com/LZnNXN7/34957.jpg', title: 'Dish 8' },
        { src: 'https://i.ibb.co.com/LnrW7MG/pita-bread-sandwiches-with-grilled-chicken-meat-avocado-tomato-cucumber-lettuce-served-wooden-table.jpg', title: 'Dish 9' },
        { src: 'https://i.ibb.co.com/VpKB9Bx/chicken-skewers-with-slices-sweet-peppers-dill.jpg', title: 'Dish 10' },
    ];

    const handleImageClick = (index) => {
        setCurrentIndex(index);
        setOpen(true);
    };

    return (
        <div className="gallery-page">
            {/* Page Title Section */}
            <div
                className="page-title h-80 flex items-center justify-center text-center text-white"
                style={{
                    backgroundImage: "url(https://i.ibb.co.com/6067PyY/rb-499.png)",
                    backgroundSize: '100%',
                    backgroundPosition: 'center',
                    objectFit: 'cover',
                }}
            >
                <h1 className="text-4xl font-bold bg-black bg-opacity-50 px-4 py-2 rounded-md">
                    Our Gallery
                </h1>
            </div>

            {/* Gallery Section */}
            <div className="gallery-section container mx-auto py-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="gallery-item cursor-pointer"
                        onClick={() => handleImageClick(index)}
                    >
                        <img
                            src={image.src}
                            alt={image.title}
                            className="rounded-lg shadow-lg hover:opacity-75 transition duration-200 h-48"
                        />
                    </div>
                ))}
            </div>

            {/* Lightbox Component */}
            <Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={images.map((img) => ({ src: img.src }))}
                index={currentIndex}
            />
        </div>
    );
};

export default GalleryPage;
