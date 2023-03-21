import React from "react";
import "./index.css";

const QRCode = () => {
  return (
    <>
      <div className="wrapper">
        <div className="cardContainer">
          <div className="imageContainer">
            <img src={`./../../images/image-qr-code.png`} alt="QR Code" />
          </div>
          <div className="header">
            <h2>
              Improve your front-end skills by building projects 
            </h2>
            <p>Scan the QR
              code to visit Frontend Mentor and take your coding skills to the
              next level</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default QRCode;
