import React from "react";
import { Link } from "react-router-dom";
import { FiPower, FiTrash2 } from "react-icons/fi";

import logoImage from "../../assets/logo.svg";
import "./styles.css";

const Profile = () => {
  return (
    <div className="profile-container">
      <header className="profile-header">
        <img src={logoImage} alt="Be The Hero" />
        <span>Bem vinda, APAD</span>

        <Link className="button" to="/incidents/new">
          Cadastrar novo caso
        </Link>

        <button type="button">
          <FiPower size="18" color="#e02041" />
        </button>
      </header>

      <h1>Casos cadastrados</h1>

      <ul>
        <li>
          <h3>CASO:</h3>
          <p>Caso teste</p>

          <h3>DESCRIÇÃO:</h3>
          <p>Descrição teste</p>

          <h3>VALOR:</h3>
          <p>R$ 120,00</p>

          <button type="button">
            <FiTrash2 size="20" color="#a8a8b3" />
          </button>
        </li>

        <li>
          <h3>CASO:</h3>
          <p>Caso teste</p>

          <h3>DESCRIÇÃO:</h3>
          <p>Descrição teste</p>

          <h3>VALOR:</h3>
          <p>R$ 120,00</p>

          <button type="button">
            <FiTrash2 size="20" color="#a8a8b3" />
          </button>
        </li>

        <li>
          <h3>CASO:</h3>
          <p>Caso teste</p>

          <h3>DESCRIÇÃO:</h3>
          <p>Descrição teste</p>

          <h3>VALOR:</h3>
          <p>R$ 120,00</p>

          <button type="button">
            <FiTrash2 size="20" color="#a8a8b3" />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
