import React from "react";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
function ViewUsers(user) {
  const [users, setProducts] = useState([]);
  console.log("props in: ", user);
  let { id } = useParams(); //Lấy dữ liệu id trong API
  let navigate = useNavigate();
  //Lấy data user theo id
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/users/${id}`)
      .then((response) => setProducts(response.data));
  }, [id]);
  const handleBackButton = () => {
    navigate(`/users`); //Điều hướng về lại trang list user
  };
  return (
    //Hiển thị các thông tin user đã lấy theo id
    <>
      <form className="user-display">
        <p>
          <b>Name Account: {users.username}</b>
        </p>
        <p>
          <p>First Name: {users.name?.firstname}</p>
          <p>Last Name: {users.name?.lastname}</p>
        </p>
        <p>Email: {users.email}</p>
        <p>
          Addresss: City: {users.address?.city}, Street: {users.address?.street}
          , Number: {users.address?.number}, Zipcode:{users.address?.zipcode}
        </p>
      </form>
      <br></br>
      <p className="back-button">
        <button onClick={() => handleBackButton()}>Back</button>
      </p>
    </>
  );
}

export default ViewUsers;
