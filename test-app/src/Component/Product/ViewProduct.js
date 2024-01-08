import React from "react";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "../Product/Product.css";
import Navi from "../Navbar/nav";
import Footer from "../Home/Footer";
function ViewProduct(product) {
  const [products, setProducts] = useState([]);
  console.log("props in: ", product);
  let { id } = useParams();
  let navigate = useNavigate();
  // Lấy dữ liệu theo id
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => setProducts(response.data));
  }, [id]);
  //Xử lý nút Back
  const handleBackButton = () => {
    navigate(`/product`);
  };
  return (
    <>
      <Navi />
      {/* Hiển thị sản phẩm theo id đã được chọn */}
      <form className="product-display">
        <div>
          <b>{products.title}</b>
        </div>
        <img
          src={products.image}
          alt={products.title}
          className="product-img"
        />
        <div>Category: {products.category}</div>
        <div>Price: ${products.price}</div>
        <div>
          Rate: {products.rating?.rate} Count: {products.rating?.count}
        </div>
        <p>Description</p>
        <div className="description">{products.description}</div>
      </form>
      <div className="back-button">
        <button onClick={() => handleBackButton()}>Back</button>
      </div>
      <Footer></Footer>
    </>
  );
}

export default ViewProduct;
