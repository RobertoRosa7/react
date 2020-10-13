import "./App.css";
import React from "react";
import ComParametro from "./components/basics/ComParametro";
import Primeiro from "./components/basics/Primeiro";
import Fragmento from "./components/basics/Fragmento";
import Aleatorio from "./components/basics/Aleatorio";
import Card from "./components/layout/Card";

const user = {
  nome: "Roberto",
  sobrenome: "Rosa da Silva",
  apelido: "beto",
  idade: 32,
  sexo: "Masculino",
  instituicao_ensino: "Universidade nove de Julhos",
  altura: 1.75,
  cor: "Branco",
  biotipo: "Magro",
  profissao: "Desenvolvedor de Software",
  foto: "#",
  media_social: [
    {
      tipo: "facebook",
      following: 0,
      follower: 0,
      url: "#",
    },
    {
      tipo: "twitter",
      following: 0,
      follower: 0,
      url: "#",
    },
    {
      tipo: "instagram",
      following: 0,
      follower: 0,
      url: "#",
    },
  ],
};
export default () => (
  <main className="app">
    <h2>Fundamentos React!</h2>
    <div className="app-container">
      <Card titulo="#4 Desafio aleatório!">
        <Aleatorio min={0} max={100} />
      </Card>
      <Card titulo="#3 Fragmento">
        <Fragmento />
      </Card>
      <Card titulo="#2 Primeiro component com paramentro">
        <ComParametro user={user} />
      </Card>
      <Card titulo="#1 Primeiro component">
        <Primeiro />
      </Card>
    </div>
  </main>
);
