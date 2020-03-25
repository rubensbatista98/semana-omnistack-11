import React from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import logoImage from "../../assets/logo.svg";
import "./styles.css";

const Register = () => {
  return (
    <div className="register-container">
      <div className="content">
        <section className="section-info">
          <img src={logoImage} alt="Be The Hero" />

          <h1>Cadastro</h1>
          <p>
            Faça seu cadastro, entre na plataforma e ajude as pessoas a
            encontrarem os casos da sua ONG.
          </p>

          <Link to="/" className="back-link">
            <FiArrowLeft size="16" color="#e02041" />
            Voltar para o logon
          </Link>
        </section>

        <form>
          <input type="text" placeholder="Nome da ONG" />
          <input type="email" placeholder="E-mail" />
          <input type="text" placeholder="WhatsApp" />

          <div className="input-group">
            <input type="text" placeholder="Cidade" />
            <input type="text" placeholder="UF" style={{ width: 80 }} />
          </div>

          <button type="submit" className="button">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
