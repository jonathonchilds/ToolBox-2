import React from "react";

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

type Product = {
  id: string;
  name: string;
  price: number;
};

function App() {
  const products: Product[] = [
    {
      id: "test",
      name: "Hammer",
      price: 10.99,
    },
  ];

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
        <Route path="/:id" element={<SingleToolDetails />} />
        <Route path="/tools/:id/edit" element={<EditTool />} />
        <Route
          path="/checkout"
          element={<CheckoutPage products={products} />}
        />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
