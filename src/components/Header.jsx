import React from "react";
import '../assets/styles/Header.css';
import LogoPkm from "../assets/images/pokemon.jpg";

const Header = () => {
  return (
    <>
      <div className="header">
      <img
          src={LogoPkm}
          alt="logo img"
          className="header-logo-img" 
        />
        <p>POKEMON</p>
      </div>
    </>
  );
};

export default Header;
