import React from "react";
// import img1 from "../../public/img_1.PNG";
// import img2 from "../../public/img_2.PNG";
// import img3 from "../../public/img_3.PNG";

export default function SuccessStories() {
    const cards = [
        {
            category: "Success Stories",
            img: 'https://cdn.pixabay.com/photo/2017/05/04/16/37/meeting-2284501_1280.jpg',
            title: "The Future of Metro Systems by Company",
            desc: "Provide a good introduction to your metro solver company. Highlight your mission,core expertise",
            tags: ["50M+", "39% Lower CPS", "$2M+ Sales Generated"],
        },
        {
            category: "Case Studies",
            img: 'https://cdn.pixabay.com/photo/2017/05/04/16/37/meeting-2284501_1280.jpg',
            title: "The Future of Metro Systems by Company",
            desc: "Provide a good introduction to your metro solver company. Highlight your mission,core expertise",
            tags: ["50M+", "39% Lower CPS", "$2M+ Sales Generated"],
        },
        {
            category: "Blog and News",
            img: 'https://cdn.pixabay.com/photo/2017/05/04/16/37/meeting-2284501_1280.jpg',
            title: "The Future of Metro Systems by Company",
            desc: "Provide a good introduction to your metro solver company. Highlight your mission,core expertise",
            tags: ["50M+", "39% Lower CPS", "$2M+ Sales Generated"],
        },
    ];

    return (
        <section className="py-20 bg-gradient-to-r from-[#150928] to-[#2b286c]">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-extrabold text-white mb-4">
                        The Success Stories, <br /> Case Studies & Blog
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Based on the description of Metro Solver and the image provided, here is a <br /> 6 steps process that Metro Solver uses to scale a customer's bussiness.
                    </p>
                </div>

                <div className="flex justify-center flex-wrap gap-22 mb-12">
                    {["Success Stories", "Case Studies", "Blog and News"].map((btn, i) => (
                        <button
                            key={i}
                            className={`px-30 py-4 rounded-full text-sm font-semibold border transition-all duration-300 
              ${btn === "Success Stories"
                                    ? "bg-gradient-to-r from-[#6a5acd] to-[#8a2be2] text-white border-indigo-600"
                                    : "bg-transparent border-gray-400 text-white hover:bg-indigo-600 hover:border-indigo-600"
                                }`}
                        >
                            {btn}
                        </button>
                    ))}
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {cards.map((card, i) => (
                        <div
                            key={i}
                            className="bg-gradient-to-r from-[#150928] to-[#2b286c] rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden"
                        >


                            {/* Image */}
                            <img
                                src={card.img}
                                alt={card.title}
                                className="w-full h-56 object-cover"
                            />

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-white mb-3">
                                    {card.title}
                                </h3>
                                <p className="text-gray-300 mb-4">{card.desc}</p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-3">
                                    {card.tags.map((tag, j) => (
                                        <button
                                            key={j}
                                            className="px-4 py-1 text-sm bg-indigo-100 text-indigo-700 rounded-full hover:bg-indigo-200 transition-all"
                                        >
                                            {tag}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
                <div className="flex justify-center mt-10">
                    <button className="text-white  rounded-2xl bg-gradient-to-r from-[#6a5acd] to-[#8a2be2] px-10 py-2 text-center">
                        View More
                    </button>
                </div>
            </div>
        </section>
    );
}
