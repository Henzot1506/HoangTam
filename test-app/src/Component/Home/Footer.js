import React from "react";

const Footer = () => {
  const footerStyle = {
    left: 0,
    bottom: 0,
    width: "100%",
    backgroundColor: "rgb(14, 155, 141)",
    padding: "20px",
    textAlign: "center",
  };

  return (
    <footer style={footerStyle}>
      <p>Design by Tam Nguyen Hoang</p>
      <p>© 2023. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
