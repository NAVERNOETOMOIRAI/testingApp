import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as listActions from "../actions/list";

const styles = {
  default: {
    fontFamily: "Helvetica",
    fontSize: 18,
    color: "#333333",
    cursor: "pointer"
  }
};

class ListItem extends Component {
  handleOnClick = (event) => {
    this.props.actions.select(this.props.index);
  };
  render() {
    const { selected, index } = this.props;
    console.log("hi");
    return (
      <li
        onClick={this.handleOnClick}
        style={{
          ...styles.default,
          color: selected === index ? "steelblue" : "#333333"
        }}
      >
        {this.props.name}
      </li>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    selected: state.list.selected
  };
};

const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators(listActions, dispatch) };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListItem);
