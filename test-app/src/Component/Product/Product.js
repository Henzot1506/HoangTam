import Navi from "../Navbar/nav";
import React, { useEffect, useState } from "react";
import "../Product/Product.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Footer from "../Home/Footer";

function Product() {
  const [products, setProducts] = useState([]);
  let navigate = useNavigate(); //Gọi useNavigate để sử dụng
  //Lấy data từ API
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.log(error));
  }, []);
  const handleViewButton = (product) => {
    navigate(`/product/${product.id}`);
  };
  return (
    <div className="container">
      <Navi />
      <div className="product-grid">
        {/* Hiển thị các sản phẩm */}
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <div>
              <b>{product.title}</b>
            </div>
            <img
              src={product.image}
              alt={product.title}
              className="product-img"
            />
            <div>Category: {product.category}</div>
            <div>Price: ${product.price}</div>
            <div>
              Rate: {product.rating.rate} Count: {product.rating.count}
            </div>
            <div>
              <button
                className="button-view"
                onClick={() => handleViewButton(product)}
              >
                View
              </button>
              <button className="button-card">Add To Card</button>
            </div>
          </div>
        ))}
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default Product;
