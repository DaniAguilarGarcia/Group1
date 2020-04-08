
import React, { Component } from "react";
import Title from "../components/Title";
import CartColumns from "../components/shoppingCart/CartColumns";
import CartList from "../components/shoppingCart/CartList";
import CartTotals from "../components/shoppingCart/CartTotals";
import {BookConsumer } from "../context";
import EmptyCart from "../components/shoppingCart/EmptyCart";
export default class Store extends Component {
  render() {
    return (
      <section>
        <BookConsumer>
          {value => {
            const { cart } = value;
            if (cart.length > 0) {
              return (
                <React.Fragment>
                  <Title name="your" title="cart" />
                  <CartColumns />
                  <CartList value={value} />
                  <CartTotals value={value} history={this.props.history} />
                </React.Fragment>
              );
            } else {
              return <EmptyCart />;
            }
          }}
        </BookConsumer>
      </section>
    );
  }
}
   

