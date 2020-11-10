import React from "react";
import Grid from "../template/grid";
import IconButton from "../template/iconButton";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { changeDescription } from "../actions/todo.actions";

const TodoForm = (props) => {
  const handleKey = (e) => {
    if (e.key === "Enter") {
      e.shiftKey ? props.handleSearch() : props.handleAdd();
    } else if (e.key === "Escape") {
      props.handleClear();
    }
  };
  return (
    <div role="form">
      <Grid cols="12 9 10">
        <input
          type="text"
          className="form-control"
          placeholder="Adicione uma tarefa"
          onKeyUp={handleKey}
          id="description"
          onChange={props.changeDescription}
          value={props.description}
        />
      </Grid>

      <Grid cols="12 3 2">
        <IconButton style="info" icon="search" onClick={props.handleSearch} />
        <IconButton style="primary" icon="plus" onClick={props.handleAdd} />
        <IconButton style="default" icon="close" onClick={props.handleClear} />
      </Grid>
    </div>
  );
};

const mapStateToProps = (state) => ({ description: state.todo.description });
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ changeDescription }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
