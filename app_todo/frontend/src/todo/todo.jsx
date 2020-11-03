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
    this.handleRemove = this.handleRemove.bind(this);
    this.handleMarkAsDone = this.handleMarkAsDone.bind(this);
    this.handleMarkAsPending = this.handleMarkAsPending.bind(this);
    this.refresh();
  }

  handleAdd() {
    const description = this.state.description;
    axios.post(api, { description }).then(() => this.refresh());
  }
  handleChange(e) {
    this.setState({ ...this.state, description: e.target.value });
  }
  refresh() {
    axios
      .get(`${api}?sort=-createdAt`)
      .then((res) =>
        this.setState({ ...this.state, description: "", list: res.data })
      );
  }
  handleRemove(todo) {
    axios.delete(`${api}/${todo._id}`).then(() => this.refresh());
  }
  handleMarkAsDone(todo) {
    axios
      .put(`${api}/${todo._id}`, { ...todo, done: true })
      .then(() => this.refresh());
  }
  handleMarkAsPending(todo) {
    axios
      .put(`${api}/${todo._id}`, { ...todo, done: false })
      .then(() => this.refresh());
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
        <TodoList
          list={this.state.list}
          handleRemove={this.handleRemove}
          handleMarkAsDone={this.handleMarkAsDone}
          handleMarkAsPending={this.handleMarkAsPending}
        />
      </div>
    );
  }
}
