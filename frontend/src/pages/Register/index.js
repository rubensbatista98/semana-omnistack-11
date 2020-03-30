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

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [city, setCity] = useState("");
  const [uf, setUf] = useState("");

  const history = useHistory();

  const handleRegister = useCallback(
    async event => {
      event.preventDefault();

      const data = {
        name,
        email,
        whatsapp,
        city,
        uf
      };

      try {
        const response = await api.post("ongs", data);

        alert(`Seu ID de acesso: ${response.data.id}`);

        history.push("/");
      } catch (error) {
        alert("Erro no cadastro, tente novamente.");
      }
    },
    [history, name, email, whatsapp, city, uf]
  );

  return (
    <PageContainer className="-register">
      <ContentContainer>
        <SectionInfo>
          <img src={logoImage} alt="Be The Hero" />

          <h1>Cadastro</h1>

          <p>
            Faça seu cadastro, entre na plataforma e ajude as pessoas a
            encontrarem os casos da sua ONG.
          </p>

          <ActionLink to="/">
            <FiArrowLeft size="16" color="#e02041" />
            Voltar para o logon
          </ActionLink>
        </SectionInfo>

        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Nome da ONG"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />

          <input
            type="text"
            placeholder="WhatsApp"
            value={whatsapp}
            onChange={e => setWhatsapp(e.target.value)}
          />

          <div className="input-group">
            <input
              type="text"
              placeholder="Cidade"
              value={city}
              onChange={e => setCity(e.target.value)}
            />

            <input
              type="text"
              placeholder="UF"
              style={{ width: 80 }}
              value={uf}
              onChange={e => setUf(e.target.value)}
            />
          </div>

          <button type="submit" className="button">
            Cadastrar
          </button>
        </form>
      </ContentContainer>
    </PageContainer>
  );
};

export default React.memo(Register);
