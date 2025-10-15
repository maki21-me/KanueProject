import React, { useState, useEffect } from "react";
import { FaStar, FaPlus } from "react-icons/fa";

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [quantities, setQuantities] = useState({});
  const [isScrolled, setIsScrolled] = useState(false);

  // Luxury menu items with real food descriptions
  const menuItems = [
    {
      id: 1,
      name: "Grilled Salmon Steak",
      price: 32.99,
      category: "main",
      description:
        "Fresh Atlantic salmon grilled to perfection with lemon butter sauce",
      image:
        "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=500&h=350&fit=crop",
      popular: true,
      ingredients: [
        "Atlantic Salmon",
        "Lemon Butter",
        "Fresh Herbs",
        "Seasonal Vegetables",
      ],
      time: "20 min",
    },
    {
      id: 2,
      name: "Prime Beef Tenderloin",
      price: 45.99,
      category: "main",
      description:
        "USDA prime beef with red wine reduction and truffle mashed potatoes",
      image:
        "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=500&h=350&fit=crop",
      popular: true,
      ingredients: [
        "Prime Beef",
        "Red Wine Sauce",
        "Truffle Mash",
        "Asparagus",
      ],
      time: "25 min",
    },
    {
      id: 3,
      name: "Tuscan Seafood Platter",
      price: 28.99,
      category: "main",
      description: "Mixed seafood selection with garlic white wine sauce",
      image:
        "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=500&h=350&fit=crop",
      popular: false,
      ingredients: ["Scallops", "Shrimp", "Mussels", "White Wine Sauce"],
      time: "30 min",
    },
    {
      id: 4,
      name: "Mediterranean Salad",
      price: 16.99,
      category: "starter",
      description: "Fresh greens with feta, olives, and balsamic glaze",
      image:
        "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=500&h=350&fit=crop",
      popular: true,
      ingredients: [
        "Mixed Greens",
        "Feta Cheese",
        "Kalamata Olives",
        "Balsamic",
      ],
      time: "10 min",
    },
    {
      id: 5,
      name: "Truffle Arancini",
      price: 14.99,
      category: "starter",
      description: "Crispy risotto balls with black truffle and parmesan",
      image:
        "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=500&h=350&fit=crop",
      popular: false,
      ingredients: ["Arborio Rice", "Black Truffle", "Parmesan", "Marinara"],
      time: "15 min",
    },
    {
      id: 6,
      name: "Chocolate Lava Cake",
      price: 12.99,
      category: "dessert",
      description:
        "Warm chocolate cake with molten center and vanilla ice cream",
      image:
        "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=500&h=350&fit=crop",
      popular: true,
      ingredients: [
        "Dark Chocolate",
        "Vanilla Ice Cream",
        "Berry Coulis",
        "Mint",
      ],
      time: "12 min",
    },
    {
      id: 7,
      name: "Tiramisu Classic",
      price: 10.99,
      category: "dessert",
      description:
        "Traditional Italian dessert with espresso-soaked ladyfingers",
      image:
        "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=500&h=350&fit=crop",
      popular: false,
      ingredients: ["Mascarpone", "Espresso", "Cocoa Powder", "Ladyfingers"],
      time: "8 min",
    },
    {
      id: 8,
      name: "Berry Cheesecake",
      price: 11.99,
      category: "dessert",
      description: "Creamy New York style cheesecake with mixed berry compote",
      image:
        "https://images.unsplash.com/photo-1567306301408-9b74779a11af?w=500&h=350&fit=crop",
      popular: true,
      ingredients: [
        "Cream Cheese",
        "Graham Cracker",
        "Mixed Berries",
        "Whipped Cream",
      ],
      time: "10 min",
    },
  ];

  const categories = [
    { id: "all", name: "Full Menu", count: menuItems.length },
    {
      id: "main",
      name: "Main Courses",
      count: menuItems.filter((item) => item.category === "main").length,
    },
    {
      id: "starter",
      name: "Starters",
      count: menuItems.filter((item) => item.category === "starter").length,
    },
    {
      id: "dessert",
      name: "Desserts",
      count: menuItems.filter((item) => item.category === "dessert").length,
    },
  ];

  const filteredItems =
    activeCategory === "all"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  const addToCart = (item) => {
    const itemId = item.id;
    setQuantities((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1,
    }));

    // Simple notification
    alert(`Added ${item.name} to cart!`);
  };

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#874516] pt-32">
      <div className="container mx-auto px-6 relative z-10">
        {/* Luxury Header with River Inspiration */}
        <div
          className={`text-center mb-16 transition-all duration-500 ${
            isScrolled ? "scale-95 opacity-90" : "scale-100 opacity-100"
          }`}
        >
          <div className="inline-flex items-center gap-4 mb-6">
            <div className="w-12 h-0.5 bg-amber-400"></div>
            <span className="text-amber-400 font-light tracking-widest text-sm">
              RIVERSIDE DINING EXPERIENCE
            </span>
            <div className="w-12 h-0.5 bg-amber-400"></div>
          </div>
          <h1 className="text-5xl font-serif font-normal text-white mb-4 tracking-tight">
            Canoo Restaurant
          </h1>
          <p className="text-lg text-amber-100 max-w-2xl mx-auto font-light leading-relaxed">
            Taste the freshness that flows from Tana River. Every dish tells a
            story of passion and quality.
          </p>
          <div className="mt-6 bg-amber-900 bg-opacity-50 border border-amber-600 rounded-lg p-4 max-w-md mx-auto">
            <p className="text-amber-200 font-medium italic">
              "See with your eyes, taste with your heart - the essence of Tana
              River in every bite"
            </p>
          </div>
        </div>

        {/* Category Navigation */}
        <div className="flex justify-center gap-2 mb-16 flex-wrap">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full border transition-all duration-300 font-light tracking-wide ${
                activeCategory === category.id
                  ? "bg-amber-500 border-amber-500 text-white shadow-lg"
                  : "bg-amber-800 border-amber-700 text-amber-100 hover:border-amber-400 hover:text-amber-300"
              }`}
            >
              {category.name}
              <span
                className={`ml-2 text-sm ${
                  activeCategory === category.id
                    ? "text-amber-200"
                    : "text-amber-400"
                }`}
              >
                ({category.count})
              </span>
            </button>
          ))}
        </div>

        {/* Menu Grid with LARGER Food Images */}
        <div className="grid gap-8 max-w-6xl mx-auto">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-amber-200 group"
            >
              <div className="flex flex-col lg:flex-row">
                {/* LARGER Real Food Image Section */}
                <div className="lg:w-64 flex items-center justify-center bg-gray-100 group-hover:bg-gray-200 transition-all duration-500 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-64 lg:h-72 object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content Section */}
                <div className="flex-1 p-6">
                  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                    <div className="flex-1 mb-4 lg:mb-0">
                      <div className="flex items-center gap-4 mb-2">
                        <h3 className="text-2xl font-serif font-normal text-gray-800">
                          {item.name}
                        </h3>
                        {item.popular && (
                          <span className="flex items-center gap-1 bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm font-light">
                            <FaStar className="text-amber-500" />
                            Featured
                          </span>
                        )}
                      </div>
                      <p className="text-gray-600 font-light leading-relaxed mb-3">
                        {item.description}
                      </p>

                      {/* Ingredients */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {item.ingredients.map((ingredient, idx) => (
                          <span
                            key={idx}
                            className="bg-gray-50 text-gray-700 px-3 py-1 rounded-full text-xs font-light border border-gray-200"
                          >
                            {ingredient}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Price and Action */}
                    <div className="text-left lg:text-right lg:ml-6">
                      <div className="text-3xl font-serif font-light text-amber-600 mb-3">
                        ${item.price}
                      </div>
                      <div className="text-sm text-gray-500 font-light mb-4">
                        {item.time}
                      </div>
                      <button
                        onClick={() => addToCart(item)}
                        className="bg-amber-600 text-white px-6 py-3 rounded-full font-light tracking-wide hover:bg-amber-700 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg flex items-center gap-2"
                      >
                        <FaPlus className="text-sm" />
                        Add to Order
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quality Accent */}
              <div className="h-1 bg-gradient-to-r from-amber-200 to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-6 opacity-50 text-white">🍽️</div>
            <h3 className="text-2xl font-serif font-light text-white mb-4">
              No items found
            </h3>
            <p className="text-amber-200 font-light">
              Please try a different category
            </p>
          </div>
        )}

        {/* River Inspiration Banner */}
        <div className="mt-20 bg-amber-900 bg-opacity-70 rounded-3xl p-8 text-center relative overflow-hidden border border-amber-600">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 to-amber-600"></div>

          <h3 className="text-2xl font-serif font-light text-white mb-4">
            Inspired by Tana's Bounty
          </h3>
          <p className="text-amber-100 font-light mb-6 leading-relaxed max-w-2xl mx-auto">
            Just as Tana River brings life to our lands, we bring exceptional
            flavors to your table. Experience the harmony of nature and culinary
            artistry.
          </p>
          <button className="bg-amber-500 text-white px-8 py-3 rounded-full font-light tracking-wider hover:bg-amber-600 transition-all duration-300 transform hover:scale-105 shadow-2xl">
            Reserve Your Table
          </button>
        </div>
      </div>

      {/* FIXED Floating Cart - Now properly positioned above all content */}
      <div className="fixed bottom-8 right-8 bg-amber-500 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300 cursor-pointer z-50">
        <div className="text-center">
          <div className="text-lg font-light">
            {Object.values(quantities).reduce((a, b) => a + b, 0)}
          </div>
          <div className="text-xs font-light">items</div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
