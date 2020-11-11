import React from "react";
import Grid from "../template/grid";
import IconButton from "../template/iconButton";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { changeDescription, search } from "../actions/todo.actions";

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleKey = this.handleKey.bind(this);
  }
  componentWillMount() {
    this.props.search();
  }
  handleKey(e) {
    if (e.key === "Enter") {
      e.shiftKey ? this.props.handleSearch() : this.props.handleAdd();
    } else if (e.key === "Escape") {
      this.props.handleClear();
    }
  }
  render() {
    return (
      <div role="form">
        <Grid cols="12 9 10">
          <input
            type="text"
            className="form-control"
            placeholder="Adicione uma tarefa"
            onKeyUp={this.handleKey}
            id="description"
            onChange={this.props.changeDescription}
            value={this.props.description}
          />
        </Grid>

        <Grid cols="12 3 2">
          <IconButton
            style="info"
            icon="search"
            onClick={this.props.handleSearch}
          />
          <IconButton
            style="primary"
            icon="plus"
            onClick={this.props.handleAdd}
          />
          <IconButton
            style="default"
            icon="close"
            onClick={this.props.handleClear}
          />
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ description: state.todo.description });
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ changeDescription, search }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);

// foi necessario alterar o componente para classe por causa do middleware onde na actions não pode ser async
// assim é preciso disparar o dispatch para poder receber os dados do axios via promise
