// ProductReviews.tsx
"use client"
import { client } from "@/sanity/lib/client";
import { useEffect, useState } from "react";

interface Review {
  rating: number;
  reviewText: string;
  userName: string;
  date: string;
}

interface ProductReviewsProps {
  productName: string;
}

const ProductReviews = ({ productName }: ProductReviewsProps) => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [averageRating, setAverageRating] = useState<number>(0);
  const [rating, setRating] = useState<number>(0);
  const [reviewText, setReviewText] = useState<string>("");
  const [userName, setUserName] = useState<string>("");
  const [successMessage, setSuccessMessage] = useState<string>("");

  useEffect(() => {
    // Fetch reviews for the current product
    const fetchReviews = async (): Promise<void> => {
      const res: Review[] = await client.fetch(`*[_type == "review" && productName == "${productName}"]{
        rating,
        reviewText,
        userName,
        date
      }`);
      setReviews(res);

      // Calculate average rating
      const totalRating = res.reduce((acc, review) => acc + review.rating, 0);
      const avg = totalRating / res.length;
      setAverageRating(avg || 0);
    };

    fetchReviews();
  }, [productName]);

  // Handle form submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Submit the new review to Sanity
    try {
      await client.create({
        _type: "review",
        productName: productName,
        rating: rating,
        reviewText: reviewText,
        userName: userName,
        date: new Date().toISOString(),
      });

      // Reset form
      setRating(0);
      setReviewText("");
      setUserName("");

      // Show success alert
      setSuccessMessage("Your review has been submitted successfully!");

      // Fetch updated reviews
      const res: Review[] = await client.fetch(`*[_type == "review" && productName == "${productName}"]{
        rating,
        reviewText,
        userName,
        date
      }`);
      setReviews(res);

      // Calculate new average rating
      const totalRating = res.reduce((acc, review) => acc + review.rating, 0);
      const avg = totalRating / res.length;
      setAverageRating(avg || 0);
    } catch {
      setSuccessMessage(
        "There was an error submitting your review. Please try again."
      );
    }
  };

  return (
    <div className="mt-12">
      <h3 className="text-2xl font-medium mb-4">Reviews & Ratings</h3>

      <div className="flex items-center mb-4">
        <span className="text-xl font-medium mr-2">Average Rating:</span>
        <div className="flex items-center">
          {[...Array(5)].map((_, index) => (
            <span
              key={index}
              className={`text-yellow-500 ${index < Math.round(averageRating) ? "text-yellow-500" : "text-gray-300"}`}
            >
              ★
            </span>
          ))}
        </div>
      </div>

      {/* Display reviews */}
      {reviews.length === 0 ? (
        <p>No reviews yet. Be the first to review!</p>
      ) : (
        reviews.map((review, index) => (
          <div key={index} className="border-b pb-4 mb-4">
            <div className="flex items-center mb-2">
              <span className="font-medium">{review.userName}</span>
              <span className="ml-2 text-sm text-gray-500">{new Date(review.date).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center mb-2">
              {[...Array(5)].map((_, index) => (
                <span
                  key={index}
                  className={`text-yellow-500 ${index < review.rating ? "text-yellow-500" : "text-gray-300"}`}
                >
                  ★
                </span>
              ))}
            </div>
            <p>{review.reviewText}</p>
          </div>
        ))
      )}

      {/* Success message */}
      {successMessage && <div className="text-green-500 mt-4">{successMessage}</div>}

      {/* Add Review Section */}
      <div className="mt-6">
        <h4 className="text-xl font-medium mb-2">Add Your Review</h4>
        <form
          className="space-y-4"
          onSubmit={handleSubmit}
        >
          <div>
            <label className="block text-sm font-medium mb-2">Rating</label>
            <select
              className="w-full p-2 border"
              name="rating"
              value={rating}
              onChange={(e) => setRating(Number(e.target.value))}
              required
            >
              {[1, 2, 3, 4, 5].map((rating) => (
                <option key={rating} value={rating}>{rating}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Review</label>
            <textarea
              className="w-full p-2 border"
              name="reviewText"
              rows={4}
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Your Name</label>
            <input
              className="w-full p-2 border"
              name="userName"
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-full">
            Submit Review
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProductReviews;
