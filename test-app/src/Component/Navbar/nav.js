import React from "react";
import "./nav.css";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ShoppingCartOutlined } from "@ant-design/icons";
function Navi() {
  const navigate = useNavigate();
  // Hàm xử lý đăng xuất
  const handleLogout = () => {
    sessionStorage.clear();
    navigate("/");
  };
  return (
    //Gọi các đường dẫn lên thanh navbar
    <div>
      <div className="topnav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/product">Product</NavLink>
        {!sessionStorage.user ? (
          // Hiển thị nút Login nếu chưa có ID
          <NavLink to="/login">Login</NavLink>
        ) : (
          // Hiển thị username và nút Log Out nếu có ID
          <>
            <p style={{ backgroundColor: "white" }}>
              Wellcome! {sessionStorage.user}
            </p>
            <NavLink onClick={handleLogout}>Log Out</NavLink>
          </>
        )}
        {/* Tạo 1 thanh sreach */}
        <div className="navbar__search">
          <input
            type="text"
            placeholder="Search..."
            style={{ border: "2px solid black" }}
          />
          <button type="submit">Search</button>
        </div>
        {/* Tạo icons giỏ hàng */}
        <NavLink>
          <ShoppingCartOutlined />
        </NavLink>
      </div>
    </div>
  );
}

export default Navi;
