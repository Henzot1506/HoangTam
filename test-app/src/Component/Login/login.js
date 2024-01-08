import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./login.css";
import { Button, Checkbox, Form, Input } from "antd";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);
  let navigate = useNavigate();
  //Lấy data user từ API
  useEffect(() => {
    sessionStorage.clear();
    axios.get(`https://fakestoreapi.com/users`).then((response) => {
      setUsers(response.data);
    });
  }, []);
  //Kiểm tra user
  const handleLogin = (email, password) => {
    const admin_mail = "admin@gmail.com";
    const admin_password = "admin";
    if (email === admin_mail && password === admin_password) {
      console.log("Access");
      sessionStorage.setItem("id","admin");
      sessionStorage.setItem("email",admin_mail);
      sessionStorage.setItem("Password",admin_password)
      navigate("/users"); //Điều hướng sang trang quản lý users nếu là Admin
    } else {
      //Kiểm tra data của user
      const user = users.find(
        (user) => user.email === email && user.password === password
      );
      //Nếu tồn tại user
      //Thì sẽ lưu các giá trị của user vào trong Session
      if (user) {
        sessionStorage.setItem("id", user.id);
        sessionStorage.setItem("email", email);
        sessionStorage.setItem("user", user.username);
        sessionStorage.setItem("password", password);
        console.log("Access");
        console.log("User info", user);
        navigate("/", user); //Điều hướng sang trang home
      } else {
        const isUserExist = users.find((user) => user.email === email);
        //Hiển thị các lỗi đăng nhập
        if (!isUserExist) {
          console.log("Undefined User");
          alert("Undefined User");
        } else if (isUserExist && password !== "") {
          console.log("Wrong Password");
          alert("Wrong Password");
        }
      }
    }
  };
  //Xử lý khi người dùng đã nhập dữ liệu hay chưa
  //Nhập đủ data và form
  const onFinish = (values) => {
    console.log("Data Input:", values);
    handleLogin(email, password);
  };
  //Khi chưa nhập đủ data
  const onFinishFailed = (errorInfo) => {
    console.log("Data Input:", errorInfo);
  };

  return (
  //Hiển thị form Login
    <div className="login_container">
      <h2>Login</h2>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Email"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
          ]}
        >
          <Input value={email} onChange={(e) => setEmail(e.target.value)} />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
export default Login;
