import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Cart from "../src/Pages/Cart/Cart";
import ItemList from "../src/Pages/ItemList/ItemList";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={ItemList} />
          <Route exact path="/cart" component={Cart} />
        </Switch>
      </Router>
    );
  }
}
export default Routes;
