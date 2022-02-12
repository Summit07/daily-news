import "./App.css";
import Navbar from "./component/Navbar";
import News from "./component/News";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Component } from "react";

export default class App extends Component {
  pageSize = 6;
  render() {
    return (
      <div className="">
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <News
                key="health"
                pageSize={this.pageSize}
                country="in"
                catagory="health"
              />
            </Route>
            <Route exact path="/science">
              <News
                key="science"
                pageSize={this.pageSize}
                country="in"
                catagory="science"
              />
            </Route>
            <Route exact path="/sports">
              <News
                key="sports"
                pageSize={this.pageSize}
                country="in"
                catagory="sports"
              />
            </Route>
            <Route exact path="/technology">
              <News
                key="technology"
                key="entertainment"
                pageSize={this.pageSize}
                country="in"
                catagory="technology"
              />
            </Route>
            <Route exact path="/business">
              <News
                key="business"
                pageSize={this.pageSize}
                country="in"
                catagory="business"
              />
            </Route>
            <Route exact path="/general">
              <News
                key="entertainment"
                pageSize={this.pageSize}
                country="in"
                catagory="general"
              />
            </Route>
            <Route exact path="/entertainment">
              <News
                key="entertainment"
                pageSize={this.pageSize}
                country="in"
                catagory="entertainment"
              />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
