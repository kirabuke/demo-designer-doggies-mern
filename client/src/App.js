import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ProductPage from "./components/products/ProductPage";
import NotFoundPage from "./components/NotFoundPage";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route exact path="/" element={<ProductPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
