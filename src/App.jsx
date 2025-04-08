// import "./App.css";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { useState, useEffect } from "react";
// import Navbar from "./components/Navbar";
// import Home from "./components/Home";
// import Products from "./components/Products";
// import Cart from "./components/Cart";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";
// import Checkout from "./components/Checkout";

// function App() {
//   const [loading, setLoading] = useState(true);
//   const [cart, setCart] = useState(() => {
//     const savedCart = localStorage.getItem("cart");
//     return savedCart ? JSON.parse(savedCart) : [];
//   });

//   const addToCart = (product) => {
//     const qtyToAdd = product.quantity || 1;

//     setCart((prevCart) => {
//       const existingItem = prevCart.find((item) => item.id === product.id);
//       let updatedCart;

//       if (existingItem) {
//         updatedCart = prevCart.map((item) =>
//           item.id === product.id
//             ? { ...item, quantity: item.quantity + qtyToAdd }
//             : item
//         );
//       } else {
//         updatedCart = [...prevCart, { ...product, quantity: qtyToAdd }];
//       }

//       localStorage.setItem("cart", JSON.stringify(updatedCart));
//       return updatedCart;
//     });
//   };

//   const removeFromCart = (id) => {
//     setCart((prevCart) => {
//       const updatedCart = prevCart.filter((item) => item.id !== id);
//       localStorage.setItem("cart", JSON.stringify(updatedCart));
//       return updatedCart;
//     });
//   };

//   useEffect(() => {
//     // 2 sec wait and remove loading screen
//     setTimeout(() => {
//       setLoading(false);
//     }, 2000);
//   }, []);

//   return (
//     <>

//     <div>
//       {loading ? (
//         // Loading screen
//         <div className="flex items-center justify-center h-screen text-5xl font-bold text-white">
//           Loading...
//         </div>
//       ) :(
//     <div className="h-screen overflow-y-scroll scrollbar scrollbar-thumb-yellow-400 scrollbar-track-black ">
//       <Router>
//         <Navbar cartCount={cart.length} />
//         <Routes>
//           <Route path="/" element={<Home addToCart={addToCart} />} />
//           <Route path="/product" element={<Products addToCart={addToCart} />} />
//           <Route
//             path="/cart"
//             element={
//               <Cart
//                 cart={cart}
//                 removeFromCart={removeFromCart}
//                 setCart={setCart}
//               />
//             }
//           />
//           <Route path="/contact" element={<Contact />} />
//           <Route
//             path="/checkout"
//             element={<Checkout cart={cart} setCart={setCart} />}
//           />
//         </Routes>
//         <Footer />
//       </Router>
//     </div>
//   );
//   </>
// }

// export default App;

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Checkout from "./components/Checkout";

function App() {
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const addToCart = (product) => {
    const qtyToAdd = product.quantity || 1;

    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      let updatedCart;

      if (existingItem) {
        updatedCart = prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + qtyToAdd }
            : item
        );
      } else {
        updatedCart = [...prevCart, { ...product, quantity: qtyToAdd }];
      }

      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter((item) => item.id !== id);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {loading ? (
        <div className="flex items-center justify-center h-screen text-5xl font-bold text-black">
          Loading...
        </div>
      ) : (
        <div className="h-screen overflow-y-scroll scrollbar scrollbar-thumb-yellow-400 scrollbar-track-black">
          <Router>
            <Navbar cartCount={cart.length} />
            <Routes>
              <Route path="/" element={<Home addToCart={addToCart} />} />
              <Route
                path="/product"
                element={<Products addToCart={addToCart} />}
              />
              <Route
                path="/cart"
                element={
                  <Cart
                    cart={cart}
                    removeFromCart={removeFromCart}
                    setCart={setCart}
                  />
                }
              />
              <Route path="/contact" element={<Contact />} />
              <Route
                path="/checkout"
                element={<Checkout cart={cart} setCart={setCart} />}
              />
            </Routes>
            <Footer />
          </Router>
        </div>
      )}
    </>
  );
}

export default App;
