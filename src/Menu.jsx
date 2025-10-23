import React, { useState } from "react";

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const menuItems = [
    // Appetizers
    {
      id: 1,
      name: "Sambusa",
      price: "$6.99",
      category: "appetizers",
      image:
        "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
    },
    {
      id: 2,
      name: "Kategna",
      price: "$5.99",
      category: "appetizers",
      image:
        "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
    },
    {
      id: 3,
      name: "Ful Medames",
      price: "$7.99",
      category: "appetizers",
      image:
        "https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
    },

    // Main Courses
    {
      id: 4,
      name: "Doro Wat",
      price: "$14.99",
      category: "mains",
      image:
        "https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
    },
    {
      id: 5,
      name: "Vegetarian Platter",
      price: "$12.99",
      category: "mains",
      image:
        "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
    },
    {
      id: 6,
      name: "Tibs",
      price: "$16.99",
      category: "mains",
      image:
        "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
    },
    {
      id: 7,
      name: "Kitfo",
      price: "$17.99",
      category: "mains",
      image:
        "https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
    },
    {
      id: 8,
      name: "Shiro Wat",
      price: "$11.99",
      category: "mains",
      image:
        "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
    },
    {
      id: 9,
      name: "Beyaynetu",
      price: "$13.99",
      category: "mains",
      image:
        "https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
    },

    // Desserts
    {
      id: 10,
      name: "Baklava",
      price: "$7.99",
      category: "desserts",
      image:
        "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
    },
    {
      id: 11,
      name: "Sweet Injera",
      price: "$6.99",
      category: "desserts",
      image:
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
    },
    {
      id: 12,
      name: "Coffee Tiramisu",
      price: "$8.99",
      category: "desserts",
      image:
        "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
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
    <section className="min-h-screen bg-secondary dark:bg-gray-900 pt-10">
      {/* Hero Section with Background Image */}
      <div
        className="relative py-20 text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-serif italic font-bold mb-6">
            Our Menu
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed">
            "See with your eyes the beauty of Tana River, then taste with your
            heart with us."
          </p>
        </div>
      </div>

      {/* Menu Categories */}
      <div className="container mx-auto px-6 py-12">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex justify-between items-center">
                <h3 className="text-xl font-semibold text-primary dark:text-white">
                  {item.name}
                </h3>
                <span className="text-2xl font-bold text-secondary dark:text-yellow-400">
                  {item.price}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
