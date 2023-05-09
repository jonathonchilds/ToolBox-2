import React, { useState } from "react";

import "./index.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Search from "./pages/Search";
import AddATool from "./pages/AddATool";
import SingleToolDetails from "./pages/SingleToolDetails";
import CheckoutPage from "./pages/Checkout";
import About from "./pages/About";
import SignUp from "./pages/SignUp";
import EditTool from "./pages/EditTool";
import { ToolType } from "./types";

function App() {
  const [cartItems, setCartItems] = useState<ToolType[]>([]);

  const addToolToCart = (tool: ToolType) => {
    setCartItems((prevCartItems) => [...prevCartItems, tool]);
  };

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/add-a-tool" element={<AddATool />} />
        <Route path="/about" element={<About />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route
          path="/:id"
          element={<SingleToolDetails addToCart={addToolToCart} />}
        />
        <Route path="/tools/:id/edit" element={<EditTool />} />
        <Route
          path="/checkout"
          element={<CheckoutPage products={cartItems} />}
        />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
