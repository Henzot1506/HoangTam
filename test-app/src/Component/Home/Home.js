import Navi from "../Navbar/nav";
import Footer from "./Footer";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Home.css";
function Home() {
  const [products, setProducts] = useState([]);
  const [currentProductIndex, setCurrentProductIndex] = useState(0);
  useEffect(() => {
    // Gọi API để lấy danh sách sản phẩm
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    // Thiết lập interval để tự động chuyển đổi sản phẩm sau mỗi 3 giây
    const intervalId = setInterval(() => {
      setCurrentProductIndex((prevIndex) =>
        prevIndex === products.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    // Xóa interval khi component bị unmount
    return () => clearInterval(intervalId);
  }, [products]);
  const handlePrev = () => {
    setCurrentProductIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );
  };
  const handleNext = () => {
    setCurrentProductIndex((prevIndex) =>
      prevIndex === products.length - 1 ? 0 : prevIndex + 1
    );
  };
  return (
    //Nội dung trang Home ở đây
    <>
      <Navi />
      <div style={{ color: "red", textAlign: "center" }}>
        Wellcome to Tam website
      </div>
      <div
        style={{
          color: "red",
          textAlign: "center",
        }}
      >
        Design by Nguyen Hoang Tam form NTU
      </div>
      <div className="best-seller-container">
        <div className="product-wrapper">
          <h1>Best Seller</h1>
          <div className="product-slider">
            {products.length > 0 && (
              <div className="product">
                <img
                  src={products[currentProductIndex].image}
                  alt={products[currentProductIndex].title}
                  style={{ width: "200px", height: "200px" }}
                />
                <div className="title-container">
                  <p className="product-title">
                    {products[currentProductIndex].title}
                  </p>
                </div>
                <div className="button-container">
                  <button onClick={handlePrev}>&lt;</button>
                  <div>{products[currentProductIndex].rating.rate}</div>
                  <button onClick={handleNext}>&gt;</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
}
export default Home;
