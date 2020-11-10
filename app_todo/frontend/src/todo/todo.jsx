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
    this.handleSearch = this.handleSearch.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.refresh();
  }

  handleAdd() {
    const description = this.state.description;
    axios.post(api, { description }).then(() => this.refresh());
  }
  handleChange(e) {
    this.setState({ ...this.state, description: e.target.value });
  }
  refresh(description = "") {
    const search = description ? `&description__regex=/${description}/` : "";
    axios.get(`${api}?sort=-createdAt${search}`).then((res) => {
      this.setState({ ...this.state, description, list: res.data });
    });
  }
  handleRemove(todo) {
    axios
      .delete(`${api}/${todo._id}`)
      .then(() => this.refresh(this.state.description));
  }
  handleMarkAsDone(todo) {
    axios
      .put(`${api}/${todo._id}`, { ...todo, done: true })
      .then(() => this.refresh(this.state.description));
  }
  handleMarkAsPending(todo) {
    axios
      .put(`${api}/${todo._id}`, { ...todo, done: false })
      .then(() => this.refresh(this.state.description));
  }
  handleSearch() {
    this.refresh(this.state.description);
  }
  handleClear() {
    this.setState({ ...this.state, description: "" });
    this.refresh();
  }

  render() {
    return (
      <div>
        <PageHeader name="Tarefas" small="Cadastro" />
        <TodoForm
          handleChange={this.handleChange}
          handleAdd={this.handleAdd}
          handleSearch={this.handleSearch}
          handleClear={this.handleClear}
          description={this.state.description}
        />
        <TodoList
          handleRemove={this.handleRemove}
          handleMarkAsDone={this.handleMarkAsDone}
          handleMarkAsPending={this.handleMarkAsPending}
        />
      </div>
    );
  }
}
