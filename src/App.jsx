import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";

function Home() {
  return (
    <div className="landing-page">
      <div className="landing-overlay">
        <div className="landing-content">
          <h1>Paradise Nursery</h1>

          <p>
            Welcome to Paradise Nursery, your online destination for
            beautiful and healthy houseplants. Explore our collection
            of indoor plants, succulents, and flowering plants to
            bring nature and freshness into your home.
          </p>

          <Link to="/plants" className="get-started-btn">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}

function Plants() {
  return (
    <div className="products-page">
      <h1>Paradise Nursery Plants</h1>
      <p>Explore our collection of beautiful houseplants.</p>
    </div>
  );
}

function Cart() {
  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>
      <p>Your selected plants will appear here.</p>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plants" element={<Plants />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
