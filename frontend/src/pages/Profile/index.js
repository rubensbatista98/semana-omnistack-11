import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiPower, FiTrash2 } from "react-icons/fi";

import api from "../../services/api";

import logoImage from "../../assets/logo.svg";
import "./styles.css";

const Profile = () => {
  const [incidents, setIncidents] = useState([]);

  const ongId = localStorage.getItem("ongId");
  const ongName = localStorage.getItem("ongName");

  useEffect(() => {
    async function loadIncidents() {
      const response = await api.get("profile", {
        headers: {
          Authorization: ongId
        }
      });

      setIncidents(response.data);
    }

    loadIncidents();
  }, [ongId]);

  return (
    <div className="profile-container">
      <header className="profile-header">
        <img src={logoImage} alt="Be The Hero" />
        <span>Bem vinda, {ongName}</span>

        <Link className="button" to="/incidents/new">
          Cadastrar novo caso
        </Link>

        <button type="button">
          <FiPower size="18" color="#e02041" />
        </button>
      </header>

      <h1>Casos cadastrados</h1>

      <ul>
        {incidents.map(incident => (
          <li key={incident.id}>
            <h3>CASO:</h3>
            <p>{incident.title}</p>

            <h3>DESCRIÇÃO:</h3>
            <p>{incident.description}</p>

            <h3>VALOR:</h3>
            <p>
              {Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
              }).format(incident.value)}
            </p>

            <button type="button">
              <FiTrash2 size="20" color="#a8a8b3" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Profile;
