import React from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import logoImage from "../../assets/logo.svg";
import "./styles.css";

const NewIncident = () => {
  return (
    <div className="incident-container">
      <div className="content">
        <section className="section-info">
          <img src={logoImage} alt="Be The Hero" />

          <h1>Cadastrar novo caso</h1>
          <p>
            Descreva o caso detalhadamente para encontrar um herói para resolver
            isso.
          </p>

          <Link to="/profile" className="back-link">
            <FiArrowLeft size="16" color="#e02041" />
            Voltar para home
          </Link>
        </section>

        <form>
          <input type="text" placeholder="Título do caso" />
          <textarea type="email" placeholder="Descrição" />
          <input type="text" placeholder="Valor em reais" />

          <button type="submit" className="button">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewIncident;
