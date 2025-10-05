import React from "react";
import { Star } from "lucide-react";
import reviewer from "../../public/user.png";


const reviews = [
    {
        img: reviewer,
        name: "Katie Johnson | Founder of Starva",
        review:
            "Metro Solver with Mixer was the best solution. I am very satisfied with the team and the work they did.I am sincerely greatfl for the work and effort",
        rating: 5,
        company: "Google",
    },
    {
        img: reviewer,
        name: "Wade Warren | Founder of Starva",
        review:
            "Metro Solver with Mixer was the best solution. I am very satisfied with the team and the work they did.I am sincerely greatfl for the work and effort",
        rating: 5,
        company: "TrustPilot",
    },
    {
        img: reviewer,
        name: "Jenny Wilson | Founder of Starva",
        review:
            "Metro Solver with Mixer was the best solution. I am very satisfied with the team and the work they did.I am sincerely greatfl for the work and effort",
        rating: 5,
        company: "Googles",
    },
];

export default function ReviewSection() {
    return (
        <section className="py-20 bg-gradient-to-r from-[#2b286c] to-[#150928]">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-extrabold text-white mb-4">
                        What People Say
                    </h2>
                    <p className="text-white max-w-2xl mx-auto">
                        Based on description of Metreo Solver and the image provided ,here is a 6-step process that Metro Solver uses to scale a customer's business
                    </p>
                </div>

                {/* Review Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <div
                            key={index}
                            className="bg-gradient-to-r from-[#2b586c]/50 to-[#450928]/20  rounded-2xl shadow-md p-8 text-center hover:shadow-xl transition-all"
                        >
                            <img
                                src={review.img}
                                alt={review.name}
                                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                            />

                            {/* Ratings */}
                            <div className="flex justify-center mb-3">
                                {[...Array(review.rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                                ))}
                            </div>


                            {/* Review text */}
                            <p className="text-white mb-4 leading-relaxed">{review.review}</p>

                            {/* Company Info */}
                            <div className="text-sm text-gray-500 font-medium">
                                <span className="text-indigo-600 font-semibold">{review.company}</span> | Reviewed by {review.company}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
