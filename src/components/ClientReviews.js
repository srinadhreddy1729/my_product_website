import React from 'react';

const reviews = [
    {
        name: "Alice Johnson",
        review: "The project is progressing well, and I'm very satisfied with the communication and updates.",
        rating: 5,
    },
    {
        name: "Bob Smith",
        review: "Great work so far! The team is attentive and really understands my needs.",
        rating: 4,
    },
    {
        name: "Charlie Brown",
        review: "I appreciate the effort being put into this project. Looking forward to the final product!",
        rating: 5,
    },
    {
        name: "David Lee",
        review: "Outstanding service! The team exceeded my expectations, and I can't wait to work together on future projects.",
        rating: 5,
    },
];

const ClientReviews = () => {
    return (
        <div className="max-w-7xl mx-auto p-6" id="review">
            <h2 className="text-4xl text-center font-bold text-gray-800 mb-6">Recent Client Reviews</h2>
            <div className="flex flex-wrap justify-center gap-6">
                {reviews.map((review, index) => (
                    <div key={index} className="bg-white border border-indigo-700 rounded-lg shadow-lg p-4 flex flex-col w-64">
                        <h3 className="text-xl font-semibold text-indigo-600">{review.name}</h3>
                        <p className="text-gray-700 mt-2">{review.review}</p>
                        <div className="mt-4">
                            <span className="text-yellow-500">{'★'.repeat(review.rating)}</span>
                            <span className="text-gray-500">{'★'.repeat(5 - review.rating)}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ClientReviews;
