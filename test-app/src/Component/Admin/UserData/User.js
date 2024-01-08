import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Footer from "../../Home/Footer";

function User() {
  const [users, setUsers] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/users")
      .then((response) => setUsers(response.data))
      .catch((error) => console.log(error));
  }, []);
  const handleViewButton = (user) => {
    navigate(`/users/${user.id}`);
  };
  const backButton = () => {
    sessionStorage.clear();
    navigate(`/`);
  };
  return (
    <div className="container">
      <button
        style={{
          display: "flex",
          textAlign: "center",
          marginTop: "50px",
          marginLeft: "20px",
        }}
        onClick={() => backButton()}
      >
        Back
      </button>
      <div
        className="navbar__search"
        style={{ marginTop: "50px", marginLeft: "20px" }}
      >
        <input
          type="text"
          placeholder="Search..."
          style={{ border: "2px solid black" }}
        />
        <button type="submit">Search</button>
      </div>
      <br />
      <div>
        <table className="user-table" style={{ border: "1px solid black" }}>
          <thead>
            <tr>
              <th style={{ border: "1px solid black", padding: "5px" }}>
                Username
              </th>
              <th style={{ border: "1px solid black", padding: "5px" }}>
                Phone
              </th>
              <th style={{ border: "1px solid black", padding: "5px" }}>
                Email
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "5px",
                  width: "50%",
                }}
              >
                Address
              </th>
              <th style={{ border: "1px solid black", padding: "5px" }}>
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td style={{ border: "1px solid black", padding: "5px" }}>
                  {user.username}
                </td>
                <td style={{ border: "1px solid black", padding: "5px" }}>
                  {user.phone}
                </td>
                <td style={{ border: "1px solid black", padding: "5px" }}>
                  {user.email}
                </td>
                <td style={{ border: "1px solid black", padding: "5px" }}>
                  City: {user.address.city}, Street: {user.address.street}
                </td>
                <td style={{ border: "1px solid black", padding: "5px" }}>
                  <button
                    style={{ textAlign: "center" }}
                    onClick={() => handleViewButton(user)}
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default User;
