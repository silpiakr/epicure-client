import React from 'react';

const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            name: "John Doe",
            feedback: "The food here is absolutely amazing! I've never had such delicious meals.",
            image: "https://i.ibb.co.com/806Ccr8/10283056.jpg",
        },
        {
            id: 2,
            name: "Jane Smith",
            feedback: "Great service and fantastic variety. Definitely my go-to place for dining out.",
            image: "https://i.ibb.co.com/hmTY2cj/69854116-9467765.jpg",
        },
        {
            id: 3,
            name: "Michael Lee",
            feedback: "Affordable prices with exceptional taste. Highly recommended!",
            image: "https://i.ibb.co.com/DzZD5FT/87921261-9864311.jpg",
        },
    ];

    return (
        <section className="testimonials-section py-10 px-6 bg-yellow-400">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-8">What Our Customers Say</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {testimonials.map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className="testimonial-card bg-white shadow-lg rounded-lg p-6"
                        >
                            <img
                                src={testimonial.image}
                                alt={testimonial.name}
                                className="w-16 h-16 rounded-full mx-auto mb-4"
                            />
                            <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                            <p className="text-gray-600 mt-2">{testimonial.feedback}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
