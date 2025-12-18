import React, { useEffect, useState } from "react";

const PaymentPage = () => {
  const [orderItems, setOrderItems] = useState([]);
  const [step, setStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [customer, setCustomer] = useState({
    name: "",
    phone: "",
  });

  // Load order from localStorage
  useEffect(() => {
    const storedOrder = localStorage.getItem("orderItems");
    if (storedOrder) {
      setOrderItems(JSON.parse(storedOrder));
    }
  }, []);

  // Calculate total birr safely
  const totalBirr = orderItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleNext = () => {
    if (!customer.name || !customer.phone || !paymentMethod) {
      alert("Please fill all required fields");
      return;
    }
    setStep(2);
  };

  return (
    <section className="min-h-screen bg-gray-100 dark:bg-gray-900 py-16 px-4">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">
          Payment
        </h1>

        {/* STEP 1 */}
        {step === 1 && (
          <>
            {/* Order Summary */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-200">
                Order Summary
              </h2>

              {orderItems.length === 0 ? (
                <p className="text-gray-500">No items selected.</p>
              ) : (
                <ul className="space-y-3">
                  {orderItems.map((item) => (
                    <li
                      key={item.id}
                      className="flex justify-between border-b pb-2 text-gray-700 dark:text-gray-200"
                    >
                      <span>
                        {item.name} × {item.quantity}
                      </span>
                      <span>
                        ETB {item.price * item.quantity}
                      </span>
                    </li>
                  ))}
                </ul>
              )}

              <div className="flex justify-between mt-4 font-bold text-lg">
                <span>Total</span>
                <span className="text-yellow-500">
                  ETB {totalBirr}
                </span>
              </div>
            </div>

            {/* Customer Info */}
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <input
                type="text"
                placeholder="Full Name"
                value={customer.name}
                onChange={(e) =>
                  setCustomer({ ...customer, name: e.target.value })
                }
                className="px-4 py-3 rounded-xl border focus:ring-2 focus:ring-yellow-500 outline-none"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                value={customer.phone}
                onChange={(e) =>
                  setCustomer({ ...customer, phone: e.target.value })
                }
                className="px-4 py-3 rounded-xl border focus:ring-2 focus:ring-yellow-500 outline-none"
              />
            </div>

            {/* Payment Method */}
            <div className="mb-6">
              <p className="font-semibold mb-3">Choose Payment Method</p>

              <div className="flex gap-4">
                <button
                  onClick={() => setPaymentMethod("CBE")}
                  className={`flex-1 py-3 rounded-xl border ${
                    paymentMethod === "CBE"
                      ? "bg-yellow-500 text-black"
                      : "hover:bg-gray-100"
                  }`}
                >
                  Commercial Bank of Ethiopia
                </button>

                <button
                  onClick={() => setPaymentMethod("Telebirr")}
                  className={`flex-1 py-3 rounded-xl border ${
                    paymentMethod === "Telebirr"
                      ? "bg-yellow-500 text-black"
                      : "hover:bg-gray-100"
                  }`}
                >
                  Telebirr
                </button>
              </div>
            </div>

            <button
              onClick={handleNext}
              className="w-full py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition"
            >
              Continue
            </button>
          </>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <>
            <h2 className="text-xl font-semibold mb-6 text-gray-700 dark:text-gray-200">
              Payment Instructions
            </h2>

            {paymentMethod === "CBE" && (
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl mb-6">
                <p className="font-semibold mb-2">
                  Commercial Bank of Ethiopia
                </p>
                <p>Account Name: Canoe Cafe and Restaurant</p>
                <p>Account Number: 1000 1234 5678</p>
                <p className="mt-3 text-sm">
                  Reference: <b>{customer.name} - {customer.phone}</b>
                </p>
              </div>
            )}

            {paymentMethod === "Telebirr" && (
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl mb-6">
                <p className="font-semibold mb-2">Telebirr</p>
                <p>Telebirr Number: 0912 345 678</p>
                <p className="mt-3 text-sm">
                  Reference: <b>{customer.name} - {customer.phone}</b>
                </p>
              </div>
            )}

            <p className="text-sm text-gray-600 dark:text-gray-300">
              After sending <b>ETB {totalBirr}</b>, click below.
              Our reception will verify your payment manually.
            </p>

            <button className="w-full mt-6 py-3 bg-yellow-500 text-black font-semibold rounded-xl hover:bg-yellow-600">
              I Have Sent the Money
            </button>
          </>
        )}
      </div>
    </section>
  );
};

export default PaymentPage;
