import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CartFrame from "./Pages/CartFrame/CartFrame";
import ItemList from "../src/Pages/ItemList/ItemList";
import CartItem from "./Pages/CartItem/CartItem";
class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={ItemList} />
          <Route exact path="/cart" component={CartFrame} />
          {/* <Route exact path="/cart" component={CartItem} /> */}
        </Switch>
      </Router>
    );
  }
}
export default Routes;
