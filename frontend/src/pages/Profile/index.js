import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiPower, FiTrash2 } from "react-icons/fi";

import api from "../../services/api";

import logoImage from "../../assets/logo.svg";
import "./styles.css";

const Profile = () => {
  const [incidents, setIncidents] = useState([]);

  const history = useHistory();

  const ongId = localStorage.getItem("ongId");
  const ongName = localStorage.getItem("ongName");

  async function handleDeleteIncident(id) {
    try {
      await api.delete(`incidents/${id}`, {
        headers: {
          Authorization: ongId
        }
      });

      const newIncidents = incidents.filter(incident => incident.id !== id);

      setIncidents(newIncidents);
    } catch (error) {
      alert("Erro ao deletar caso, tente novamente.");
    }
  }

  function handleLogout() {
    localStorage.clear();

    history.push("/");
  }

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
        <div className="column">
          <img src={logoImage} alt="Be The Hero" />
          <span>Bem vinda, {ongName}</span>
        </div>

        <div className="column">
          <Link className="button" to="/incidents/new">
            Cadastrar novo caso
          </Link>

          <button type="button" onClick={handleLogout}>
            <FiPower size="18" color="#e02041" />
          </button>
        </div>
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

            <button
              type="button"
              onClick={() => handleDeleteIncident(incident.id)}
            >
              <FiTrash2 size="20" color="#a8a8b3" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Profile;
