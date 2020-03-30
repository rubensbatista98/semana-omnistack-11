import React, { useState, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";

import PageContainer from "../../components/PageContainer";
import ActionLink from "../../components/ActionLink";

import api from "../../services/api";

import logoImage from "../../assets/logo.svg";
import heroesImage from "../../assets/heroes.png";

import "./styles.css";

const Logon = () => {
  const [id, setId] = useState("");

  const history = useHistory();

  const handleLogin = useCallback(
    async event => {
      event.preventDefault();

      try {
        const response = await api.post("sessions", { id });

        localStorage.setItem("ongId", id);
        localStorage.setItem("ongName", response.data.name);

        history.push("/profile");
      } catch (error) {
        alert("Falha no login, tente novamente.");
      }
    },
    [id, history]
  );

  return (
    <PageContainer className="-logon">
      <section className="form-section">
        <img src={logoImage} alt="Be The Hero" />

        <form onSubmit={handleLogin}>
          <h1>Faça seu logon</h1>

          <input
            type="text"
            name=""
            id=""
            placeholder="Sua ID"
            value={id}
            onChange={e => setId(e.target.value)}
          />
          <button type="submit" className="button">
            Entrar
          </button>

          <ActionLink to="/register">
            <FiLogIn size="16" color="#e02041" />
            Não tenho cadastro
          </ActionLink>
        </form>
      </section>

      <img src={heroesImage} alt="Heróis" />
    </PageContainer>
  );
};

export default React.memo(Logon);
