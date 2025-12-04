import React from "react";
import { FaStar } from "react-icons/fa";

const Testimonies = () => {
  const styles = {
    // keep a small set of fallbacks but prefer Tailwind classes in JSX
    testimonies: { padding: "80px 0", position: "relative" },
  };

  // Testimonies data
  const testimonies = [
    {
      id: 1,
      content:
        "I am very happy by the service what i got from canoe i really love it the food is always fresh and beautifully presented its my go to spot for dinner ",
      author: "Abebe Birhanu",
      role: "Food Critic, Epicurean Magazine",
      initials: "AB",
      rating: 5,
    },
    {
      id: 2,
      content:
        "As a chef myself, I'm incredibly impressed with the innovation and technique displayed in every course. The flavor combinations are bold yet perfectly balanced. A true culinary destination.",
      author: "Biniyam Maru",
      role: "Executive Chef, The Culinary Institute",
      initials: "MR",
      rating: 5,
    },
    {
      id: 3,
      content:
        "Canoe has redefined our expectations for modern dining. The sustainable approach combined with exceptional culinary artistry makes this restaurant truly special and worth every visit.",
      author: "Aster Worku ",
      role: "Sustainability Advocate & Regular Guest",
      initials: "Aw",
      rating: 5,
    },
  ];

  const renderStars = (rating) => {
    return "★".repeat(rating);
  };

  return (
    <section id="testimonies" className="py-24 bg-[#f7f5f2]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            What Our <span className="text-primary">Guests Say</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            Discover why food critics, chefs, and diners alike celebrate the
            Canoe experience.
          </p>
        </div>

        {/* Testimonies Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonies.map((testimony) => (
            <article
              key={testimony.id}
              className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 transform transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="relative">
                <div className="text-6xl text-primary opacity-5 absolute -top-6 -left-4">
                  “
                </div>
                <p className="text-gray-700 italic leading-relaxed mb-6">
                  {testimony.content}
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-semibold">
                  {testimony.initials}
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-gray-900">
                    {testimony.author}
                  </div>
                  <div className="text-sm text-gray-500">{testimony.role}</div>
                </div>
                <div className="text-amber-400 text-lg">
                  {Array.from({ length: testimony.rating }).map((_, i) => (
                    <FaStar key={i} className="inline-block mr-0.5" />
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="flex flex-col sm:flex-row justify-center gap-12 mt-12 pt-8 border-t border-gray-100">
          <div className="text-center">
            <div className="text-3xl font-light text-primary">4.9/5</div>
            <div className="text-sm uppercase text-gray-500 tracking-wider">
              Average Rating
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-light text-primary">500+</div>
            <div className="text-sm uppercase text-gray-500 tracking-wider">
              Five-Star Reviews
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-light text-primary">98%</div>
            <div className="text-sm uppercase text-gray-500 tracking-wider">
              Would Return
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonies;
