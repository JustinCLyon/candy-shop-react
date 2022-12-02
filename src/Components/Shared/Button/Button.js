import React from "react";
import './Button.css';

class Button extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            btnLabel: this.props.btnLabel,
            onClickFunction: this.props.onClickEvent
        }
    }

    render() {
        const candy = {
            name: "Mars",
            price: 1.49,
            imgURL: "https://product-images.metro.ca/images/h1b/h39/10229988556830.jpg"
        }
        return (
            <div className="button-wrapper">
            <button onClick={() => this.state.onClickFunction(candy)} className="default-button">{this.state.btnLabel}</button>
            </div>
        )
    }
}

export default Button