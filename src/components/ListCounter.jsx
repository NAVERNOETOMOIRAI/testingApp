import React, { Component } from "react";
import { connect } from "react-redux";

class ListCounter extends Component {
  render() {
    return <h3>Задач добавлено: {this.props.counter}</h3>;
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.list.items.length
  };
};

export default connect(mapStateToProps)(ListCounter);
