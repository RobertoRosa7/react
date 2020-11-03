import React from "react";
import PageHeader from "../template/pageHeader";
import TodoForm from "./todoForm";
import TodoList from "./todoList";
import axios from "axios";

const api = "http://localhost:3003/api/todos";

export default class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { description: "", list: [] };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleAdd() {
    const description = this.state.description;
    axios.post(api, { description }).then(res => console.log('bingo'))
  }
  handleChange(e) {
    this.setState({ ...this.state, description: e.target.value });
  }

  render() {
    return (
      <div>
        <PageHeader name="Tarefas" small="Cadastro" />
        <TodoForm
          handleChange={this.handleChange}
          handleAdd={this.handleAdd}
          description={this.state.description}
        />
        <TodoList />
      </div>
    );
  }
}
