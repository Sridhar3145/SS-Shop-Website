import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import fruitimg2 from "../assets/fruitimg2.webp";
import Productss from "../components/Productss";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = ({ addToCart }) => {
  const [quantities, setQuantities] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    AOS.refresh();
  }, []);

  const increaseQty = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: (prev[id] || 1) + 1,
    }));
  };

  const decreaseQty = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: prev[id] > 1 ? prev[id] - 1 : 1,
    }));
  };

  const handleAddToCart = (product) => {
    const quantity = quantities[product.id] || 1;
    addToCart({ ...product, quantity });
    navigate("/cart");
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full flex flex-col lg:flex-row items-center justify-between bg-fixed mt-24 px-6 lg:px-28 py-10 gap-8">
        <img src={fruitimg2} data-aos="fade-right" />
        <div className="text-center text-white px-4" data-aos="fade-left">
          <h1 className="text-5xl md:text-6xl font-bold drop-shadow-lg text-black">
            Cool <span className="text-white">Down</span> with Fresh Sarbath!
          </h1>
          <p className="text-lg md:text-xl mt-4 drop-shadow-md text-black">
            Taste the best flavors in town, made fresh for you. 🍹
          </p>
          <button
            onClick={() => navigate("/product")}
            className="mt-6 px-6 py-3 bg-black hover:bg-gray-900 text-yellow-400 font-semibold text-lg rounded-full shadow-lg transition"
            data-aos="zoom-in"
          >
            More Products
          </button>
        </div>
      </section>

      {/* Top Products Section */}
      <section className="mt-20 px-6 lg:px-28">
        <h1 className="text-3xl font-bold mb-6 text-center lg:text-left">
          Top Product's
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {Productss.slice(0, 3).map((product) => (
            <div
              key={product.id}
              className="w-full bg-yellow-400 rounded-xl shadow-md overflow-hidden transition-transform hover:scale-105 duration-300"
            >
              <div className="p-6 flex flex-col items-center">
                <h2 className="text-xl text-black font-semibold text-center mb-2">
                  {product.title}
                </h2>
                <img
                  src={product.image}
                  alt="product"
                  className="h-56 w-56 object-contain mb-4"
                />
                <p className="text-lg font-bold text-black mb-2">
                  ₹ {product.price}
                </p>

                <div className="flex sm:flex-row items-center justify-center w-full gap-10 mt-4">
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="bg-black hover:bg-gray-800 text-yellow px-4 py-2 rounded-full transition"
                  >
                    Add to Cart
                  </button>

                  <div className="flex items-center border rounded-full px-3 bg-black">
                    <button
                      onClick={() => decreaseQty(product.id)}
                      className="text-lg px-2 py-1 font-bold text-yellow"
                    >
                      -
                    </button>
                    <span className="px-3 text-lg text-yellow">
                      {quantities[product.id] || 1}
                    </span>
                    <button
                      onClick={() => increaseQty(product.id)}
                      className="text-lg px-2 py-1 font-bold text-yellow"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Show More Button */}
      <div className="mt-10 text-center lg:text-left px-6 lg:px-28">
        <button
          onClick={() => navigate("/product")}
          className="text-2xl font-medium hover:underline"
        >
          Show More Product's....
        </button>
      </div>
    </>
  );
};

export default Home;
