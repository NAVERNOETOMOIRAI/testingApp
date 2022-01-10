import React, { Component } from "react";

import ListAdd from "../components/ListAdd";
import ListCounter from "../components/ListCounter";
import List from "../components/List";

export default class App extends Component {
  render() {
    return (
      <div>
        <ListAdd />
        <List title={"Список задач"} />
        <ListCounter />
      </div>
    );
  }
}
