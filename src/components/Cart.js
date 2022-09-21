import React from "react";
import './style/Cart.css';
import CurrencyFormat from "./shared/CurrencyFormat";

class Cart extends React.Component {
    render() {
        const gumList = this.props.cart
        return (
            <div className="cart">
                <h1>Shopping Cart</h1>
                {gumList.map((gum, index) => <CartItem key={index} gumItem={gum} />)}
            </div>
        )
    }

}

function CartItem(props) {
    const gum = props.gumItem
    return (
        <div className="cart-item">
            <div className="item-name">{gum.name}</div>
            <div className="item-price">{CurrencyFormat(gum.price)}</div>
        </div>
    )
}

export default Cart