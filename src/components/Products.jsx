import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Productss from "./Productss";

const Products = ({ addToCart }) => {
  const navigate = useNavigate();

  // Object to store quantity for each product
  const [quantities, setQuantities] = useState({});

  // Function to increase quantity
  const increaseQty = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: (prev[id] || 1) + 1,
    }));
  };

  // Function to decrease quantity (minimum 1)
  const decreaseQty = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: prev[id] > 1 ? prev[id] - 1 : 1,
    }));
  };

  // Add to Cart Function
  const handleAddToCart = (product) => {
    addToCart({ ...product, quantity: quantities[product.id] || 1 });
    navigate("/cart");
  };

  return (
    <>
      <div className="max-w-4xl mx-auto p-6">
        {Productss.map((product) => (
          <div
            key={product.id}
            className="flex flex-col md:flex-row items-center mb-8 border-b pb-4"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-48 md:w-72  bg-yellow-400  rounded-lg shadow-gray-700 shadow-xl"
            />

            <div className="md:ml-8 mt-6 md:mt-0">
              <h1 className="text-3xl font-bold text-gray-900">
                {product.title}
              </h1>
              <p className="text-xl text-green-600 font-semibold mt-2">
                ₹{product.price}
              </p>
              <p className="text-gray-700 mt-4">
                Refreshing {product.title.toLowerCase()} made with high-quality
                ingredients. Perfect for summer!
              </p>

              {/* Quantity Selector & Add to Cart */}
              <div className="mt-4 flex items-center space-x-4">
                <div className="flex items-center border rounded-md px-3 py-1 bg-gray-100">
                  <button
                    onClick={() => decreaseQty(product.id)}
                    className="text-lg px-2 py-1 font-bold"
                  >
                    -
                  </button>
                  <span className="px-3 text-lg">
                    {quantities[product.id] || 1}
                  </span>
                  <button
                    onClick={() => increaseQty(product.id)}
                    className="text-lg px-2 py-1 font-bold"
                  >
                    +
                  </button>
                </div>

                {/* Add to Cart Button */}
                <button
                  onClick={() => handleAddToCart(product)}
                  className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded"
                >
                  Add to Cart
                </button>
              </div>

              {/* Product Highlights */}
              <p className="text-gray-700 mt-8">{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;
