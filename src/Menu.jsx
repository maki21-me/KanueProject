import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Menu = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("all");
  const [order, setOrder] = useState([]);

  const menuItems = [
    { id: 1, name: "Special Juice", price: 180, category: "appetizers", image: "/src/assets/Images/photo_1_2025-11-26_10-26-14.jpg" },
    { id: 2, name: "Lemon Juice", price: 120, category: "appetizers", image: "/src/assets/Images/photo_1_2025-11-26_10-27-10.jpg" },
    { id: 3, name: "Beef Burger", price: 450, category: "appetizers", image: "/src/assets/Images/photo_1_2025-11-26_10-27-50.jpg" },

    { id: 4, name: "Strawberry Juice", price: 200, category: "mains", image: "/src/assets/Images/photo_2_2025-11-26_10-26-14.jpg" },
    { id: 5, name: "Vegetarian Platter", price: 300, category: "mains", image: "/src/assets/Images/photo_2_2025-11-26_10-27-10.jpg" },
    { id: 6, name: "Chicken Salad", price: 400, category: "mains", image: "/src/assets/Images/photo_2_2025-11-26_10-27-50.jpg" },

    { id: 7, name: "Special Burger", price: 480, category: "mains", image: "/src/assets/Images/photo_3_2025-11-26_10-27-10.jpg" },
    { id: 8, name: "Fruit Punch", price: 400, category: "mains", image: "/src/assets/Images/photo_4_2025-11-26_10-27-10.jpg" },
    { id: 9, name: "Burger with Fries", price: 500, category: "mains", image: "/src/assets/Images/photo_5_2025-11-26_10-27-10.jpg" },

    { id: 10, name: "Strawberry Cheesecake", price: 250, category: "desserts", image: "/src/assets/Images/photo_6_2025-11-26_10-27-10.jpg" },
    { id: 11, name: "Mix Fruit", price: 230, category: "desserts", image: "/src/assets/Images/photo_7_2025-11-26_10-27-10.jpg" },
    { id: 12, name: "Chocolate Drink", price: 300, category: "desserts", image: "/src/assets/Images/photo_8_2025-11-26_10-27-10.jpg" },
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

  const addItem = (item) => {
    const found = order.find((i) => i.id === item.id);
    if (found) {
      setOrder(order.map((i) =>
        i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
      ));
    } else {
      setOrder([...order, { ...item, quantity: 1 }]);
    }
  };

  const removeItem = (id) => {
    setOrder(
      order
        .map((i) =>
          i.id === id ? { ...i, quantity: i.quantity - 1 } : i
        )
        .filter((i) => i.quantity > 0)
    );
  };

  const getItem = (id) => order.find((i) => i.id === id);

  const handleProceed = () => {
    localStorage.setItem("orderItems", JSON.stringify(order));
    navigate("/payment");
  };

  return (
    <section className="min-h-screen bg-white pt-20">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-serif italic font-bold text-center mb-10">
          Our Menu
        </h1>

        {/* Categories */}
        <div className="flex justify-center flex-wrap gap-4 mb-12">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveCategory(c.id)}
              className={`px-6 py-3 rounded-full font-semibold ${
                activeCategory === c.id
                  ? "bg-[#d4af37] text-black"
                  : "border border-[#d4af37] text-[#d4af37]"
              }`}
            >
              {c.name}
            </button>
          ))}
        </div>

        {/* Menu Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => {
            const selected = getItem(item.id);

            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden group"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-56 object-cover"
                />

                <div className="p-4">
                  <h3 className="font-bold text-lg">{item.name}</h3>
                </div>

                {/* Bottom Hover Bar */}
                <div className="px-4 pb-4 opacity-0 group-hover:opacity-100 transition">
                  {!selected ? (
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-yellow-600">
                        ETB {item.price}
                      </span>
                      <button
                        onClick={() => addItem(item)}
                        className="text-sm font-semibold text-black bg-[#d4af37] px-4 py-2 rounded-full"
                      >
                        Add
                      </button>
                    </div>
                  ) : (
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => removeItem(item.id)}
                          className="px-3 py-1 bg-gray-200 rounded"
                        >
                          −
                        </button>
                        <span className="font-semibold">
                          {selected.quantity}
                        </span>
                        <button
                          onClick={() => addItem(item)}
                          className="px-3 py-1 bg-[#d4af37] rounded"
                        >
                          +
                        </button>
                      </div>
                      <span className="font-semibold text-yellow-600">
                        ETB {selected.quantity * item.price}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Proceed */}
        <div className="text-center my-14">
          <button
            onClick={handleProceed}
            disabled={order.length === 0}
            className="px-10 py-4 bg-[#d4af37] text-black rounded-full font-bold disabled:opacity-50"
          >
            Proceed to Payment
          </button>
        </div>
      </div>
    </section>
  );
};

export default Menu;
