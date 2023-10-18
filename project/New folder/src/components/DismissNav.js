import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";

function DismissNav() {
  const [isDismissed, setIsDismissed] = useState(false);

  const handleDismiss = () => {
    setIsDismissed(true);
  };

  return (
    <div
      className={`DismissNav ${isDismissed ? "d-none" : ""}`}
      style={{
        backgroundColor: "#87CEEB",
        height: "25px",
        alignItems: "center",
        position: "relative",
        textAlign: "center",
        width: "100%",
      }}
    >
      <div className="Container" style={{ fontSize: "18px" }}>
        <p>
          Get <strong>UPTO 40% OFF</strong> on your 1st order...
        </p>
      </div>

      <button
        className="small-button"
        onClick={handleDismiss}
        aria-label="Close"
        style={{
          position: "absolute",
          top: "50%",
          right: "20px",
          transform: "translateY(-50%)",
          height: "10px",
          width: "10px",
          border: "#87CEEB",
          backgroundColor: "#87CEEB",
        }}
      >
        <RxCross2
          style={{
            position: "absolute",
            top: "50%",
            right: "20px",
            transform: "translateY(-50%)",
            height: "10px",
            width: "10px",
          }}
        />
      </button>
    </div>
  );
}

export default DismissNav;
