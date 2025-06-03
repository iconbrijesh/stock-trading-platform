
import Navbar from "./Navbar.jsx";
import './App.css'
import { Routes, Route } from "react-router-dom";
import HomePage from "./landing_page/Home/HomePage";
import Signup from "./landing_page/Signup/Signup.jsx";
import About from "./landing_page/About/AboutPage.jsx";
import Product from "./landing_page/Products/ProductPage.jsx";
import Pricing from "./landing_page/Pricing/PricingPage.jsx";
import Support from "./landing_page/Support/SupportPage.jsx";
import Footer from "./Footer.jsx";
import NotFound from "./landing_page/NotFound.jsx";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/support" element={<Support />} />
         <Route path="*" element={<NotFound />} />
        

      </Routes>
      <Footer />
    </>
  );
};

export default App;
