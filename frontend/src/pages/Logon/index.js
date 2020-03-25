import React from "react";
import { Link } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";

import logoImage from "../../assets/logo.svg";
import heroesImage from "../../assets/heroes.png";

import "./styles.css";

const Logon = () => {
  return (
    <div className="logon-container">
      <section className="form-section">
        <img src={logoImage} alt="Be The Hero" />

        <form>
          <h1>Faça seu logon</h1>

          <input type="text" name="" id="" placeholder="Sua ID" />
          <button type="submit" className="button">
            Entrar
          </button>

          <Link to="/register" className="back-link">
            <FiLogIn size="16" color="#e02041" />
            Não tenho cadastro
          </Link>
        </form>
      </section>

      <img src={heroesImage} alt="Heróis" />
    </div>
  );
};

export default Logon;
