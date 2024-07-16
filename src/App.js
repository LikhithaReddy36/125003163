// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductList from "./pages/ProductList";
import ProductPage from "./pages/ProductPage";
import Navbar from "./components/Product";

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" exact element={<ProductList/>} />
        <Route path="/Product/:id" element={<ProductPage />} />
      </Routes>
    </Router>
  );
}

export default App;