import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { selectTab } from "../../actions/tab-actions";

class TabMenu extends React.Component {
  render() {
    const { tab, target } = this.props;
    const selected = tab.selected === target;
    return (
      <li className={selected ? "active" : ""}>
        <a
          href="javascript:;"
          data-toggle="tab"
          onClick={() => this.props.selectTab(this.props.target)}
          data-target={this.props.target}
        >
          <i className={`fa fa-${this.props.icon}`}></i>
          {this.props.label}
        </a>
      </li>
    );
  }
}
const mapStateToProps = (state) => ({ tab: state.tab });
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ selectTab }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(TabMenu);
