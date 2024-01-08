import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Component/Home/Home";
import { Route, Routes } from "react-router-dom";
import Login from "./Component/Login/login";
import Product from "./Component/Product/Product";
import ViewProduct from "./Component/Product/ViewProduct";
import User from "./Component/Admin/UserData/User";
import ViewUsers from "./Component/Admin/UserData/ViewUsers";
function App() {
  return (
    // Sử dụng thư việc react-router-dom để tạo các đường dẫn
    // tương ứng với các Component
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/product" element={<Product />}></Route>
        <Route path="/users" element={<User />}></Route>
        <Route path="/product/:id" element={<ViewProduct />}></Route>
        <Route path="/users/:id" element={<ViewUsers />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
