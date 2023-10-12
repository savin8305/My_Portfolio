import React, { useState, useEffect } from "react";
import "./Loader.css";
import portimg from "../../Images/14.webp";
const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 50000); // Adjust the timeout duration as needed
  }, []);
  return (
    <>
      {" "}
      <div className="loading-interface">
        <img src={portimg} alt="" />
      </div>
      <h2 className="loadin">Welocome To My PortFolio !</h2>
    </>
  );
};

export default Loader;
