import React, { useState, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import PageContainer from "../../components/PageContainer";
import ContentContainer from "../../components/ContentContainer";
import SectionInfo from "../../components/SectionInfo";
import ActionLink from "../../components/ActionLink";

import api from "../../services/api";

import logoImage from "../../assets/logo.svg";
import "./styles.css";

const NewIncident = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");

  const history = useHistory();

  const ongId = localStorage.getItem("ongId");

  const handleNewIncident = useCallback(
    async event => {
      event.preventDefault();

      const data = {
        title,
        description,
        value
      };

      try {
        await api.post("incidents", data, {
          headers: { Authorization: ongId }
        });

        history.push("/profile");
      } catch (error) {
        alert("Erro ao cadastrar caso, tente novamente.");
      }
    },
    [history, ongId, title, description, value]
  );

  return (
    <PageContainer className="-incident">
      <ContentContainer>
        <SectionInfo>
          <img src={logoImage} alt="Be The Hero" />

          <h1>Cadastrar novo caso</h1>

          <p>
            Descreva o caso detalhadamente para encontrar um herói para resolver
            isso.
          </p>

          <ActionLink to="/profile">
            <FiArrowLeft size="16" color="#e02041" />
            Voltar para home
          </ActionLink>
        </SectionInfo>

        <form onSubmit={handleNewIncident}>
          <input
            type="text"
            placeholder="Título do caso"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />

          <textarea
            type="email"
            placeholder="Descrição"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />

          <input
            type="text"
            placeholder="Valor em reais"
            value={value}
            onChange={e => setValue(e.target.value)}
          />

          <button type="submit" className="button">
            Cadastrar
          </button>
        </form>
      </ContentContainer>
    </PageContainer>
  );
};

export default React.memo(NewIncident);
