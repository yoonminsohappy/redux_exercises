import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Cart from "../src/Pages/Cart/Cart";
import ItemList from "../src/Pages/ItemList/ItemList";
import Item from "../src/Pages/Item/Item";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          {/* <Route exact path="/" component={ItemList} /> */}
          <Route exact path="/" component={Item} />
          <Route exact path="/cart" component={Cart} />
        </Switch>
      </Router>
    );
  }
}
export default Routes;
