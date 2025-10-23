import React, { useState } from "react";
import {
  FaSearch,
  FaEdit,
  FaTrash,
  FaCheck,
  FaTimes,
  FaEye,
  FaPrint,
  FaDownload,
} from "react-icons/fa";

const Admin = () => {
  const [activeTab, setActiveTab] = useState("reservations");
  const [searchTerm, setSearchTerm] = useState("");

  // Sample reservation data
  const [reservations, setReservations] = useState([
    {
      id: 1,
      customerName: "Meklit Abebe",
      phone: "+251 912 345 678",
      email: "meklit@email.com",
      date: "2025-01-15",
      time: "19:00",
      guests: 4,
      status: "confirmed",
      specialRequests: "Window seat preferred",
      createdAt: "2025-01-10 14:30",
    },
    {
      id: 2,
      customerName: "Samuel Getachew",
      phone: "+251 911 234 567",
      email: "samuel@email.com",
      date: "2025-01-16",
      time: "20:30",
      guests: 2,
      status: "pending",
      specialRequests: "Anniversary celebration",
      createdAt: "2025-01-11 09:15",
    },
    {
      id: 3,
      customerName: "Hana Tesfaye",
      phone: "+251 913 456 789",
      email: "hana@email.com",
      date: "2025-01-14",
      time: "18:00",
      guests: 6,
      status: "confirmed",
      specialRequests: "",
      createdAt: "2025-01-09 16:45",
    },
    {
      id: 4,
      customerName: "Daniel Mekonnen",
      phone: "+251 914 567 890",
      email: "daniel@email.com",
      date: "2025-01-17",
      time: "19:30",
      guests: 3,
      status: "cancelled",
      specialRequests: "Vegetarian options needed",
      createdAt: "2025-01-12 11:20",
    },
  ]);

  // Sample order data
  const [orders, setOrders] = useState([
    {
      id: 101,
      customerName: "Meklit Abebe",
      items: [
        { name: "Doro Wat", quantity: 2, price: 14.99 },
        { name: "Vegetarian Platter", quantity: 1, price: 12.99 },
        { name: "Baklava", quantity: 2, price: 7.99 },
      ],
      total: 58.95,
      status: "completed",
      orderTime: "2025-01-10 19:30",
      type: "dine-in",
    },
    {
      id: 102,
      customerName: "Samuel Getachew",
      items: [
        { name: "Tibs", quantity: 1, price: 16.99 },
        { name: "Sambusa", quantity: 1, price: 6.99 },
      ],
      total: 23.98,
      status: "preparing",
      orderTime: "2025-01-11 20:00",
      type: "takeaway",
    },
  ]);

  const stats = {
    totalReservations: reservations.length,
    confirmedReservations: reservations.filter((r) => r.status === "confirmed")
      .length,
    pendingReservations: reservations.filter((r) => r.status === "pending")
      .length,
    todayReservations: reservations.filter((r) => r.date === "2025-01-15")
      .length,
  };

  const handleStatusChange = (reservationId, newStatus) => {
    setReservations(
      reservations.map((res) =>
        res.id === reservationId ? { ...res, status: newStatus } : res
      )
    );
  };

  const handleDeleteReservation = (reservationId) => {
    setReservations(reservations.filter((res) => res.id !== reservationId));
  };

  const filteredReservations = reservations.filter(
    (reservation) =>
      reservation.customerName
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      reservation.phone.includes(searchTerm) ||
      reservation.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status) => {
    switch (status) {
      case "confirmed":
        return "bg-green-100 text-green-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "cancelled":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <section className="min-h-screen bg-[#f9f4f0] dark:bg-gray-900 pt-10">
      {/* Hero Section with Background Image */}
      <div
        className="relative py-16 text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-serif italic font-bold mb-4">
            Admin Dashboard
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto">
            Manage reservations and orders efficiently
          </p>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
            <h3 className="text-2xl font-bold text-primary mb-2">
              {stats.totalReservations}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Total Reservations
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
            <h3 className="text-2xl font-bold text-green-600 mb-2">
              {stats.confirmedReservations}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">Confirmed</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
            <h3 className="text-2xl font-bold text-yellow-600 mb-2">
              {stats.pendingReservations}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">Pending</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
            <h3 className="text-2xl font-bold text-blue-600 mb-2">
              {stats.todayReservations}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">Today</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg mb-8">
          <div className="border-b border-gray-200 dark:border-gray-700">
            <nav className="flex -mb-px">
              <button
                onClick={() => setActiveTab("reservations")}
                className={`py-4 px-6 text-center border-b-2 font-medium text-sm ${
                  activeTab === "reservations"
                    ? "border-primary text-primary"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                Reservations
              </button>
              <button
                onClick={() => setActiveTab("orders")}
                className={`py-4 px-6 text-center border-b-2 font-medium text-sm ${
                  activeTab === "orders"
                    ? "border-primary text-primary"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                Orders
              </button>
            </nav>
          </div>

          {/* Search Bar */}
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <div className="relative max-w-md">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search reservations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700 dark:text-white"
              />
            </div>
          </div>

          {/* Reservations Tab Content */}
          {activeTab === "reservations" && (
            <div className="p-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600 dark:text-gray-300">
                        Customer
                      </th>
                      <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600 dark:text-gray-300">
                        Date & Time
                      </th>
                      <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600 dark:text-gray-300">
                        Guests
                      </th>
                      <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600 dark:text-gray-300">
                        Status
                      </th>
                      <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600 dark:text-gray-300">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredReservations.map((reservation) => (
                      <tr
                        key={reservation.id}
                        className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
                      >
                        <td className="py-4 px-4">
                          <div>
                            <div className="font-medium text-gray-900 dark:text-white">
                              {reservation.customerName}
                            </div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">
                              {reservation.phone}
                            </div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">
                              {reservation.email}
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <div className="text-sm text-gray-900 dark:text-white">
                            {reservation.date}
                          </div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">
                            {reservation.time}
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                            {reservation.guests} guests
                          </span>
                        </td>
                        <td className="py-4 px-4">
                          <span
                            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(
                              reservation.status
                            )}`}
                          >
                            {reservation.status}
                          </span>
                        </td>
                        <td className="py-4 px-4">
                          <div className="flex space-x-2">
                            {reservation.status === "pending" && (
                              <>
                                <button
                                  onClick={() =>
                                    handleStatusChange(
                                      reservation.id,
                                      "confirmed"
                                    )
                                  }
                                  className="text-green-600 hover:text-green-900"
                                  title="Confirm"
                                >
                                  <FaCheck />
                                </button>
                                <button
                                  onClick={() =>
                                    handleStatusChange(
                                      reservation.id,
                                      "cancelled"
                                    )
                                  }
                                  className="text-red-600 hover:text-red-900"
                                  title="Cancel"
                                >
                                  <FaTimes />
                                </button>
                              </>
                            )}
                            <button
                              onClick={() =>
                                handleDeleteReservation(reservation.id)
                              }
                              className="text-red-600 hover:text-red-900"
                              title="Delete"
                            >
                              <FaTrash />
                            </button>
                            <button
                              className="text-blue-600 hover:text-blue-900"
                              title="View Details"
                            >
                              <FaEye />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Orders Tab Content */}
          {activeTab === "orders" && (
            <div className="p-6">
              <div className="space-y-6">
                {orders.map((order) => (
                  <div
                    key={order.id}
                    className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                          Order #{order.id} - {order.customerName}
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {order.orderTime} • {order.type}
                        </p>
                      </div>
                      <div className="flex space-x-2">
                        <button
                          className="text-blue-600 hover:text-blue-900"
                          title="Print"
                        >
                          <FaPrint />
                        </button>
                        <button
                          className="text-green-600 hover:text-green-900"
                          title="Download"
                        >
                          <FaDownload />
                        </button>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                        Order Items:
                      </h4>
                      <div className="space-y-2">
                        {order.items.map((item, index) => (
                          <div
                            key={index}
                            className="flex justify-between text-sm"
                          >
                            <span>
                              {item.quantity}x {item.name}
                            </span>
                            <span>
                              ${(item.quantity * item.price).toFixed(2)}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex justify-between items-center border-t border-gray-200 dark:border-gray-600 pt-4">
                      <span className="text-lg font-bold text-primary">
                        Total: ${order.total}
                      </span>
                      <span
                        className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                          order.status === "completed"
                            ? "bg-green-100 text-green-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {order.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Quick Actions */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Quick Actions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="bg-primary text-white py-3 px-4 rounded-lg hover:bg-primary/90 transition-colors">
              Add New Reservation
            </button>
            <button className="bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 transition-colors">
              Generate Report
            </button>
            <button className="bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors">
              View Calendar
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admin;
