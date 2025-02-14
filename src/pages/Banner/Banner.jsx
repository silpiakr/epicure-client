import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Link, useNavigate } from 'react-router-dom';

const Banner = () => {
    const navigate = useNavigate();

    const slides = [
        {
            title: "Welcome to Our Food Heaven",
            description: "Discover the best dishes crafted with love and fresh ingredients.",
            image: "https://i.ibb.co/VpKB9Bx/chicken-skewers-with-slices-sweet-peppers-dill.jpg",
        },
        {
            title: "Delicious Grilled Chicken",
            description: "Grilled chicken combined with house special spicy. Scrumptious grilled sausage chunks topped with our Fries.",
            image: "https://i.ibb.co/DMDNr9L/4856.jpg",
        },
        {
            title: "Tasty Bites",
            description: "Discover the best dishes crafted with love and fresh ingredients.",
            image: "https://i.ibb.co/ScFHZMm/33297.jpg",
        },
        {
            title: "Fresh and Flavorful",
            description: "Experience a delightful combination of flavors and freshness.",
            image: "https://i.ibb.co/KWWtWsw/8583.jpg",
        },
    ];

    return (
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
        >
            {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                    <div
                        className="hero object-cover"
                        style={{
                            backgroundImage: `url(${slide.image})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            height: "500px",
                        }}
                    >
                        <div className="hero-overlay bg-black bg-opacity-50"></div>
                        <div className="hero-content text-neutral-content text-center md:py-20">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold">{slide.title}</h1>
                                <p className="mb-5">{slide.description}</p>
                                <Link to='/foods'>
                                    <button
                                        className="btn btn-warning"
                                    >
                                        Explore All Foods
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Banner;
