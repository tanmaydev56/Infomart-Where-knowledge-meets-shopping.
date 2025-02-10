"use client";
import { useRouter } from "next/navigation";
import React from "react";

const fakeReviews = [
  {
    id: 1,
    user: "John Doe",
    comment: "Amazing product! Highly recommend it.",
    rating: 5,
  },
  {
    id: 2,
    user: "Jane Smith",
    comment: "Good value for the price. Would buy again!",
    rating: 4,
  },
  {
    id: 3,
    user: "Alex Johnson",
    comment: "Not what I expected, but decent quality.",
    rating: 3,
  },
];

const Page = () => {
  const router = useRouter();
  return (
    <div className="p-5  shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-3">Product Reviews</h2>
      <button
        onClick={() => router.back()}
        className="mb-6 px-4 py-2 bg-blue-600 text-white font-semibold rounded-full shadow-md hover:bg-blue-700 transition"
      >
        ← Go Back
      </button>
      <ul className="space-y-3">
        {fakeReviews.map((review) => (
          <li key={review.id} className="border p-3 rounded-md bg-gray-100">
            <p className="text-gray-800 font-semibold">{review.user}</p>
            <p className="text-gray-600">{review.comment}</p>
            <p className="text-yellow-500 font-bold">Rating: {review.rating} ⭐</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Page;
