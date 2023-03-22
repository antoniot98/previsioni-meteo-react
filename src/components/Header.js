import React from "react";

const Header = () => {
  return (
    <>
      {" "}
      <header>
        <h1>Previsioni del meteo in tempo reale</h1>
        <img className="sole" src="./assets/6.png" alt="sole" />
        <img className="luna" src="./assets/2.png" alt="luna" />
      </header>
    </>
  );
};

export default Header;
