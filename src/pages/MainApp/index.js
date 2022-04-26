import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "../../components/molekuls/header";
import Footer from "../../components/molekuls/footer";
import CreateBlog from "../CreateBlog";
import DetailBlog from "../DetailBlog";
import Home from "../Home";
import "./MainApp.scss";

const MainApp = () => {
  return (
    <div className="main-app-wrapper">
      <Header />
      <div className="content-wrapper">
        <Router>
          <Switch>
            <Route path="/create-blog">
              <CreateBlog />
            </Route>
            <Route path="/detail-blog/:id">
              <DetailBlog />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </div>
      <Footer />
    </div>
  );
};

export default MainApp;
