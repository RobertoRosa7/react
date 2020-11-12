import React from "react";
import IconButton from "../template/iconButton";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { markAsDone, markAsPending, remove } from "../actions/todo.actions";

const TodoList = (props) => {
  const renderRows = () => {
    const list = props.list || [];

    return list.map((todo) => (
      <tr key={todo._id}>
        <td className={todo.done ? "mark-as-done" : ""}>{todo.description}</td>
        <td>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              maxWidth: "80px",
              marginLeft: "auto",
            }}
          >
            <IconButton
              hide={!todo.done}
              style="success"
              icon="check"
              onClick={() => props.markAsPending(todo)}
            />
            <IconButton
              hide={todo.done}
              style="warning"
              icon="undo"
              onClick={() => props.markAsDone(todo)}
            />
            <IconButton
              hide={!todo.done}
              style="danger"
              icon="trash-o"
              onClick={() => props.remove(todo)}
            />
          </div>
        </td>
      </tr>
    ));
  };
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Descrição</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>{renderRows()}</tbody>
    </table>
  );
};

const mapStateToProps = (state) => ({ list: state.todo.list });
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ markAsDone, markAsPending, remove }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
