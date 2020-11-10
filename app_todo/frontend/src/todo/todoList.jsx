import React from "react";
import IconButton from "../template/iconButton";
import { connect } from 'react-redux'

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
              onClick={() => props.handleMarkAsPending(todo)}
            />
            <IconButton
              hide={todo.done}
              style="warning"
              icon="undo"
              onClick={() => props.handleMarkAsDone(todo)}
            />
            <IconButton
              hide={!todo.done}
              style="danger"
              icon="trash-o"
              onClick={() => props.handleRemove(todo)}
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

const matStateToProps = (state) => ({ list: state.todo.list });
export default connect(matStateToProps)(TodoList);
