import { useNavigate } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";

const Cart = ({ cart, removeFromCart, setCart }) => {
  const navigate = useNavigate();

  const totalAmount = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleRemove = (id) => {
    removeFromCart(id);
  };

  const updateQuantity = (id, delta) => {
    const updatedCart = cart.map((item) =>
      item.id === id
        ? {
            ...item,
            quantity: Math.max(1, item.quantity + delta),
          }
        : item
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <div className="min-h-screen pt-24 pb-10 bg-second px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800 border-b pb-4">
          🛒 Your Shopping Cart
        </h2>

        {cart.length === 0 ? (
          <div className="text-center text-gray-600 mt-12">
            <p className="text-xl">Your cart is empty.</p>
            <button
              onClick={() => navigate("/product")}
              className="mt-6 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-6 rounded-full transition"
            >
              Browse Products
            </button>
          </div>
        ) : (
          <>
            {cart.map((item) => (
              <div
                key={`${item.id}-${item.title}`}
                className="bg-yellow-400 p-4 rounded-lg shadow-md mb-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="flex flex-col w-full sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-start gap-4 w-full">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-4 w-full">
                          <h3 className="text-lg font-semibold text-gray-800">
                            {item.title}
                          </h3>
                          <p className="text-lg font-bold text-green-600 whitespace-nowrap block sm:hidden">
                            ₹{item.price * item.quantity}.00
                          </p>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">
                          ₹{item.price} × {item.quantity}
                        </p>

                        <div className="flex items-center gap-3 sm:hidden">
                          <div className="flex items-center border rounded-4xl px-3 bg-black">
                            <button
                              onClick={() => updateQuantity(item.id, -1)}
                              className="text-lg px-2 py-1 font-bold text-yellow"
                            >
                              -
                            </button>
                            <span className="px-3 text-lg text-yellow">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, 1)}
                              className="text-lg px-2 py-1 font-bold text-yellow"
                            >
                              +
                            </button>
                          </div>

                          <button
                            onClick={() => handleRemove(item.id)}
                            className="text-red-500 hover:text-red-700 text-xl"
                          >
                            <FaTrashAlt />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="hidden sm:flex items-center gap-6">
                    <div className="flex items-center border rounded-4xl px-3 bg-black">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="text-lg px-2 py-1 font-bold text-yellow"
                      >
                        -
                      </button>
                      <span className="px-3 text-lg text-yellow">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="text-lg px-2 py-1 font-bold text-yellow"
                      >
                        +
                      </button>
                    </div>

                    <button
                      onClick={() => handleRemove(item.id)}
                      className="text-red-500 hover:text-red-700 text-xl"
                    >
                      <FaTrashAlt />
                    </button>

                    <p className="text-lg font-bold text-green-600 whitespace-nowrap ml-32">
                      ₹{item.price * item.quantity}.00
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Total */}
            <div className="flex flex-col sm:flex-row justify-between items-center bg-yellow-400 p-6 rounded-lg shadow-md mt-6 gap-4">
              <span className="text-xl font-bold text-gray-700">
                Total Amount:
              </span>
              <span className="text-xl font-bold text-green-700">
                ₹{totalAmount}
              </span>
            </div>

            {/* Checkout Button */}
            {cart.length > 0 && (
              <div className="text-center sm:text-right mt-4">
                <button
                  onClick={() => navigate("/checkout")}
                  className="bg-black hover:bg-gray-900 text-yellow-400 font-bold py-2 px-6 rounded-full transition"
                >
                  Proceed to Checkout
                </button>
              </div>
            )}

            {/* Keep Shopping */}
            <div className="text-center sm:text-right mt-4">
              <button
                onClick={() => navigate("/product")}
                className="bg-black hover:bg-gray-900 text-yellow-400   font-bold py-2 px-6 rounded-full transition"
              >
                Keep Shopping
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
