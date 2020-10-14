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
import TabelaProdutos from "./components/listas/TabelaProdutos";
import ParOuImpar from "./components/condicional/ParOuImpar";
import { user } from "./data/user";
import UsuarioInfo from "./components/condicional/UsuarioInfo";
import ComunicacaoDireta from "./components/comunicacao/ComunicacaoDireta";
import ComunicacaoIndireta from "./components/comunicacao/ComunicacaoIndireta";

export default () => (
  <div className="app">
    <div className="titulo">Fundamentos React!</div>
    <div className="app-container">
      <Card titulo="#10 - Comunicação Indireta" color="#34495E">
        <ComunicacaoIndireta />
      </Card>
      <Card titulo="#09 - Comunicação Direta" color="#CB4335">
        <ComunicacaoDireta></ComunicacaoDireta>
      </Card>
      <Card titulo="#08 - Condicional" color="#28B463">
        <ParOuImpar number={20} />
        <UsuarioInfo user={user}></UsuarioInfo>
      </Card>
      <Card titulo="#07 - Tabela de Produtos" color="#7D3C98">
        <TabelaProdutos />
      </Card>
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
  </div>
);
