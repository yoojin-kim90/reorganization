import "../App.css";
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Write from "../pages/write";
import List from "../pages/list";
import Detail from "../pages/detail";

const style = {
  display: "block",
  textAlign: "center",
  margin: "auto",
  width: "800px",
  height: "300px",
};

function App() {
  return (
    <React.Fragment style={style}>
      <BrowserRouter>
        <Route exact path="/" exact component={List} />
        <Route path="/post" exact component={Write} />
        <Route path="/detail" exact component={Detail} />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
