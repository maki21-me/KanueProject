import React, { useState } from "react";

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const menuItems = [
    // Appetizers
    {
      id: 1,
      name: "Special Juice",
      price: "ETB 180",
      category: "appetizers",
      image: "/src/assets/images/photo_1_2025-11-26_10-26-14.jpg",
    },
    {
      id: 2,
      name: "Lemon Juice",
      price: "ETB 120",
      category: "appetizers",
      image: "/src/assets/Images/photo_1_2025-11-26_10-27-10.jpg",
    },
    {
      id: 3,
      name: "Beef Burger",
      price: "ETB 450",
      category: "appetizers",
      image: "src/assets/Images/photo_1_2025-11-26_10-27-50.jpg",
    },

    // Main Courses
    {
      id: 4,
      name: "Strawberry Juice",
      price: "ETB 200",
      category: "mains",
      image: "src/assets/Images/photo_2_2025-11-26_10-26-14.jpg",
    },
    {
      id: 5,
      name: "Vegetarian Platter",
      price: "ETB 300",
      category: "mains",
      image: "src/assets/Images/photo_2_2025-11-26_10-27-10.jpg",
    },
    {
      id: 6,
      name: "Chicken Salad",
      price: "ETB 400",
      category: "mains",
      image: "src/assets/Images/photo_2_2025-11-26_10-27-50.jpg",
    },
    {
      id: 7,
      name: "Special Burger",
      price: "ETB 480",
      category: "mains",
      image: "src/assets/Images/photo_3_2025-11-26_10-27-10.jpg",
    },
    {
      id: 8,
      name: "Fruit Punch",
      price: "ETB 400",
      category: "mains",
      image: "src/assets/Images/photo_4_2025-11-26_10-27-10.jpg",
    },
    {
      id: 9,
      name: "Burger with Fries",
      price: "ETB 500",
      category: "mains",
      image: "src/assets/Images/photo_5_2025-11-26_10-27-10.jpg",
    },

    // Drinks (formerly Desserts)
    {
      id: 10,
      name: "Strawberry Cheesecake",
      price: "ETB 250",
      category: "drinks",
      image: "src/assets/Images/photo_6_2025-11-26_10-27-10.jpg",
    },
    {
      id: 11,
      name: "Mixed Fruit",
      price: "ETB 230",
      category: "drinks",
      image: "src/assets/Images/photo_7_2025-11-26_10-27-10.jpg",
    },
    {
      id: 12,
      name: "Chocolate Drink",
      price: "ETB 300",
      category: "drinks",
      image: "src/assets/Images/photo_8_2025-11-26_10-27-10.jpg",
    },
  ];

  const categories = [
    { id: "all", name: "All Items" },
    { id: "appetizers", name: "Appetizers" },
    { id: "mains", name: "Main Courses" },
    { id: "drinks", name: "Drinks" },
  ];

  const filteredItems =
    activeCategory === "all"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  // Your color: #A86F21
  const primaryColor = "#A86F21";
  const primaryColorLight = "#D4A76A"; // Added this - it was missing!
  const primaryColorDark = "#8B5A1A";

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 pt-32 md:pt-24">
      <div className="container mx-auto px-4 md:px-6">
        {/* Title Section - Clean & Simple */}
        <div className="text-center mb-8 md:mb-12">
          <h1
            className="text-5xl md:text-6xl font-bold mb-6 md:mb-8"
            style={{ color: primaryColor }}
          >
            Our Menu
          </h1>

          {/* Category Buttons - Immediately below title */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 px-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`
                  px-5 md:px-6 py-2.5 md:py-3 rounded-full font-medium text-sm md:text-base
                  transition-all duration-300 transform hover:scale-105 hover:shadow-lg
                  ${
                    activeCategory === category.id
                      ? "text-white shadow-md"
                      : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600"
                  }
                `}
                style={{
                  backgroundColor:
                    activeCategory === category.id
                      ? primaryColor
                      : "transparent",
                  borderColor:
                    activeCategory === category.id ? primaryColor : "",
                }}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Grid - Simplified: Only Image, Name, Price */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16 px-4">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image Container with hover effect */}
              <div className="w-full aspect-[4/3] overflow-hidden bg-gray-100 dark:bg-gray-700">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Name (left) and Price (right) on same line */}
              <div className="p-5">
                <div className="flex justify-between items-center">
                  {/* Food Name - Left Side */}
                  <h3
                    className="text-xl font-bold line-clamp-1 transition-colors duration-300 group-hover:opacity-80"
                    style={{
                      color: primaryColorDark,
                    }}
                  >
                    {item.name}
                  </h3>

                  {/* Price - Right Side */}
                  <p
                    className="text-2xl font-bold transition-colors duration-300 group-hover:opacity-80"
                    style={{
                      color: primaryColor,
                    }}
                  >
                    {item.price}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Inspirational Quote - Original Elegant Design */}
        <div className="container mx-auto px-4 md:px-6 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="relative inline-block">
              <div
                className="absolute -inset-1 rounded-lg blur opacity-30"
                style={{
                  background: `linear-gradient(to right, ${primaryColorLight}, ${primaryColor})`,
                }}
              ></div>
              <div className="relative px-8 py-6 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg border border-amber-100 dark:border-amber-900/30">
                <p
                  className="text-2xl md:text-3xl italic leading-relaxed font-serif"
                  style={{ color: primaryColor }}
                >
                  "See with your eyes the beauty of Tana River, then taste with
                  your heart with us."
                </p>
                <div className="mt-4 flex items-center justify-center gap-2">
                  <div
                    className="h-px w-12"
                    style={{
                      background: `linear-gradient(to right, transparent, ${primaryColor}, transparent)`,
                    }}
                  ></div>
                  <span
                    className="text-sm font-semibold tracking-wider"
                    style={{ color: primaryColor }}
                  >
                    TANA RIVER DINING
                  </span>
                  <div
                    className="h-px w-12"
                    style={{
                      background: `linear-gradient(to right, transparent, ${primaryColor}, transparent)`,
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
