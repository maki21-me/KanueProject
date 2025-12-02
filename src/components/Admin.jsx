import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaSearch,
  FaEdit,
  FaTrash,
  FaCheck,
  FaTimes,
  FaEye,
  FaPrint,
  FaDownload,
  FaSignOutAlt,
  FaPlus,
  FaFileExport,
  FaCalendarAlt,
  FaUser,
  FaPhone,
  FaEnvelope,
  FaCalendar,
  FaClock,
  FaUsers,
  FaStar,
} from "react-icons/fa";

const Admin = () => {
  const [activeTab, setActiveTab] = useState("reservations");
  const [searchTerm, setSearchTerm] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showAddReservation, setShowAddReservation] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedReservation, setSelectedReservation] = useState(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [showReportPreview, setShowReportPreview] = useState(false);
  const [reportData, setReportData] = useState(null);
  const navigate = useNavigate();

  // Authentication check
  useEffect(() => {
    const authStatus = localStorage.getItem("adminAuthenticated");
    if (authStatus !== "true") {
      navigate("/admin-login");
    } else {
      setIsAuthenticated(true);
    }
  }, [navigate]);

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("adminAuthenticated");
    navigate("/admin-login");
  };

  // New reservation state
  const [newReservation, setNewReservation] = useState({
    customerName: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    guests: 2,
    specialRequests: "",
  });

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
      specialRequests: "Window seat preferred, anniversary celebration",
      createdAt: "2025-01-10 14:30",
      customerNotes: "Regular customer, prefers quiet tables",
      visitCount: 3,
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
      specialRequests: "Anniversary celebration with cake",
      createdAt: "2025-01-11 09:15",
      customerNotes: "First time visitor",
      visitCount: 1,
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
      customerNotes: "Family dinner, vegetarian options needed",
      visitCount: 2,
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
      specialRequests: "Vegetarian options needed, gluten-free",
      createdAt: "2025-01-12 11:20",
      customerNotes: "Business meeting",
      visitCount: 1,
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

  // ==================== QUICK ACTION FUNCTIONS ====================

  // 1. ADD NEW RESERVATION FUNCTIONALITY
  const handleAddReservation = () => {
    if (
      newReservation.customerName &&
      newReservation.date &&
      newReservation.time
    ) {
      const reservation = {
        id: Date.now(), // Simple ID generation
        ...newReservation,
        status: "confirmed",
        createdAt: new Date().toISOString(),
        customerNotes: "",
        visitCount: 1,
      };

      setReservations((prev) => [reservation, ...prev]);
      setNewReservation({
        customerName: "",
        phone: "",
        email: "",
        date: "",
        time: "",
        guests: 2,
        specialRequests: "",
      });
      setShowAddReservation(false);
      alert("Reservation added successfully! ✅");
    } else {
      alert("Please fill in required fields: Name, Date, and Time");
    }
  };

  // 2. GENERATE REPORT FUNCTIONALITY
  const getPopularMenuItems = () => {
    const allItems = orders.flatMap((order) => order.items);
    const itemCount = {};

    allItems.forEach((item) => {
      itemCount[item.name] = (itemCount[item.name] || 0) + item.quantity;
    });

    return Object.entries(itemCount)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 5)
      .map(([name, count]) => ({ name, count }));
  };

  const generateReport = () => {
    const report = {
      generatedAt: new Date().toLocaleString(),
      totalReservations: reservations.length,
      confirmedReservations: reservations.filter(
        (r) => r.status === "confirmed"
      ).length,
      pendingReservations: reservations.filter((r) => r.status === "pending")
        .length,
      cancelledReservations: reservations.filter(
        (r) => r.status === "cancelled"
      ).length,
      totalOrders: orders.length,
      completedOrders: orders.filter((o) => o.status === "completed").length,
      popularItems: getPopularMenuItems(),
      reservations: reservations,
      orders: orders,
    };

    setReportData(report);
    setShowReportPreview(true);
  };

  // 3. DOWNLOAD REPORT AS PDF
  const downloadReportAsPDF = () => {
    if (!reportData) return;

    // Create a new window for PDF generation
    const printWindow = window.open("", "_blank");

    const reportDate = new Date().toISOString().split("T")[0];
    const restaurantName = "Canoe Restaurant";

    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>Canoe Restaurant Report - ${reportDate}</title>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
          
          body {
            font-family: 'Inter', sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 1000px;
            margin: 0 auto;
            padding: 40px;
            background-color: #fff;
          }
          
          .header {
            text-align: center;
            margin-bottom: 40px;
            padding-bottom: 20px;
            border-bottom: 3px solid #e63946;
          }
          
          .header h1 {
            color: #e63946;
            margin-bottom: 5px;
            font-size: 32px;
          }
          
          .header .subtitle {
            color: #666;
            font-size: 16px;
          }
          
          .stats-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
            margin-bottom: 40px;
          }
          
          .stat-card {
            background: #f9f4f0;
            padding: 20px;
            border-radius: 10px;
            border-left: 4px solid #e63946;
          }
          
          .stat-value {
            font-size: 28px;
            font-weight: 700;
            color: #e63946;
            margin-bottom: 5px;
          }
          
          .stat-label {
            font-size: 14px;
            color: #666;
          }
          
          .section {
            margin-bottom: 40px;
          }
          
          .section-title {
            color: #e63946;
            border-bottom: 2px solid #eee;
            padding-bottom: 10px;
            margin-bottom: 20px;
            font-size: 22px;
          }
          
          table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 30px;
            font-size: 14px;
          }
          
          th {
            background-color: #f9f4f0;
            color: #e63946;
            text-align: left;
            padding: 12px 15px;
            font-weight: 600;
            border-bottom: 2px solid #eee;
          }
          
          td {
            padding: 10px 15px;
            border-bottom: 1px solid #eee;
          }
          
          .status-badge {
            display: inline-block;
            padding: 4px 12px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: 600;
            text-transform: uppercase;
          }
          
          .confirmed {
            background-color: #d4edda;
            color: #155724;
          }
          
          .pending {
            background-color: #fff3cd;
            color: #856404;
          }
          
          .cancelled {
            background-color: #f8d7da;
            color: #721c24;
          }
          
          .footer {
            margin-top: 50px;
            padding-top: 20px;
            border-top: 2px solid #eee;
            text-align: center;
            color: #666;
            font-size: 14px;
          }
          
          @media print {
            .no-print {
              display: none !important;
            }
            
            .stat-card {
              break-inside: avoid;
            }
          }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>${restaurantName}</h1>
          <p class="subtitle">Business Intelligence Report</p>
          <p><strong>Generated:</strong> ${reportData.generatedAt}</p>
        </div>
        
        <div class="stats-grid">
          <div class="stat-card">
            <div class="stat-value">${reportData.totalReservations}</div>
            <div class="stat-label">Total Reservations</div>
          </div>
          
          <div class="stat-card">
            <div class="stat-value">${reportData.confirmedReservations}</div>
            <div class="stat-label">Confirmed Reservations</div>
          </div>
          
          <div class="stat-card">
            <div class="stat-value">${reportData.pendingReservations}</div>
            <div class="stat-label">Pending Reservations</div>
          </div>
          
          <div class="stat-card">
            <div class="stat-value">${reportData.cancelledReservations}</div>
            <div class="stat-label">Cancelled Reservations</div>
          </div>
          
          <div class="stat-card">
            <div class="stat-value">${reportData.totalOrders}</div>
            <div class="stat-label">Total Orders</div>
          </div>
          
          <div class="stat-card">
            <div class="stat-value">${reportData.completedOrders}</div>
            <div class="stat-label">Completed Orders</div>
          </div>
        </div>
        
        <div class="section">
          <h2 class="section-title">Reservation Overview</h2>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Customer</th>
                <th>Date</th>
                <th>Time</th>
                <th>Guests</th>
                <th>Status</th>
                <th>Special Requests</th>
              </tr>
            </thead>
            <tbody>
              ${reportData.reservations
                .map(
                  (reservation) => `
                <tr>
                  <td>#${reservation.id}</td>
                  <td>${reservation.customerName}</td>
                  <td>${reservation.date}</td>
                  <td>${reservation.time}</td>
                  <td>${reservation.guests}</td>
                  <td>
                    <span class="status-badge ${reservation.status}">
                      ${reservation.status}
                    </span>
                  </td>
                  <td>${reservation.specialRequests || "None"}</td>
                </tr>
              `
                )
                .join("")}
            </tbody>
          </table>
        </div>
        
        <div class="section">
          <h2 class="section-title">Popular Menu Items</h2>
          <table>
            <thead>
              <tr>
                <th>Rank</th>
                <th>Item Name</th>
                <th>Quantity Ordered</th>
              </tr>
            </thead>
            <tbody>
              ${reportData.popularItems
                .map(
                  (item, index) => `
                <tr>
                  <td>${index + 1}</td>
                  <td>${item.name}</td>
                  <td>${item.count}</td>
                </tr>
              `
                )
                .join("")}
            </tbody>
          </table>
        </div>
        
        <div class="section">
          <h2 class="section-title">Order Summary</h2>
          <table>
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Items</th>
                <th>Total</th>
                <th>Status</th>
                <th>Type</th>
              </tr>
            </thead>
            <tbody>
              ${reportData.orders
                .map(
                  (order) => `
                <tr>
                  <td>#${order.id}</td>
                  <td>${order.customerName}</td>
                  <td>${order.items
                    .map((item) => `${item.quantity}x ${item.name}`)
                    .join(", ")}</td>
                  <td>$${order.total.toFixed(2)}</td>
                  <td>
                    <span class="status-badge ${
                      order.status === "completed" ? "confirmed" : "pending"
                    }">
                      ${order.status}
                    </span>
                  </td>
                  <td>${order.type}</td>
                </tr>
              `
                )
                .join("")}
            </tbody>
          </table>
        </div>
        
        <div class="footer">
          <p>Report generated by Canoe Restaurant Management System</p>
          <p>Confidential - For internal use only</p>
        </div>
        
        <script>
          // Auto-print and close after a delay
          setTimeout(() => {
            window.print();
            setTimeout(() => {
              window.close();
            }, 1000);
          }, 500);
        </script>
      </body>
      </html>
    `);

    printWindow.document.close();
  };

  // 4. VIEW CALENDAR FUNCTIONALITY
  const CalendarView = () => {
    const today = new Date();
    const next7Days = Array.from({ length: 7 }, (_, i) => {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      return date.toISOString().split("T")[0];
    });

    const getReservationsForDate = (date) => {
      return reservations.filter((res) => res.date === date);
    };

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-primary">
              Reservation Calendar
            </h2>
            <button
              onClick={() => setShowCalendar(false)}
              className="text-gray-500 hover:text-gray-700 text-2xl"
            >
              ×
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-4">
            {next7Days.map((date, index) => {
              const dayReservations = getReservationsForDate(date);
              const dateObj = new Date(date);
              const isToday = date === today.toISOString().split("T")[0];

              return (
                <div
                  key={date}
                  className={`border rounded-lg p-3 ${
                    isToday
                      ? "bg-primary/10 border-primary"
                      : "bg-gray-50 dark:bg-gray-700"
                  }`}
                >
                  <div className="font-semibold text-sm mb-2">
                    {dateObj.toLocaleDateString("en-US", { weekday: "short" })}
                    <br />
                    {dateObj.toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })}
                    {isToday && (
                      <span className="text-primary text-xs ml-1">(Today)</span>
                    )}
                  </div>

                  <div className="space-y-2">
                    {dayReservations.length === 0 ? (
                      <p className="text-xs text-gray-500">No reservations</p>
                    ) : (
                      dayReservations.map((res) => (
                        <div
                          key={res.id}
                          className="text-xs p-2 bg-white dark:bg-gray-600 rounded border"
                        >
                          <div className="font-medium">{res.customerName}</div>
                          <div>
                            {res.time} • {res.guests} guests
                          </div>
                          <div
                            className={`inline-block px-1 rounded text-xs ${
                              res.status === "confirmed"
                                ? "bg-green-100 text-green-800"
                                : res.status === "pending"
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-red-100 text-red-800"
                            }`}
                          >
                            {res.status}
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-6 flex justify-between items-center">
            <div className="text-sm text-gray-600 dark:text-gray-300">
              Total: {reservations.length} reservations • Confirmed:{" "}
              {reservations.filter((r) => r.status === "confirmed").length}
            </div>
            <button
              onClick={() => setShowCalendar(false)}
              className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90"
            >
              Close Calendar
            </button>
          </div>
        </div>
      </div>
    );
  };

  // Add Reservation Modal
  const AddReservationModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 max-w-md w-full">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-primary">
            Add New Reservation
          </h2>
          <button
            onClick={() => setShowAddReservation(false)}
            className="text-gray-500 hover:text-gray-700 text-2xl"
          >
            ×
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Customer Name *
            </label>
            <input
              type="text"
              value={newReservation.customerName}
              onChange={(e) =>
                setNewReservation((prev) => ({
                  ...prev,
                  customerName: e.target.value,
                }))
              }
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="Full name"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Phone</label>
              <input
                type="tel"
                value={newReservation.phone}
                onChange={(e) =>
                  setNewReservation((prev) => ({
                    ...prev,
                    phone: e.target.value,
                  }))
                }
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="+251 ..."
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                value={newReservation.email}
                onChange={(e) =>
                  setNewReservation((prev) => ({
                    ...prev,
                    email: e.target.value,
                  }))
                }
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="email@example.com"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Date *</label>
              <input
                type="date"
                value={newReservation.date}
                onChange={(e) =>
                  setNewReservation((prev) => ({
                    ...prev,
                    date: e.target.value,
                  }))
                }
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                min={new Date().toISOString().split("T")[0]}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Time *</label>
              <input
                type="time"
                value={newReservation.time}
                onChange={(e) =>
                  setNewReservation((prev) => ({
                    ...prev,
                    time: e.target.value,
                  }))
                }
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Number of Guests
            </label>
            <select
              value={newReservation.guests}
              onChange={(e) =>
                setNewReservation((prev) => ({
                  ...prev,
                  guests: parseInt(e.target.value),
                }))
              }
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                <option key={num} value={num}>
                  {num} {num === 1 ? "guest" : "guests"}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Special Requests
            </label>
            <textarea
              value={newReservation.specialRequests}
              onChange={(e) =>
                setNewReservation((prev) => ({
                  ...prev,
                  specialRequests: e.target.value,
                }))
              }
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              rows="3"
              placeholder="Any special requirements..."
            />
          </div>
        </div>

        <div className="flex gap-3 mt-6">
          <button
            onClick={handleAddReservation}
            className="flex-1 bg-primary text-white py-3 rounded-lg hover:bg-primary/90 font-semibold transition-colors"
          >
            <FaPlus className="inline mr-2" />
            Add Reservation
          </button>
          <button
            onClick={() => setShowAddReservation(false)}
            className="flex-1 bg-gray-500 text-white py-3 rounded-lg hover:bg-gray-600 transition-colors"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );

  // View Details Modal
  const handleViewDetails = (reservation) => {
    setSelectedReservation(reservation);
    setShowDetailsModal(true);
  };

  const ReservationDetailsModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-primary">
            Reservation Details
          </h2>
          <button
            onClick={() => setShowDetailsModal(false)}
            className="text-gray-500 hover:text-gray-700 text-2xl"
          >
            ×
          </button>
        </div>

        {selectedReservation && (
          <div className="space-y-6">
            {/* Customer Information */}
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-primary mb-4 flex items-center gap-2">
                <FaUser />
                Customer Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <FaUser className="text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Full Name
                    </p>
                    <p className="font-semibold">
                      {selectedReservation.customerName}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <FaPhone className="text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Phone
                    </p>
                    <p className="font-semibold">{selectedReservation.phone}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <FaEnvelope className="text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Email
                    </p>
                    <p className="font-semibold">{selectedReservation.email}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <FaStar className="text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Visits
                    </p>
                    <p className="font-semibold">
                      {selectedReservation.visitCount || 1} time(s)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Reservation Details */}
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-primary mb-4 flex items-center gap-2">
                <FaCalendar />
                Reservation Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <FaCalendar className="text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Date
                    </p>
                    <p className="font-semibold">{selectedReservation.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <FaClock className="text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Time
                    </p>
                    <p className="font-semibold">{selectedReservation.time}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <FaUsers className="text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Guests
                    </p>
                    <p className="font-semibold">
                      {selectedReservation.guests} people
                    </p>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Status
                  </p>
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                      selectedReservation.status
                    )}`}
                  >
                    {selectedReservation.status.toUpperCase()}
                  </span>
                </div>
              </div>
            </div>

            {/* Special Requests */}
            {selectedReservation.specialRequests && (
              <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
                  Special Requests
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {selectedReservation.specialRequests}
                </p>
              </div>
            )}

            {/* Customer Notes */}
            {selectedReservation.customerNotes && (
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-2">
                  Customer Notes
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {selectedReservation.customerNotes}
                </p>
              </div>
            )}

            {/* System Information */}
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-primary mb-4">
                System Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-600 dark:text-gray-300">
                    Reservation ID
                  </p>
                  <p className="font-mono font-semibold">
                    #{selectedReservation.id}
                  </p>
                </div>
                <div>
                  <p className="text-gray-600 dark:text-gray-300">Created</p>
                  <p className="font-semibold">
                    {selectedReservation.createdAt}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="mt-6 flex justify-end gap-3">
          <button
            onClick={() => setShowDetailsModal(false)}
            className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );

  // Report Preview Modal
  const ReportPreviewModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 max-w-6xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-primary">Report Preview</h2>
          <button
            onClick={() => setShowReportPreview(false)}
            className="text-gray-500 hover:text-gray-700 text-2xl"
          >
            ×
          </button>
        </div>

        {reportData && (
          <div className="space-y-8">
            {/* Header */}
            <div className="text-center border-b pb-6">
              <h1 className="text-3xl font-bold text-primary mb-2">
                Canoe Restaurant
              </h1>
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                Business Intelligence Report
              </p>
              <p className="text-sm text-gray-500 mt-2">
                <strong>Generated:</strong> {reportData.generatedAt}
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl p-4 border border-primary/20">
                <div className="text-2xl font-bold text-primary mb-1">
                  {reportData.totalReservations}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  Total Reservations
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-100 to-green-50 rounded-xl p-4 border border-green-200">
                <div className="text-2xl font-bold text-green-600 mb-1">
                  {reportData.confirmedReservations}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  Confirmed
                </div>
              </div>

              <div className="bg-gradient-to-r from-yellow-100 to-yellow-50 rounded-xl p-4 border border-yellow-200">
                <div className="text-2xl font-bold text-yellow-600 mb-1">
                  {reportData.pendingReservations}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  Pending
                </div>
              </div>

              <div className="bg-gradient-to-r from-red-100 to-red-50 rounded-xl p-4 border border-red-200">
                <div className="text-2xl font-bold text-red-600 mb-1">
                  {reportData.cancelledReservations}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  Cancelled
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-100 to-blue-50 rounded-xl p-4 border border-blue-200">
                <div className="text-2xl font-bold text-blue-600 mb-1">
                  {reportData.totalOrders}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  Total Orders
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-100 to-purple-50 rounded-xl p-4 border border-purple-200">
                <div className="text-2xl font-bold text-purple-600 mb-1">
                  {reportData.completedOrders}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  Completed Orders
                </div>
              </div>
            </div>

            {/* Reservations Section */}
            <div>
              <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                <FaCalendarAlt />
                Reservation Overview ({reportData.reservations.length})
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-gray-50 dark:bg-gray-700">
                    <tr>
                      <th className="py-2 px-3 text-left">Customer</th>
                      <th className="py-2 px-3 text-left">Date & Time</th>
                      <th className="py-2 px-3 text-left">Guests</th>
                      <th className="py-2 px-3 text-left">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    {reportData.reservations.slice(0, 10).map((reservation) => (
                      <tr
                        key={reservation.id}
                        className="hover:bg-gray-50 dark:hover:bg-gray-700"
                      >
                        <td className="py-2 px-3">
                          <div className="font-medium">
                            {reservation.customerName}
                          </div>
                          <div className="text-xs text-gray-500">
                            {reservation.phone}
                          </div>
                        </td>
                        <td className="py-2 px-3">
                          <div>{reservation.date}</div>
                          <div className="text-xs text-gray-500">
                            {reservation.time}
                          </div>
                        </td>
                        <td className="py-2 px-3">
                          <span className="px-2 py-1 bg-gray-100 dark:bg-gray-600 rounded text-xs">
                            {reservation.guests} guests
                          </span>
                        </td>
                        <td className="py-2 px-3">
                          <span
                            className={`px-2 py-1 rounded text-xs ${
                              reservation.status === "confirmed"
                                ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                                : reservation.status === "pending"
                                ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                                : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                            }`}
                          >
                            {reservation.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {reportData.reservations.length > 10 && (
                  <div className="text-center py-3 text-sm text-gray-500">
                    ... and {reportData.reservations.length - 10} more
                    reservations
                  </div>
                )}
              </div>
            </div>

            {/* Popular Items Section */}
            <div>
              <h3 className="text-xl font-bold text-primary mb-4">
                Popular Menu Items
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {reportData.popularItems.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-700 border rounded-lg p-4"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-lg font-semibold text-gray-800 dark:text-white">
                        #{index + 1} {item.name}
                      </span>
                      <span className="text-2xl font-bold text-primary">
                        {item.count}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                      <div
                        className="bg-primary h-2 rounded-full"
                        style={{
                          width: `${
                            (item.count /
                              (reportData.popularItems[0]?.count || 1)) *
                            100
                          }%`,
                        }}
                      ></div>
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      Total orders
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Orders Summary */}
            <div>
              <h3 className="text-xl font-bold text-primary mb-4">
                Orders Summary
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white dark:bg-gray-700 border rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-bold text-green-600">
                        {reportData.completedOrders}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">
                        Completed Orders
                      </div>
                    </div>
                    <FaCheck className="text-3xl text-green-500" />
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-700 border rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-bold text-yellow-600">
                        {reportData.totalOrders - reportData.completedOrders}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">
                        Active Orders
                      </div>
                    </div>
                    <FaClock className="text-3xl text-yellow-500" />
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Actions */}
            <div className="border-t pt-6">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  <p>
                    <strong>Report Summary:</strong>
                  </p>
                  <p>
                    • {reportData.totalReservations} total reservations across
                    all statuses
                  </p>
                  <p>
                    • Most popular item:{" "}
                    {reportData.popularItems[0]?.name || "N/A"}
                  </p>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={downloadReportAsPDF}
                    className="bg-red-600 text-white py-2 px-6 rounded-lg hover:bg-red-700 transition-colors flex items-center gap-2 font-semibold"
                  >
                    <FaFileExport />
                    Download as PDF
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="mt-6 flex justify-end">
          <button
            onClick={() => setShowReportPreview(false)}
            className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition-colors"
          >
            Close Preview
          </button>
        </div>
      </div>
    </div>
  );

  // Reservation management functions
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

  // Show loading while checking authentication
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#f9f4f0] dark:bg-gray-900 pt-20 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-t-4 border-primary border-solid rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-300">
            Checking authentication...
          </p>
        </div>
      </div>
    );
  }

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
          <div className="flex justify-between items-center mb-4">
            <div className="flex-1"></div>
            <h1 className="text-4xl md:text-5xl font-serif italic font-bold flex-1">
              Admin Dashboard
            </h1>
            <div className="flex-1 flex justify-end">
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg transition-colors"
              >
                <FaSignOutAlt />
                Logout
              </button>
            </div>
          </div>
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
                              onClick={() => handleViewDetails(reservation)}
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
            <button
              onClick={() => setShowAddReservation(true)}
              className="bg-primary text-white py-3 px-4 rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
            >
              <FaPlus />
              Add New Reservation
            </button>
            <button
              onClick={generateReport}
              className="bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
            >
              <FaFileExport />
              Generate Report
            </button>
            <button
              onClick={() => setShowCalendar(true)}
              className="bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
            >
              <FaCalendarAlt />
              View Calendar
            </button>
          </div>
        </div>
      </div>

      {/* Render Modals */}
      {showAddReservation && <AddReservationModal />}
      {showCalendar && <CalendarView />}
      {showDetailsModal && <ReservationDetailsModal />}
      {showReportPreview && <ReportPreviewModal />}
    </section>
  );
};

export default Admin;
