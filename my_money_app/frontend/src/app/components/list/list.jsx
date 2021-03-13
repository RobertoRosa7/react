import React from "react";
import { connect } from "react-redux";
import { getList, showUpdate, showDelete } from "../../actions/billing-cycles";
import { bindActionCreators } from "redux";

class List extends React.Component {
  componentWillMount() {
    this.props.getList();
  }

  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Mẽs</th>
            <th>Ano</th>
            <th className="table-custom-size-row">Ações</th>
          </tr>
        </thead>
        <tbody>
          {this.props.list.map((bc) => (
            <tr key={bc._id}>
              <td>{bc.name}</td>
              <td>{bc.month}</td>
              <td>{bc.year}</td>
              <td>
                <button className="btn btn-warning" onClick={() => this.props.showUpdate(bc)}>
                  <i className="fa fa-pencil"></i>
                </button>
                <button className="btn btn-danger" onClick={() => this.props.showDelete(bc)}>
                  <i className="fa fa-trash"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({ list: state.billing_cycles.list });
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ getList, showUpdate, showDelete }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(List);
