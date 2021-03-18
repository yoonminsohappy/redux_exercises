import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CartFrame from "./Pages/CartFrame/CartFrame";
import ItemList from "./Pages/ItemList/ItemList";
import CartItem from "./Pages/CartItem/CartItem";
import Item from "./Pages/Item/Item";
class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={ItemList} />
          {/* <Route exact path="/" component={Item} /> */}
          {/* <Route exact path="/" component={() => <Item item={item} />} /> */}
          <Route exact path="/cart" component={CartFrame} />
          {/* <Route exact path="/cart" component={CartItem} /> */}
        </Switch>
      </Router>
    );
  }
}
export default Routes;

// const item = [
//   { img: "images/book.png", name: "달러구트 꿈 백화점", price: "13800" },
//   { img: "images/chesnut-pie.jpeg", name: "밤파이", price: "8500" },
// ];
