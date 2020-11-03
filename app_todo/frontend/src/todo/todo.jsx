import React from "react";
import PageHeader from "../template/pageHeader";

export default class Todo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <PageHeader name="Tarefas" small="Cadastro" />
      </div>
    );
  }
}
