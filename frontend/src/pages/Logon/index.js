import React from "react";
import { FiLogIn } from "react-icons/fi";

import logoImage from "../../assets/logo.svg";
import heroesImage from "../../assets/heroes.png";

const Logon = () => {
  return (
    <div className="logon-container">
      <section className="form-section">
        <img src={logoImage} alt="Be The Hero" />

        <form>
          <h1>Faça seu logon</h1>

          <input type="text" name="" id="" placeholder="Sua ID" />
          <button type="submit">Entrar</button>

          <a href="/register">
            <FiLogIn size="16" color="#e02041" />
            Não tenho cadastro
          </a>
        </form>
      </section>

      <img src={heroesImage} alt="Heróis" />
    </div>
  );
};

export default Logon;
