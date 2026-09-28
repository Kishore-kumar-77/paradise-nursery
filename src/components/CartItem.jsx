
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../redux/CartSlice";
import "./CartItem.css";

function CartNavbar() {
  const cartItems = useSelector((state) => state.cart.items);

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">🌿 Paradise Nursery</Link>
      </div>

      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/plants">Plants</Link>
        <Link to="/cart">
          🛒 Cart ({cartCount})
        </Link>
      </div>
    </nav>
  );
}

function CartItem() {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const totalPlants = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    alert("Coming Soon");
  };

  if (cartItems.length === 0) {
    return (
      <div>
        <CartNavbar />

        <main className="empty-cart">
          <h1>Your Shopping Cart</h1>
          <p>Your cart is currently empty.</p>

          <Link to="/plants" className="continue-shopping">
            Continue Shopping
          </Link>
        </main>
      </div>
    );
  }

  return (
    <div>
      <CartNavbar />

      <main className="cart-page">
        <h1>Shopping Cart</h1>

        <div className="cart-summary">
          <h2>Total Plants: {totalPlants}</h2>
          <h2>Total Amount: ₹{totalAmount}</h2>
        </div>

        <div className="cart-items">
          {cartItems.map((item) => {
            const itemTotal = item.price * item.quantity;

            return (
              <div className="cart-item" key={item.id}>
                <img
                  src={item.image}
                  alt={item.name}
                  className="cart-item-image"
                />

                <div className="cart-item-details">
                  <h2>{item.name}</h2>

                  <p>
                    Unit Price: ₹{item.price}
                  </p>

                  <p>
                    Item Total: ₹{itemTotal}
                  </p>

                  <div className="quantity-controls">
                    <button
                      onClick={() =>
                        dispatch(decreaseQuantity(item.id))
                      }
                    >
                      −
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      onClick={() =>
                        dispatch(increaseQuantity(item.id))
                      }
                    >
                      +
                    </button>
                  </div>

                  <button
                    className="delete-btn"
                    onClick={() =>
                      dispatch(removeFromCart(item.id))
                    }
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="cart-footer">
          <h2>Total: ₹{totalAmount}</h2>

          <div className="cart-buttons">
            <Link
              to="/plants"
              className="continue-shopping"
            >
              Continue Shopping
            </Link>

            <button
              className="checkout-btn"
              onClick={handleCheckout}
            >
              Checkout
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default CartItem;

