import React from "react";
import { connect } from "react-redux";
import { getList } from "../../actions/billing-cycles";
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
          </tr>
        </thead>
        <tbody>
          {this.props.list.map((bc) => (
            <tr key={bc._id}>
              <td>{bc.name}</td>
              <td>{bc.month}</td>
              <td>{bc.year}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({ list: state.billing_cycles.list });
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ getList }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(List);
