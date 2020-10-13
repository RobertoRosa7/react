import "./App.css";
import React from "react";
import ComParametro from "./components/basics/ComParametro";
import Primeiro from "./components/basics/Primeiro";
import Fragmento from "./components/basics/Fragmento";
import Aleatorio from "./components/basics/Aleatorio";
import Card from "./components/layout/Card";
import Familia from "./components/basics/Familia";
import FamiliaMembro from "./components/basics/FamiliaMembros";
import ListaAlunos from "./components/listas/ListaAlunos";

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
      <Card titulo="#06 - Repetição" color="#BA4A00">
        <ListaAlunos></ListaAlunos>
      </Card>
      <Card titulo="#05 - Componente com Filhos" color="#34495E">
        <Familia sobrenome="Rosa">
          <FamiliaMembro nome="Jamie" />
          <FamiliaMembro nome="Clair" />
          <FamiliaMembro nome="Brianne" />
        </Familia>
      </Card>
      <Card titulo="#04 - Desafio aleatório!" color="#BA4A00">
        <Aleatorio min={0} max={100} />
      </Card>
      <Card titulo="#03 - Fragmento" color="#28B463">
        <Fragmento />
      </Card>
      <Card titulo="#02 - Primeiro component com paramentro" color="#CB4335">
        <ComParametro user={user} />
      </Card>
      <Card titulo="#01 - Primeiro component" color="#7D3C98">
        <Primeiro />
      </Card>
    </div>
  </main>
);
