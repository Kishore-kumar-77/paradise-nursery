
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../redux/CartSlice";
import "./ProductList.css";

const products = [
  // Indoor Plants
  {
    id: 1,
    name: "Snake Plant",
    price: 499,
    category: "Indoor Plants",
    image:
      "https://images.unsplash.com/photo-1593482892290-f54927ae2c17",
  },
  {
    id: 2,
    name: "Peace Lily",
    price: 599,
    category: "Indoor Plants",
    image:
      "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee",
  },
  {
    id: 3,
    name: "ZZ Plant",
    price: 699,
    category: "Indoor Plants",
    image:
      "https://images.unsplash.com/photo-1614594975525-e45190c55d0b",
  },
  {
    id: 4,
    name: "Spider Plant",
    price: 399,
    category: "Indoor Plants",
    image:
      "https://images.unsplash.com/photo-1572688484438-313a6e50c333",
  },
  {
    id: 5,
    name: "Rubber Plant",
    price: 799,
    category: "Indoor Plants",
    image:
      "https://images.unsplash.com/photo-1604762524889-3e2fcc145683",
  },
  {
    id: 6,
    name: "Areca Palm",
    price: 899,
    category: "Indoor Plants",
    image:
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6",
  },

  // Succulents
  {
    id: 7,
    name: "Aloe Vera",
    price: 349,
    category: "Succulents",
    image:
      "https://images.unsplash.com/photo-1509423350716-97f9360b4e09",
  },
  {
    id: 8,
    name: "Jade Plant",
    price: 449,
    category: "Succulents",
    image:
      "https://images.unsplash.com/photo-1597055181300-8e0b6a4b7c45",
  },
  {
    id: 9,
    name: "Echeveria",
    price: 299,
    category: "Succulents",
    image:
      "https://images.unsplash.com/photo-1515656380345-4e7c8c2b0b13",
  },
  {
    id: 10,
    name: "Haworthia",
    price: 329,
    category: "Succulents",
    image:
      "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc",
  },
  {
    id: 11,
    name: "Zebra Plant",
    price: 379,
    category: "Succulents",
    image:
      "https://images.unsplash.com/photo-1485955900006-10f4d324d411",
  },
  {
    id: 12,
    name: "Panda Plant",
    price: 399,
    category: "Succulents",
    image:
      "https://images.unsplash.com/photo-1497250681960-ef046c08a56e",
  },

  // Flowering Plants
  {
    id: 13,
    name: "Orchid",
    price: 899,
    category: "Flowering Plants",
    image:
      "https://images.unsplash.com/photo-1566958769312-82cef41d19ef",
  },
  {
    id: 14,
    name: "African Violet",
    price: 549,
    category: "Flowering Plants",
    image:
      "https://images.unsplash.com/photo-1497250681960-ef046c08a56e",
  },
  {
    id: 15,
    name: "Anthurium",
    price: 749,
    category: "Flowering Plants",
    image:
      "https://images.unsplash.com/photo-1598880940080-ff9a29891b85",
  },
  {
    id: 16,
    name: "Begonia",
    price: 499,
    category: "Flowering Plants",
    image:
      "https://images.unsplash.com/photo-1460039230329-eb070fc6c77c",
  },
  {
    id: 17,
    name: "Jasmine",
    price: 449,
    category: "Flowering Plants",
    image:
      "https://images.unsplash.com/photo-1597848212624-e8eebd6f4d18",
  },
  {
    id: 18,
    name: "Geranium",
    price: 529,
    category: "Flowering Plants",
    image:
      "https://images.unsplash.com/photo-1526047932273-341f2a7631f9",
  },
];

function Navbar() {
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

function ProductList() {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const isInCart = (productId) => {
    return cartItems.some((item) => item.id === productId);
  };

  const categories = [
    "Indoor Plants",
    "Succulents",
    "Flowering Plants",
  ];

  return (
    <div>
      <Navbar />

      <main className="products-page">
        <h1>Our Plants</h1>

        <p className="products-intro">
          Discover beautiful plants for your home and workspace.
        </p>

        {categories.map((category) => {
          const categoryProducts = products.filter(
            (product) => product.category === category
          );

          return (
            <section
              className="plant-category"
              key={category}
            >
              <h2 className="category-title">{category}</h2>

              <div className="product-grid">
                {categoryProducts.map((product) => (
                  <div
                    className="product-card"
                    key={product.id}
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                    />

                    <div className="product-info">
                      <h3>{product.name}</h3>

                      <p className="price">
                        ₹{product.price}
                      </p>

                      <button
                        className="add-cart-btn"
                        disabled={isInCart(product.id)}
                        onClick={() =>
                          dispatch(addToCart(product))
                        }
                      >
                        {isInCart(product.id)
                          ? "Added to Cart"
                          : "Add to Cart"}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          );
        })}
      </main>
    </div>
  );
}

export default ProductList;
