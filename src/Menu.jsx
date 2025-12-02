import React, { useState } from "react";

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const menuItems = [
    // Appetizers
    {
      id: 1,
      name: "Special Juice",
      price: "ETB180",
      category: "appetizers",
      image: "/src/assets/images/photo_1_2025-11-26_10-26-14.jpg",
    },
    {
      id: 2,
      name: "Lemon Juice",
      price: "ETB120",
      category: "appetizers",
      image: "/src/assets/Images/photo_1_2025-11-26_10-27-10.jpg",
    },
    {
      id: 3,
      name: "Beef Burger",
      price: "ETB450",
      category: "appetizers",
      image: "src/assets/Images/photo_1_2025-11-26_10-27-50.jpg",
    },

    // Main Courses
    {
      id: 4,
      name: "Strawberry juice",
      price: "ETB200",
      category: "mains",
      image: "src/assets/Images/photo_2_2025-11-26_10-26-14.jpg",
    },
    {
      id: 5,
      name: "Vegetarian Platter",
      price: "ETB300",
      category: "mains",
      image: "src/assets/Images/photo_2_2025-11-26_10-27-10.jpg",
    },
    {
      id: 6,
      name: "Chicken salad",
      price: "ETB400",
      category: "mains",
      image: "src/assets/Images/photo_2_2025-11-26_10-27-50.jpg",
    },
    {
      id: 7,
      name: "Special burger",
      price: "ETB480",
      category: "mains",
      image: "src/assets/Images/photo_3_2025-11-26_10-27-10.jpg",
    },
    {
      id: 8,
      name: "Fruit paunch",
      price: "ETB400",
      category: "mains",
      image: "src/assets/Images/photo_4_2025-11-26_10-27-10.jpg",
    },
    {
      id: 9,
      name: "BURGER with fries",
      price: "ETB500",
      category: "mains",
      image: "src/assets/Images/photo_5_2025-11-26_10-27-10.jpg",
    },

    // Desserts
    {
      id: 10,
      name: "STRAWBERRY CHEESECAKE",
      price: "ETB250",
      category: "desserts",
      image: "src/assets/Images/photo_6_2025-11-26_10-27-10.jpg",
    },
    {
      id: 11,
      name: "MIX FRUIT ",
      price: "ETB230",
      category: "desserts",
      image: "src/assets/Images/photo_7_2025-11-26_10-27-10.jpg",
    },
    {
      id: 12,
      name: "CHOCOLATE DRINK",
      price: "ETB300",
      category: "desserts",
      image: "src/assets/Images/photo_8_2025-11-26_10-27-10.jpg",
    },
  ];

  const categories = [
    { id: "all", name: "All Items" },
    { id: "appetizers", name: "Appetizers" },
    { id: "mains", name: "Main Courses" },
    { id: "desserts", name: "Desserts" },
  ];

  const filteredItems =
    activeCategory === "all"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  return (
    <section className="min-h-screen bg-white dark:bg-gray-900 pt-20">
      {/* Main Content - No background image section */}
      <div className="container mx-auto px-6">
        {/* Title with padding-top to avoid navbar overlap */}
        <h1 className="text-4xl md:text-5xl font-serif italic font-bold text-center mb-8">
          Our Menu
        </h1>

        {/* Menu Categories */}
        <div className="flex justify-center flex-wrap gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-primary text-white shadow-lg"
                  : "bg-white text-primary border border-primary hover:bg-primary hover:text-white"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-full aspect-[4/3] overflow-hidden bg-gray-100">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 flex justify-between items-center">
                <h3 className="text-xl font-semibold text-primary dark:text-white">
                  {item.name}
                </h3>
                <span className="text-2xl font-bold text-yellow-500 dark:text-yellow-400">
                  {item.price}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Inspirational Quote at the end - with price color */}
        <div className="text-center py-12 border-t border-gray-200 dark:border-gray-700">
          <p className="text-xl md:text-2xl italic text-yellow-500 dark:text-yellow-400 leading-relaxed max-w-2xl mx-auto">
            "See with your eyes the beauty of Tana River, then taste with your
            heart with us."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Menu;
