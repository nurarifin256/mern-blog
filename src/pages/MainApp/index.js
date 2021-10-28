import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "../../components/molekuls/header";
import CreateBlog from "../CreateBlog";
import DetailBlog from "../DetailBlog";
import Home from "../Home";

const MainApp = () => {
  return (
    <div>
      <Header />
      <Router>
        <Switch>
          <Route path="/create-blog">
            <CreateBlog />
          </Route>
          <Route path="/detail-blog">
            <DetailBlog />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
      <p>Footer</p>
    </div>
  );
};

export default MainApp;
