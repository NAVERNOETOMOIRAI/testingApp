import React, { Component } from "react";
import { connect } from "react-redux";

import ListItem from "./ListItem";

class List extends Component {
  render() {
    const { title, items } = this.props;
    return (
      <div>
        <h2>{title}</h2>
        <ul style={{ height: 300, overflowY: "scroll" }}>
          {items.map((item, index) => (
            <ListItem key={index} name={item.name} index={index}  />
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.list.items
  };
};

export default connect(mapStateToProps)(List);
