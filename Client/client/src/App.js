
import React from "react"
import Home from "./pages/common/Home"
import About from "./pages/common/About"
import ProductForm from "./pages/product/addProduct/ProductForm"
import Header from "./components/layout/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      
      
      <div class="container">
        <Router>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<About />} />
            <Route path="/productform" element={<ProductForm />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}


export default App;
